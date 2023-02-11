import PasswordInput from "@/components/global-components/inputs/PasswordInput";
import Button from "@/components/ui/Button";
import LoadingButton from "@/components/ui/LoadingButton";
import useAuth from "@/lib/hooks/auth";

import isEmpty from "@/utils/is-empty";
import { loginMutation } from "@/utils/resolvers/mutation";
import { loginYupValidation } from "@/utils/yupValidation";
import { Grid } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import CustomTextField from "../../../global-components/inputs/CustomTextField";

const LoginForm = () => {
  const { loginController } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "/",
  });

  const { mutate, isLoading } = useMutation(loginMutation);
  console.log(isLoading);

  const {
    values,
    handleSubmit,
    handleChange,
    setFieldError,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginYupValidation,
    onSubmit: (values) => {
      if (isEmpty(values.email) || isEmpty(values.password)) {
        return toast.error("You can't send empty field", {
          position: "top-center",
        });
      }

      loginController({
        variables: {
          email: values.email,
          password: values.password,
        },
        setFieldError,
        mutate,
      });
    },
  });

  return (
    <form className="mt-5" onSubmit={handleSubmit} autoComplete="new-password">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomTextField
            value={values.email}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            autoComplete="new-password"
            autoFocus
            type="email"
            name="email"
            label="Email"
          />
        </Grid>

        <Grid item xs={12}>
          <PasswordInput
            errors={errors.password}
            handleChange={handleChange}
            values={values.password}
            touched={touched.password}
            autoComplete="new-password"
            label="Password"
            name="password"
            showError={false}
          />
        </Grid>

        <Grid item xs={12}>
          {isLoading ? (
            <LoadingButton />
          ) : (
            <Button
              variant="contained"
              className="relative h-10 "
              disabled={isLoading}
              fullWidth
            >
              Login
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
