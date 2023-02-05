/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import SingupStageWizard from "../ui/SingupStageWizard";
import { Formik, useFormik } from "formik";

import { Button, Grid, TextField } from "@mui/material";
import CustomSelectOption from "./component/CustomSelectOption";
import { useSelector } from "react-redux";
import { businessTypeValidationSchema } from "@/utils/yupValidation";
import CustomTextField from "../input/CustomTextField";
import CustomButton from "../ui/CustomButton";
import { businessType } from "@/lib/data";
import isEmpty from "@/utils/is-empty";
import { useRouter } from "next/router";

const BusinessTypeWizard = () => {
  const checkedCategory = useSelector((state) => state.checkbox.checkboxArr);
  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [businessTypeError, setBusinessTypeError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("register"));
    if (userData.company_name) {
      setCompanyName(userData.company_name);
    }
    setName(userData.first_name);
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
    };

    localStorage.setItem("business-type", JSON.stringify(variables));
    router.push("/verify-number");
  };

  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <div>
          <SingupStageWizard activeStep={0} />
        </div>
        <div className="mt-2 text-center md:mt-5 text-primary">
          <h1 className="text-sm font-bold lg:text-xl md:text-lg">
            Welcome {name}! Let's Get Started...
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
                    required
                    type="text"
                    label="Company Name"
                    onBlur={handleBlur}
                    values={values.company_name}
                    onChange={handleChange}
                    error={
                      errors.company_name &&
                      touched.company_name &&
                      Boolean(errors.company_name)
                    }
                    helperText={
                      errors.company_name &&
                      touched.company_name &&
                      errors.company_name
                    }
                  />
                </Grid>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center justify-center mx-auto gap-5 mt-10 max-w-[700px] flex-wrap">
          {businessType.map((business) => {
            return (
              <CustomSelectOption
                businessTypeError={businessTypeError}
                business={business}
                key={business.id}
                setBusinessTypeError={setBusinessTypeError}
              />
            );
          })}
        </div>
        <div className="flex justify-center mt-10 space-x-3">
          <CustomButton
            className="px-6 py-2 text-white rounded-md bg-gradient-to-r from-[#4680ff] to-[#5b89ec] "
            onClick={createAccount}
          >
            Proceed
          </CustomButton>
          <Button className="px-6 py-2 text-white rounded-md bg-gradient-to-r from-[#4680ff] to-[#5b89ec] ">
            Skip
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessTypeWizard;
