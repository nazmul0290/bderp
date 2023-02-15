import React from "react";
import PhoneInput from "react-phone-input-2";

const PhoneNumberInput = ({ name, handleChange }) => {
  return (
    <PhoneInput
      country={"bd"}
      enableSearch
      enableAreaCodeStretch
      enableAreaCodes
      prefix="+"
      countryCodeEditable={false}
      dropdownStyle={{ textAlign: "left" }}
      inputStyle={{ width: "100%" }}
      onChange={handleChange}
    />
  );
};

export default PhoneNumberInput;
