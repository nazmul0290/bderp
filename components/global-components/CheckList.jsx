import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import Paragraph from "../ui/Paragraph";

const CheckList = ({ title, lists }) => {
  return (
    <div className="mt-6">
      <p className="mt-2  font-semibold text-[#115dde] lg:text-xl md:text-lg text-md">
        {title}
      </p>
      <div className="flex flex-col mt-4 space-y-1 ">
        {lists?.map((item, index) => {
          return (
            <div key={index} className="flex items-baseline space-x-3">
              <p className="text-[#115dde]">
                <DoneIcon className="text-xl lg:text-3xl md:text-2xl" />
              </p>
              <Paragraph>{item}</Paragraph>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckList;
