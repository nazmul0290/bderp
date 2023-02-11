/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/ui/Button";
import Headline from "@/components/ui/Headline";
import LoadingButton from "@/components/ui/LoadingButton";
import Paragraph from "@/components/ui/Paragraph";
import useAuth from "@/lib/hooks/auth";
import isEmpty from "@/utils/is-empty";
import { forgotMutation } from "@/utils/resolvers/mutation";
import { forgotYupValidation } from "@/utils/yupValidation";
import { Grid } from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import CustomTextField from "../../global-components/inputs/CustomTextField";

const ForgotSection = () => {
  const { forgotPassword } = useAuth();
  const initialValues = {
    email: "",
  };

  const { mutate, isLoading } = useMutation(forgotMutation);

  const { values, handleChange, touched, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: forgotYupValidation,
    onSubmit: (values) => {
      if (isEmpty(values.email)) {
        toast.error("Email can not be empty");
      }
      forgotPassword({ body: values, mutate });
    },
  });
  return (
    <section className="container py-10">
      <div className="flex items-center justify-between md:space-x-4">
        <div className="hidden md:w-1/2 md:block">
          <Image
            src="/img/forgot/forgot-page-vector.jpg"
            alt="Forgot Password."
            width={600}
            height={600}
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="max-w-[500px] mx-auto">
            <div>
              <Headline>Forget Password?</Headline>
              <Paragraph>
                Enter your email and we'll send you instructions to reset your
                password
              </Paragraph>
            </div>
            <form className="mt-5" onSubmit={handleSubmit}>
              <Grid item xs={12}>
                <CustomTextField
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  type="email"
                  name="email"
                  label="Email"
                />
              </Grid>

              <Grid item xs={12} className="mt-5">
                {isLoading ? (
                  <LoadingButton />
                ) : (
                  <Button fullWidth variant="contained">
                    {" "}
                    Send Reset Link{" "}
                  </Button>
                )}
              </Grid>
            </form>
            <div className="mt-5 text-center">
              <Link href="/login">Back to Login</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotSection;
