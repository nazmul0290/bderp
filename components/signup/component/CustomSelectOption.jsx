import Image from "next/image";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDispatch, useSelector } from "react-redux";
import { addOrRemoveCheck } from "@/redux/resolvers/checkSlice";

const CustomSelectOption = ({ business }) => {
  const checkedCategory = useSelector((state) => state.checkbox.checkboxArr);
  const dispatch = useDispatch();

  const saveCheckedCategory = () => {
    dispatch(addOrRemoveCheck(business.id));
  };

  return (
    <div
      className={`relative flex ease-in flex-col items-center justify-center h-48  hover:bg-[#c2c4ff] cursor-pointer   hover:text-white  border rounded-md shadow-md transition-all duration-100 w-48 ${
        checkedCategory.includes(business.id) ? "border-[#c2c4ff] " : ""
      }`}
      onClick={saveCheckedCategory}
    >
      <div
        className={` flex  cursor-pointer  justify-center items-center flex-col rounded-md   `}
      >
        <div>
          <Image
            src={business.img}
            alt={business.category}
            width={100}
            height={100}
          />
        </div>
        <div>
          <h1> {business.category} </h1>
        </div>
      </div>
      {checkedCategory.includes(business.id) && (
        <div className="absolute z-50 bg-white rounded-full -right-2 -top-2 ">
          <CheckCircleIcon fontSize="large" className="text-[#32bea6]   " />
        </div>
      )}
    </div>
  );
};

export default CustomSelectOption;
