import CheckBox from "@/components/global-components/inputs/CheckBox";
import CustomTextField from "@/components/global-components/inputs/CustomTextField";
import Button from "@/components/ui/Button";
import useUser from "@/lib/hooks/useUser";
import { useToken } from "@/lib/hooks/useHooks";
import isEmpty from "@/utils/is-empty";
import {
  addBusinessTypeInAccount,
  createBusinessAccount,
} from "@/utils/resolvers/mutation";
import { businessTypes } from "@/utils/resolvers/query";
import { businessTypeValidationSchema } from "@/utils/yupValidation";
import { Grid } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";

const AccountForm = () => {
  const [bearerToken, setBearerToken] = useToken("BDERP_authToken");
  const user = useUser();

  const [checked, setChecked] = useState([]);
  const [businessTypeError, setBusinessTypeError] = useState(false);

  const router = useRouter();

  const { mutate: createAccountMutation } = useMutation(createBusinessAccount);
  const { mutate: updateBusinessAccount } = useMutation(
    addBusinessTypeInAccount
  );

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

  const updateAccount = async () => {
    if (isEmpty(checked)) {
      setBusinessTypeError(true);
      return;
    }
    const variables = {
      business_type_id: [...checked],
    };

    updateBusinessAccount(
      {
        businessTypes: variables,
        token: bearerToken,
        accountUuid: user?.account.uuid,
      },
      {
        onSuccess: (data) => {
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
    if (isEmpty(values.company_name) || isEmpty(checked)) {
      if (isEmpty(values.company_name)) {
        setFieldTouched("company_name", true);
        setFieldError("company_name", "Company name is required!");
      }
      if (isEmpty(checked)) {
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
          router.push("/verify-number");
        },
        onError: (err) => {
          toast.error(err.response.data.message);
          Object.keys(err?.response.data.message).map((key) => {
            setFieldError(key, err.response.data.message[key][0]);
          });
        },
      }
    );

    //TODO: I need here response with all useraccount so that i can save to localhost

    /* localStorage.setItem("business-type", JSON.stringify(variables));
    router.push("/verify-number"); */
  };

  return (
    <>
      <div className="mx-auto max-w-[500px] mt-4">
        {user.account_id !== 1 ? (
          <>
            <h1 className="text-sm font-bold text-center lg:text-xl md:text-lg text-primary">
              Your Company name is {user?.account?.company_name}
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
          <CheckBox
            checked={checked}
            setChecked={setChecked}
            businessTypes={businessType}
            businessTypeError={businessTypeError}
            setBusinessTypeError={setBusinessTypeError}
          />
        )}
      </div>
      <div className="flex justify-center mt-10 space-x-3">
        <Button
          className="px-6 py-2 text-white rounded-md bg-gradient-to-r from-[#4680ff] to-[#5b89ec] "
          onClick={user.account_id !== 1 ? updateAccount : createAccount}
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
    </>
  );
};

export default AccountForm;
