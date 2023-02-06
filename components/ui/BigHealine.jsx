import React from "react";

const BigHeadline = ({ className, ...props }) => {
  return (
    <h1
      className={`font-bold xl:text-4xl lg:text-2xl md:text-lg text-primary`}
      {...props}
    />
  );
};

export default BigHeadline;
