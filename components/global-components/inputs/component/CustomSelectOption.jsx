import Image from "next/image";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CustomSelectOption = ({
  business,
  businessTypeError,
  handleChange,
  setBusinessTypeError,
  checked,
}) => {
  const saveCheckedCategory = () => {
    handleChange(business.id);
    setBusinessTypeError(false);
  };

  return (
    <div
      className={`${
        businessTypeError ? "border-red-600" : ""
      } relative flex ease-in flex-col items-center justify-center h-48  hover:bg-[#c2c4ff] cursor-pointer   hover:text-white  border rounded-md shadow-md transition-all duration-100 w-48 ${
        checked.includes(business.id) ? "border-[#c2c4ff] " : ""
      }`}
      onClick={saveCheckedCategory}
    >
      <div
        className={` flex  cursor-pointer  justify-center items-center flex-col rounded-md   `}
      >
        <div>
          <Image
            src={
              business.imgUrl
                ? business.imgUrl
                : "/img/signup/manufacturing.png"
            }
            alt={business.type_name}
            width={100}
            height={100}
          />
        </div>
        <div>
          <h1> {business.type_name} </h1>
        </div>
      </div>
      {checked.includes(business.id) && (
        <div className="absolute z-50 bg-white rounded-full -right-2 -top-2 ">
          <CheckCircleIcon fontSize="large" className="text-[#32bea6]   " />
        </div>
      )}
    </div>
  );
};

export default CustomSelectOption;
