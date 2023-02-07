import { TextField } from "@mui/material";
import React from "react";

const CustomTextField = ({ label, ...props }) => {
  return (
    <div>
      <TextField
        label={label}
        fullWidth
        color="info"
        variant="outlined"
        {...props}
      />
    </div>
  );
};

export default CustomTextField;
