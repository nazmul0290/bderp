import React from "react";

const FetureCard = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-[#115dde] font-semibold md:font-bold">{title}</h1>
      <p className="text-sm font-semibold lg:text-md text-primary">
        {subtitle}
      </p>
    </div>
  );
};

export default FetureCard;
