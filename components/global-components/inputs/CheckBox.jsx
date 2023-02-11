import React, { useState } from "react";
import CustomSelectOption from "./component/CustomSelectOption";

const CheckBox = ({
  businessTypes,
  checked,
  setChecked,
  businessTypeError,
  setBusinessTypeError,
}) => {
  const handleChange = (option) => {
    const currentIndex = checked.indexOf(option);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(option);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return businessTypes?.data.data.map((business) => {
    return (
      <CustomSelectOption
        checked={checked}
        businessTypeError={businessTypeError}
        business={business}
        handleChange={handleChange}
        key={business.id}
        setBusinessTypeError={setBusinessTypeError}
      />
    );
  });
};

export default CheckBox;
