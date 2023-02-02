import { Autocomplete, TextField } from "@mui/material";

export default function CustomAutoComplete({ options, ...props }) {
  return (
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
            formik.touched.countryName && Boolean(formik.errors.countryName)
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
  );
}
