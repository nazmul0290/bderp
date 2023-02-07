import PasswordInput from "@/components/global-components/inputs/PasswordInput";
import Button from "@/components/ui/Button";
import CustomButton from "@/components/ui/Button";
import Headline from "@/components/ui/Headline";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";

const ResetForm = () => {
  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <>
      <div className="max-w-[500px] mx-auto">
        <div>
          <Headline>Reset Password</Headline>
        </div>
        <form className="mt-5">
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
                errors={errors.confirmPassword}
                values={values.confirmPassword}
                touched={touched.confirmPassword}
                handleChange={handleChange}
                label="Confirm Password"
                name="confirmPassword"
              />
            </Grid>

            <Grid item xs={12}>
              <Button fullWidth variant="container">
                {" "}
                Set new Password{" "}
              </Button>
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
