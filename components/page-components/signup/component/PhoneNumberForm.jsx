import Button from "@/components/ui/Button";
import { useToken } from "@/lib/hooks/useHooks";
import { updateUser } from "@/utils/resolvers/mutation";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const PhoneNumberForm = () => {
  const [token] = useToken("BDERP_authToken");
  const [user, setUser] = useState();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("BDERP_register"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  const [phone, setPhone] = useState({
    mobile_country_code: "880",
    mobile: "",
  });
  const { mutate } = useMutation(updateUser);

  const sendCodeHandler = (e) => {
    e.preventDefault();

    const variables = {
      ...phone,
      mobile_country_code: `+${phone.mobile_country_code}`,
    };

    if (phone.mobile.length < 7 || phone.mobile.length > 15) {
      return toast.error("You can not type less than 7 or more than 15");
    }

    mutate(
      { userData: variables, userUuid: user.uuid, token },
      {
        onSuccess: (data) => {
          toast.success(data.data.message);
        },
        onError: (err) => {
          console.log(err);
          //toast.error(err.response.data)
        },
      }
    );
  };

  return (
    <form
      className="max-w-[400px] mx-auto flex flex-col gap-6"
      onSubmit={sendCodeHandler}
    >
      <div className="inline-block w-full">
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
            setPhone({
              mobile_country_code: data?.dialCode,
              mobile: value.slice(data.dialCode.length),
            });
          }}
        />
      </div>

      <Button variant="contained">Send Code</Button>
    </form>
  );
};

export default PhoneNumberForm;
