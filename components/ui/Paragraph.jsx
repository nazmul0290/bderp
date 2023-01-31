import React from "react";

const Paragraph = (prorps) => {
  return (
    <p
      className="mt-2 text-sm font-medium text-primary lg:text-lg md:text-md"
      {...prorps}
    />
  );
};

export default Paragraph;
