/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
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

import { signUpValidationSchema } from "@/utils/yupValidation";
import { useRouter } from "next/router";
import CustomTextField from "../../input/CustomTextField";
import Button from "@/components/ui/Button";
import { useCountries } from "@/lib/hooks/useHooks";
import login from "@/pages/login";
import PasswordInput from "@/components/global-components/inputs/PasswordInput";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState("false");
  const [countryData, setCountryData] = useState([]);
  const [allCountry] = useCountries("countries", countries);

  const router = useRouter();

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
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
          <div className="flex flex-col mt-5 space-y-1">
            {values.password.length < 8 ? (
              <div className="flex space-x-2 text-sm text-red-500">
                <CloseIcon fontSize="small" /> <p>Use 8 or More Characters</p>
              </div>
            ) : (
              <div className="flex space-x-2 text-sm text-green-500">
                <CheckIcon fontSize="small" /> <p>Use 8 or More Characters</p>
              </div>
            )}

            {containsUpperAndLowercase(values.password) ? (
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

            {containsNumber(values.password) ? (
              <div className="flex space-x-2 text-sm text-green-500">
                <CheckIcon fontSize="small" /> <p>Use a Number (e.g. 1234)</p>
              </div>
            ) : (
              <div className="flex space-x-2 text-sm text-red-500">
                <CloseIcon fontSize="small" /> <p>Use a Number (e.g. 1234)</p>
              </div>
            )}

            {containsSpecialChars(values.password) ? (
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
