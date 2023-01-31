/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  Autocomplete,
  Button,
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
import { Formik, Form, useFormik } from "formik";
import CheckIcon from "@mui/icons-material/Check";
import * as yup from "yup";
import {
  containsNumber,
  containsSpecialChars,
  containsUpperAndLowercase,
} from "@/lib/passwordTester";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your First Name")
    .required("First Name is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .required("Password is required"),
  lastName: yup
    .string("Enter Your last name")
    .required("Last Name is required!"),
  /*   countryName: yup
    .object("Choose a country")
    .required("Country should select. "), */
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
});

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState("false");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      countryName: "",
      companyName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  console.log(formik.values.password);

  return (
    <form className="mt-5" onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="firstName"
            fullWidth
            id="firstName"
            label="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            name="lastName"
            fullWidth
            id="lastName"
            label="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="email"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            id="email"
            type="email"
            label="Email"
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            fullWidth
            options={countries}
            autoHighlight
            required
            name="countryName"
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
                onChange={formik.handleChange}
                name="countryName"
                value={formik.values.countryName}
                error={
                  formik.touched.countryName &&
                  Boolean(formik.errors.countryName)
                }
                helperText={
                  formik.touched.countryName && formik.errors.countryName
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
          <TextField
            variant="outlined"
            name="companyName"
            fullWidth
            id="companyName"
            type="text"
            label="Company Name  (Optional)"
          />
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I agree to tranzact Privacy Policy & Terms of Service"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            className="w-full py-2 text-white rounded-md bg-gradient-to-r from-[#4680ff] to-[#5b89ec]"
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignUpForm;
