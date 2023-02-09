import { TextField } from "@mui/material";
import React from "react";

const CustomTextField = ({ label, ...props }) => {
  return (
    <>
      <TextField
        label={label}
        fullWidth
        color="info"
        size="small"
        variant="outlined"
        {...props}
      />
    </>
  );
};

export default CustomTextField;
