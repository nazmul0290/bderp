import React from "react";

const Paragraph = ({ className, ...props }) => {
  return (
    <p
      className={`${className}  text-sm  text-primary lg:text-lg md:text-md`}
      {...props}
    />
  );
};

export default Paragraph;
