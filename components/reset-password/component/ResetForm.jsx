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
import Link from "next/link";
import React, { useState } from "react";

const ResetForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="max-w-[500px] mx-auto">
        <div>
          <Headline>Reset Password</Headline>
        </div>
        <form className="mt-5">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  /*  error={touched.password && Boolean(errors.password)} */
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  name="password"
                  type={showPassword ? "text" : "password"}
                  /*  value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)} */
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
                {/* {touched.password && (
                <h5 className="ml-2 text-xs text-red-500 md:text-sm">
                  {errors.password}
                </h5>
              )} */}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel
                  htmlFor="outlined-adornment-confirmPassword"

                  /*  error={touched.password && Boolean(errors.password)} */
                >
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  /*  value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)} */
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle confirmPassword visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {/* {touched.password && (
                <h5 className="ml-2 text-xs text-red-500 md:text-sm">
                  {errors.password}
                </h5>
              )} */}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <CustomButton className="w-full uppercase">
                {" "}
                Set new Password{" "}
              </CustomButton>
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
