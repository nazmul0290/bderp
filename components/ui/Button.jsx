import { Button as MuiButton } from "@mui/material";

const Button = ({ type = "submit", className, href, ...props }) => {
  return (
    <MuiButton
      variant="contained"
      type={type}
      href={href}
      className={`${className} py-2 h-10  rounded-md bg-gradient-to-r from-[#37a1f6] to-[#3985fb]`}
      {...props}
    />
  );
};

export default Button;
