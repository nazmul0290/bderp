import React from "react";

const Paragraph = ({ className, ...props }) => {
  return (
    <p
      className={`${className} mt-2 text-sm font-medium text-primary lg:text-lg md:text-md`}
      {...props}
    />
  );
};

export default Paragraph;
