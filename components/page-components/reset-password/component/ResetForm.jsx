import PasswordInput from "@/components/global-components/inputs/PasswordInput";
import Button from "@/components/ui/Button";
import CustomButton from "@/components/ui/Button";
import Headline from "@/components/ui/Headline";
import LoadingButton from "@/components/ui/LoadingButton";
import useAuth from "@/lib/hooks/auth";
import isEmpty from "@/utils/is-empty";
import { resetMutation } from "@/utils/resolvers/mutation";
import { resetPasswordValidation } from "@/utils/yupValidation";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const ResetForm = () => {
  const router = useRouter();
  const { resetPassword } = useAuth();
  const { email, token } = router.query;

  const { mutate, isLoading } = useMutation(resetMutation);

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      password: "",
      password_confirmation: "",
    },
    validationSchema: resetPasswordValidation,
    onSubmit: (values) => {
      if (isEmpty(values.password) || isEmpty(values.password_confirmation)) {
        return toast.error("Field should not be empty");
      }
      if (values.password !== values.password_confirmation) {
        return toast.error("Password Mismatch!", {
          position: "top-center",
        });
      }
      const variables = {
        ...values,
        email,
        token,
        old_password_token: 0,
      };

      resetPassword({ body: variables, mutate });
    },
  });

  return (
    <>
      <div className="max-w-[500px] mx-auto">
        <div>
          <Headline>Reset Password</Headline>
        </div>
        <form className="mt-5" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <PasswordInput
                errors={errors.password}
                values={values.password}
                handleChange={handleChange}
                touched={touched.password}
                name="password"
                label="Password"
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordInput
                errors={errors.password_confirmation}
                values={values.password_confirmation}
                touched={touched.password_confirmation}
                handleChange={handleChange}
                label="Confirm Password"
                name="password_confirmation"
              />
            </Grid>

            <Grid item xs={12}>
              {isLoading ? (
                <LoadingButton />
              ) : (
                <Button fullWidth> Set new Password </Button>
              )}
            </Grid>
          </Grid>
        </form>
        <div className="mt-5 text-center">
          <Link href="/login">Back to Login</Link>
        </div>
      </div>
    </>
  );
};

export default ResetForm;
