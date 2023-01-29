import React from "react";
import DoneIcon from "@mui/icons-material/Done";

const KeyFetureCard = ({ title, subtitle }) => {
  return (
    <div className="flex items-baseline space-x-3">
      <div className="text-[#115dde]">
        <DoneIcon className="text-2xl lg:text-4xl md:text-3xl" />
      </div>
      <div>
        <h1 className="text-[#115dde] font-semibold md:font-bold">{title}</h1>
        <p className="text-sm font-semibold lg:text-md text-primary">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default KeyFetureCard;
