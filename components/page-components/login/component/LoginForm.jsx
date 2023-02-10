import PasswordInput from "@/components/global-components/inputs/PasswordInput";
import Button from "@/components/ui/Button";
import { loginMutation } from "@/utils/resolvers/mutation";
import { loginYupValidation } from "@/utils/yupValidation";
import { Grid } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useMutation } from "react-query";
import CustomTextField from "../../../global-components/inputs/CustomTextField";

const LoginForm = () => {
  const { mutate } = useMutation(loginMutation);
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginYupValidation,
      onSubmit: (values) => {
        console.log(values);
        const variables = {
          email: values.email,
          password: values.password,
        };
        mutate(variables, {
          onSuccess: (data) => {
            console.log(data);
          },
          onError: (err) => {
            console.log(err);
          },
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
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" fullWidth>
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
