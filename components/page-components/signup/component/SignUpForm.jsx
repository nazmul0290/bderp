/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from "@mui/material";

import { Box } from "@mui/system";
import { countries } from "@/lib/data";
import { useFormik } from "formik";

import { signUpValidationSchema } from "@/utils/yupValidation";
import { useRouter } from "next/router";
import CustomTextField from "../../input/CustomTextField";
import Button from "@/components/ui/Button";
import { useLocalStorage } from "@/lib/hooks/useHooks";

import PasswordInput from "@/components/global-components/inputs/PasswordInput";
import DisplayError from "./DisplayError";

const SignUpForm = () => {
  const [allCountry] = useLocalStorage("countries", countries);

  const router = useRouter();

  const { values, errors, handleChange, setFieldValue, handleSubmit, touched } =
    useFormik({
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

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            name="firstName"
            label="First Name"
            onChange={handleChange}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            name="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={handleChange}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />
        </Grid>
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
          <Autocomplete
            fullWidth
            options={allCountry}
            autoHighlight
            required
            value={values.countryName}
            name="countryName"
            onChange={(event, newValue) => {
              setFieldValue("countryName", newValue);
            }}
            isOptionEqualToValue={(option, value) => {
              option.code === values.countryName?.code;
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
                error={touched.countryName && Boolean(errors.countryName)}
                helperText={
                  touched.countryName &&
                  errors.countryName &&
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
          <PasswordInput
            touched={touched.password}
            values={values.password}
            errors={errors.password}
            handleChange={handleChange}
            label="Password"
            name="password"
          />
          <DisplayError password={values.password} />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            name="companyName"
            value={values.companyName}
            onChange={handleChange}
            error={touched.companyName && Boolean(errors.companyName)}
            helperText={touched.companyName && errors.companyName}
            label="Company Name  (Optional)"
          />
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="privacy_aggrement"
                  checked={values.privacy_aggrement}
                  onChange={handleChange}
                  defaultChecked
                />
              }
              label="I agree to tranzact Privacy Policy & Terms of Service"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained">
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignUpForm;
