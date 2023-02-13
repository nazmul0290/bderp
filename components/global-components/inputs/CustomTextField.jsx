import { TextField as MuiTextField } from "@mui/material";
import React from "react";

const TextField = ({ label, ...props }) => {
  return (
    <>
      <MuiTextField
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

export default TextField;
