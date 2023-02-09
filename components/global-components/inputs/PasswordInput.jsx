import { Visibility, VisibilityOff } from "@mui/icons-material";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";

const PasswordInput = ({
  touched,
  errors,
  label,
  name,
  values,
  handleChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel
        htmlFor="outlined-adornment-password"
        error={touched && Boolean(errors)}
        size="small"
      >
        {label}
      </InputLabel>
      <OutlinedInput
        name={name}
        type={showPassword ? "text" : "password"}
        value={values}
        size="small"
        onChange={handleChange}
        error={touched && Boolean(errors)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {!showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
      {touched && <p className="pl-3 text-sm text-red-600">{errors}</p>}
    </FormControl>
  );
};

export default PasswordInput;
