/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box } from "@mui/system";
import { countries } from "@/lib/data";
import { useFormik } from "formik";
import CheckIcon from "@mui/icons-material/Check";

import {
  containsNumber,
  containsSpecialChars,
  containsUpperAndLowercase,
} from "@/lib/passwordTester";
import CustomTextField from "@/components/input/CustomTextField";
import { signUpValidationSchema } from "@/utils/yupValidation";
import CustomButton from "@/components/ui/Button";
import { useRouter } from "next/router";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState("false");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      countryName: { code: "BD", label: "Bangladesh", phone: "880" },
      companyName: "",
      privacy_aggrement: false,
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async (values) => {
      const variables = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        password: values.password,
        password_confirmation: values.password,
        privacy_aggrement: values.privacy_aggrement ? 1 : 0,
      };

      if (values.companyName) {
        variables.company_name = values.companyName;
      }

      localStorage.setItem("register", JSON.stringify(variables));
      router.push("/confirm-email");
      formik.resetForm();
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form className="mt-5" onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            name="firstName"
            label="First Name"
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            name="lastName"
            label="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            type="email"
            name="email"
            label="Email"
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            fullWidth
            options={countries}
            autoHighlight
            required
            value={formik.values.countryName}
            name="countryName"
            onChange={(event, newValue) => {
              formik.setFieldValue("countryName", newValue);
            }}
            isOptionEqualToValue={(option, value) => {
              option.code === formik.values.countryName?.code;
            }}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label} ({option.code})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a country"
                name="countryName"
                error={
                  formik.touched.countryName &&
                  Boolean(formik.errors.countryName)
                }
                helperText={
                  formik.touched.countryName &&
                  formik.errors.countryName &&
                  "Must Have to select a country."
                }
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel
              htmlFor="outlined-adornment-password"
              error={formik.touched.password && Boolean(formik.errors.password)}
            >
              Password
            </InputLabel>
            <OutlinedInput
              name="password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
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
            <div className="flex flex-col mt-5 space-y-1">
              {formik.values.password.length < 8 ? (
                <div className="flex space-x-2 text-sm text-red-500">
                  <CloseIcon fontSize="small" /> <p>Use 8 or More Characters</p>
                </div>
              ) : (
                <div className="flex space-x-2 text-sm text-green-500">
                  <CheckIcon fontSize="small" /> <p>Use 8 or More Characters</p>
                </div>
              )}

              {containsUpperAndLowercase(formik.values.password) ? (
                <div className="flex space-x-2 text-sm text-green-500">
                  <CheckIcon fontSize="small" />{" "}
                  <p> Use Upper and Lower-Case Letters (e.g. Aa)</p>
                </div>
              ) : (
                <div className="flex space-x-2 text-sm text-red-500">
                  <CloseIcon fontSize="small" />{" "}
                  <p> Use Upper and Lower-Case Letters (e.g. Aa)</p>
                </div>
              )}

              {containsNumber(formik.values.password) ? (
                <div className="flex space-x-2 text-sm text-green-500">
                  <CheckIcon fontSize="small" /> <p>Use a Number (e.g. 1234)</p>
                </div>
              ) : (
                <div className="flex space-x-2 text-sm text-red-500">
                  <CloseIcon fontSize="small" /> <p>Use a Number (e.g. 1234)</p>
                </div>
              )}

              {containsSpecialChars(formik.values.password) ? (
                <div className="flex space-x-2 text-sm text-green-500">
                  <CheckIcon fontSize="small" />{" "}
                  <p>Use a Symbol (e.g. ! @ # $)</p>
                </div>
              ) : (
                <div className="flex space-x-2 text-sm text-red-500">
                  <CloseIcon fontSize="small" />{" "}
                  <p>Use a Symbol (e.g. ! @ # $)</p>
                </div>
              )}
            </div>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            error={
              formik.touched.companyName && Boolean(formik.errors.companyName)
            }
            helperText={formik.touched.companyName && formik.errors.companyName}
            label="Company Name  (Optional)"
          />
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="privacy_aggrement"
                  checked={formik.values.privacy_aggrement}
                  onChange={formik.handleChange}
                  defaultChecked
                />
              }
              label="I agree to tranzact Privacy Policy & Terms of Service"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <CustomButton type="submit">Sign Up</CustomButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignUpForm;
