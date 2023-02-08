import React from "react";

const Headline = ({ className, ...props }) => {
  return (
    <h1
      className={`${className} font-bold xl:text-2xl lg:text-xl md:text-lg text-primary`}
      {...props}
    />
  );
};

export default Headline;
