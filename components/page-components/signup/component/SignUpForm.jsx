/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Box } from "@mui/system";
import { countries } from "@/lib/data";
import { useFormik } from "formik";

import { signUpValidationSchema } from "@/utils/yupValidation";
import { useRouter } from "next/router";
import CustomTextField from "../../../global-components/inputs/CustomTextField";
import Button from "@/components/ui/Button";
import { useLocalStorage } from "@/lib/hooks/useHooks";

import PasswordInput from "@/components/global-components/inputs/PasswordInput";
import DisplayError from "./DisplayError";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { registration } from "@/utils/resolvers/mutation";
import { getCountries } from "@/utils/resolvers/query";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import LoadingButton from "@/components/ui/LoadingButton";
import useAuth from "@/lib/hooks/auth";
import useUser from "@/lib/hooks/useUser";

const initialValues = {
  first_name: "",
  last_name: "",
  password: "",
  email: "",
  country: {
    calling_code: "880",
    country_name: "Bangladesh",
    id: 19,
    iso2: "BD",
    iso3: "BGD",
  },
  company_name: "",
  privacy_aggrement: false,
};

const SignUpForm = () => {
  const [allCountry] = useLocalStorage("countries", getCountries);
  const { mutate, isLoading } = useMutation(registration);
  const user = useUser({ middleware: "guest", redirectIfAuthenticated: "/" });
  const { registerController } = useAuth({
    redirectIfAuthenticated: "/confirm-email",
  });

  const {
    values,
    errors,
    handleChange,
    setFieldValue,
    handleSubmit,
    touched,
    setFieldError,
  } = useFormik({
    initialValues,
    validationSchema: signUpValidationSchema,
    onSubmit: async (values) => {
      if (!values.privacy_aggrement) {
        return setFieldError(
          "privacy_aggrement",
          "The selected privacy aggrement is invalid."
        );
      }

      const variables = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        country: values.country.id,
        password: values.password,
        password_confirmation: values.password,
        privacy_aggrement: values.privacy_aggrement ? 1 : 0,
      };

      if (values.company_name) {
        variables.company_name = values.company_name;
      }

      registerController({ body: variables, setFieldError, mutate });
    },
  });

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            name="first_name"
            label="First Name"
            onChange={handleChange}
            error={touched.first_name && Boolean(errors.first_name)}
            helperText={touched.first_name && errors.first_name}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            name="last_name"
            label="Last Name"
            value={values.last_name}
            onChange={handleChange}
            error={touched.last_name && Boolean(errors.last_name)}
            helperText={touched.last_name && errors.last_name}
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
            size="small"
            value={values.country}
            name="country"
            onChange={(event, newValue) => {
              setFieldValue("country", newValue);
            }}
            isOptionEqualToValue={(option, value) => option.code === value.code}
            getOptionLabel={(option) => option.country_name}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.iso2.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.iso2.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.country_name} ({option.iso2})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a country"
                name="country"
                errors={touched.country && Boolean(errors.country)}
                helperText={touched.country && errors.country}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-country",
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
            name="company_name"
            value={values.company_name}
            onChange={handleChange}
            error={touched.company_name && Boolean(errors.company_name)}
            helperText={touched.company_name && errors.company_name}
            label="Company Name  (Optional)"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl error={errors.privacy_aggrement}>
            <FormControlLabel
              control={
                <Checkbox
                  name="privacy_aggrement"
                  checked={values.privacy_aggrement}
                  onChange={handleChange}
                />
              }
              label="I agree to tranzact Privacy Policy & Terms of Service"
            />
            {touched.privacy_aggrement && (
              <p className="text-sm text-red-600">{errors.privacy_aggrement}</p>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button disabled={isLoading} className="w-full">
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignUpForm;
