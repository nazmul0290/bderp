import { Autocomplete, Box, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";

const CountryField = ({
  allCountry,
  values,
  setFieldValue,
  touched,
  errors,
}) => {
  return (
    <Autocomplete
      fullWidth
      options={allCountry}
      autoHighlight
      required
      size="small"
      value={values}
      name="country"
      onChange={(event, newValue) => {
        setFieldValue(values, newValue);
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
            width={20}
            height={20}
            src={`https://flagcdn.com/w20/${option.iso2.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.iso2.toLowerCase()}.png 2x`}
            alt="flag"
          />
          {option.country_name} ({option.iso2})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          name="country"
          errors={touched && Boolean(errors)}
          helperText={touched && errors}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-country",
          }}
        />
      )}
    />
  );
};

export default CountryField;
