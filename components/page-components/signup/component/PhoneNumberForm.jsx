import Button from "@/components/ui/Button";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

const PhoneNumberForm = () => {
  const [phone, setPhone] = useState("");
  return (
    <form className="max-w-[400px] mx-auto flex flex-col gap-6">
      <div className="inline-block w-full">
        <PhoneInput
          country={"bd"}
          enableSearch
          dropdownStyle={{ textAlign: "left" }}
          inputStyle={{ width: "100%" }}
          value={phone}
          onChange={(value) => {
            console.log(value);
            setPhone(value);
          }}
        />
      </div>

      <Button variant="contained">Send Code</Button>
    </form>
  );
};

export default PhoneNumberForm;
