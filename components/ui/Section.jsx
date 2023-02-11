import React from "react";

const Section = ({ className, ...props }) => {
  return (
    <section className={`${className} py-10 md:py-16 container`} {...props} />
  );
};

export default Section;
