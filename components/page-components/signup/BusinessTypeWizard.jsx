/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";

import { useFormik } from "formik";

import { Grid } from "@mui/material";
import CustomSelectOption from "./component/CustomSelectOption";
import { useSelector } from "react-redux";
import { businessTypeValidationSchema } from "@/utils/yupValidation";
import CustomTextField from "../../global-components/inputs/CustomTextField";
import isEmpty from "@/utils/is-empty";
import { useRouter } from "next/router";
import SingupStageWizard from "@/components/ui/SingupStageWizard";
import Button from "@/components/ui/Button";
import { useMutation, useQuery } from "react-query";
import {
  addBusinessTypeInAccount,
  createBusinessAccount,
} from "@/utils/resolvers/mutation";
import { useToken } from "@/lib/hooks/useHooks";
import { businessTypes } from "@/utils/resolvers/query";
import { toast } from "react-toastify";

const BusinessTypeWizard = () => {
  const checkedCategory = useSelector((state) => state.checkbox.checkboxArr);

  const [companyName, setCompanyName] = useState();
  const [user, setUser] = useState("");
  const [businessTypeError, setBusinessTypeError] = useState(false);
  const router = useRouter();
  const [bearerToken, setBearerToken] = useToken("BDERP_authToken");

  const { mutate: createAccountMutation } = useMutation(createBusinessAccount);
  const { mutate: updateBusinessAccount } = useMutation(
    addBusinessTypeInAccount
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("BDERP_register"));

    if (userData?.account?.id !== 1) {
      setCompanyName(userData?.account?.company_name);
    }
    setUser(userData);
  }, []);

  const {
    data: businessType,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: "businessTypes",
    queryFn: businessTypes,
    refetchOnWindowFocus: false,
  });

  const {
    values,
    errors,
    touched,
    setFieldError,
    handleChange,
    handleBlur,
    setFieldTouched,
    handleReset,
  } = useFormik({
    initialValues: {
      company_name: "",
    },
    validationSchema: businessTypeValidationSchema,
  });

  const updateAccount = async () => {
    if (isEmpty(checkedCategory)) {
      setBusinessTypeError(true);
      return;
    }
    const variables = {
      business_type_id: [...checkedCategory],
    };
    console.log(variables);

    updateBusinessAccount(
      {
        businessTypes: variables,
        token: bearerToken,
        accountUuid: user?.account.uuid,
      },
      {
        onSuccess: (data) => {
          console.log(data);
          router.push("/verify-number");
        },
        onError: (err) => {
          /*  Object.keys(err.response.data.message).map((key) => {
          setFieldError(key, err.response.data.message[key][0]);
        }); */
          toast.error(err.response.data.message.accountBusinessType[0]);
        },
      }
    );
  };

  const createAccount = async () => {
    if (isEmpty(values.company_name) || isEmpty(checkedCategory)) {
      if (isEmpty(values.company_name)) {
        setFieldTouched("company_name", true);
        setFieldError("company_name", "Company name is required!");
      }
      if (isEmpty(checkedCategory)) {
        setBusinessTypeError(true);
      }

      return;
    }

    const variables = {
      company_name: values.company_name,
      business_type_id: [...checkedCategory],
      first_name: user.first_name,
      last_name: user.last_name,
    };

    createAccountMutation(
      { account: variables, token: bearerToken },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (err) => {
          toast.error(err.response.data.message);
          Object.keys(err?.response.data.message).map((key) => {
            setFieldError(key, err.response.data.message[key][0]);
          });
        },
      }
    );

    /* localStorage.setItem("business-type", JSON.stringify(variables));
    router.push("/verify-number"); */
  };

  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <div>
          <SingupStageWizard activeStep={0} />
        </div>
        <div className="mt-2 text-center md:mt-5 text-primary">
          <h1 className="text-sm font-bold lg:text-xl md:text-lg">
            Welcome {user.first_name} {user.last_name}! Let's Get Started...
          </h1>
          <h1 className="font-bold xl:text-2xl lg:text-xl md:text-lg ">
            What do you do?
          </h1>
          <p className="font-medium">
            Which of the following best describer the type of business you in?
          </p>
        </div>
        <div className="mx-auto max-w-[500px] mt-4">
          {companyName ? (
            <>
              <h1 className="text-sm font-bold text-center lg:text-xl md:text-lg text-primary">
                Your Company name is {companyName}
              </h1>
            </>
          ) : (
            <>
              <h1 className="text-sm font-bold lg:text-xl md:text-lg text-primary">
                Hey! Have you forgotten to put your company name ?
              </h1>
              <div className="max-w-[300px] mx-auto mt-2">
                <Grid item xs={12}>
                  <CustomTextField
                    name="company_name"
                    type="text"
                    label="Company Name"
                    onBlur={handleBlur}
                    values={values.company_name}
                    onChange={handleChange}
                    error={errors.company_name && Boolean(errors.company_name)}
                    helperText={errors.company_name && errors.company_name}
                  />
                </Grid>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center justify-center mx-auto gap-5 mt-10 max-w-[700px] flex-wrap">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            businessType?.data.data.map((business) => {
              return (
                <CustomSelectOption
                  businessTypeError={businessTypeError}
                  business={business}
                  key={business.id}
                  setBusinessTypeError={setBusinessTypeError}
                />
              );
            })
          )}
        </div>
        <div className="flex justify-center mt-10 space-x-3">
          <Button
            className="px-6 py-2 text-white rounded-md bg-gradient-to-r from-[#4680ff] to-[#5b89ec] "
            onClick={companyName ? updateAccount : createAccount}
          >
            Proceed
          </Button>
          <Button
            className="px-6 py-2 text-white rounded-md bg-gradient-to-r from-[#4680ff] to-[#5b89ec] "
            onClick={() => {
              router.push("/verify-number");
            }}
          >
            Skip
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessTypeWizard;
