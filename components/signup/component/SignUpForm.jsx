import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState("false");

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <form className="mt-5">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            name="lastName"
            required
            fullWidth
            id="lastName"
            label="Last Name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="email"
            required
            fullWidth
            id="email"
            type="email"
            label="Email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="password"
            required
            type="password"
            fullWidth
            id="password"
            label="Password"
          >
            {" "}
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>{" "}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="companyName"
            fullWidth
            id="companyName"
            type="text"
            label="Company Name"
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
