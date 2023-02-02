import { Button } from "@mui/material";

const CustomButton = ({ type = "submit", className, ...props }) => (
  <Button
    variant="contained"
    type={type}
    className={`${className} py-2 text-white rounded-md bg-[#1976d2]`}
    {...props}
  />
);

export default CustomButton;
