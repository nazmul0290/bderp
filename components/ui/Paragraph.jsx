import React from "react";

const Paragraph = ({ className, ...props }) => {
  return (
    <p
      className={`${className}  text-sm font-medium text-primary lg:text-lg md:text-md`}
      {...props}
    />
  );
};

export default Paragraph;
