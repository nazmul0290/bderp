import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import React from "react";

const ContactForm = () => {
  return (
    <form className="pb-5 mt-5">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="standard">
            <InputLabel id="demo-simple-select-standard-label">
              Select Your Industry
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Select Your Industry"
            >
              <MenuItem value={10}>Small Business</MenuItem>
              <MenuItem value={20}>Medium Business</MenuItem>
              <MenuItem value={30}>Large Business</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiTelInput
            variant="standard"
            label="Your phone number"
            fullWidth
            defaultCountry="BD"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            required
            fullWidth
            label="Company"
            name="company_name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="standard"
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={2}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
