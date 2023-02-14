import React from "react";
import PhoneInput from "react-phone-input-2";

const PhoneNumberInput = ({ name, setFieldValue }) => {
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
      onChange={(value, data) => {
        console.log(value, data);
        setFieldValue(name, {
          mobile_country_code: data?.dialCode,
          mobile: value.slice(data.dialCode.length),
        });
      }}
    />
  );
};

export default PhoneNumberInput;
