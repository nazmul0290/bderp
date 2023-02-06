import CustomTextField from "@/components/input/CustomTextField";
import CustomButton from "@/components/ui/Button";
import { loginYupValidation } from "@/utils/yupValidation";
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
import React, { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginYupValidation,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
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

        <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel
              htmlFor="outlined-adornment-password"
              error={touched.password && Boolean(errors.password)}
            >
              Password
            </InputLabel>
            <OutlinedInput
              name="password"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            {touched.password && (
              <h5 className="ml-2 text-xs text-red-500 md:text-sm">
                {errors.password}
              </h5>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <CustomButton type="submit">Sign Up</CustomButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
