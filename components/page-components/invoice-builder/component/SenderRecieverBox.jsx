import CountryField from "@/components/global-components/inputs/CountryField";
import TextField from "@/components/global-components/inputs/CustomTextField";
import Headline from "@/components/ui/Headline";
import Modal from "@/components/ui/Modal";
import { getCountries } from "@/utils/resolvers/query";
import React, { useState } from "react";
import { useLocalStorage } from "@/lib/hooks/useHooks";
import { useFormik } from "formik";
import Button from "@/components/ui/Button";
import PhoneNumberInput from "@/components/global-components/inputs/PhoneNumberInput";
import { useDispatch } from "react-redux";
import isEmpty from "@/utils/is-empty";
import Paragraph from "@/components/ui/Paragraph";

const SenderRecieverBox = ({
  Icon,
  infoFor,
  nameFor,
  contactFor,
  action,
  headerInfoModal,
  headerAddressModal,
  senderDetails,
}) => {
  const [allCountry] = useLocalStorage("countries", getCountries);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(senderDetails);
  const dispatch = useDispatch();

  const { values, errors, handleSubmit, setFieldValue, handleChange } =
    useFormik({
      initialValues: {},
      onSubmit: (values) => {
        console.log(values);
        dispatch(action(values));
        closeModal();
      },
    });

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={handleSubmit}>
          <div className="border-b">
            <Headline>{headerInfoModal}</Headline>
          </div>
          <div className="grid grid-cols-2 gap-5 py-5">
            <div>
              <TextField
                onChange={handleChange}
                label="Company/Sender name"
                name="company_name"
                required
              />
            </div>
            <div>
              <TextField
                onChange={handleChange}
                label="Tax Registration Number"
                name="tax_number"
              />
            </div>
            <div>
              <TextField
                onChange={handleChange}
                name="first_name"
                label="First Name"
                required
              />
            </div>
            <div>
              <TextField
                onChange={handleChange}
                name="last_name"
                label="Last Name"
                required
              />
            </div>
            <div>
              <TextField
                onChange={handleChange}
                label="Email"
                type="email"
                name="email"
                required
              />
            </div>

            <div>
              <TextField
                onChange={handleChange}
                name="website"
                label="Web Site"
              />
            </div>
            <div>
              <PhoneNumberInput
                name="phone_number"
                setFieldValue={setFieldValue}
              />
            </div>
          </div>
          <div className="border-b">
            <Headline>{headerAddressModal}</Headline>
          </div>
          <div className="grid grid-cols-2 gap-5 py-5">
            <div>
              <CountryField
                onChange={handleChange}
                label="Last Name"
                name="country"
                setFieldValue={setFieldValue}
                allCountry={allCountry}
              />
            </div>
            <div>
              <TextField
                onChange={handleChange}
                label="Devision/Province/State"
                name="state"
              />
            </div>
            <div>
              <TextField
                onChange={handleChange}
                label="City/Sub District/Thana"
                name="city"
              />
            </div>
            <div>
              <TextField
                onChange={handleChange}
                label="Union/Area/Town"
                name="union"
              />
            </div>
            <div>
              <TextField
                onChange={handleChange}
                label="Zip Code"
                name="zipcode"
              />
            </div>
            <div>
              <TextField
                onChange={handleChange}
                label="Street Address 1/Village"
                name="addres_line_1"
              />
            </div>

            <div>
              <TextField
                onChange={handleChange}
                label="Street Address 2 (House/suite/apartment no)"
                name="address_line_2"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Set Information</Button>
          </div>
        </form>
      </Modal>
      <div
        className="w-1/2 p-4 transition-all duration-100 border-2 border-dashed rounded-md hover:border-solid hover:border-purple-400"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {isEmpty(senderDetails.company_name) ? (
          <>
            <div>
              <h1 className="mb-1 font-bold">{infoFor}</h1>
            </div>
            <div className="flex gap-5">
              <div>
                <Icon fontSize="large" />
              </div>
              <div>
                <h1>{nameFor}</h1>
                <p>{contactFor}</p>
              </div>
            </div>
          </>
        ) : (
          <div>
            <h1 className="font-bold">{senderDetails?.company_name}</h1>
            <div className="text-sm">
              <p>
                {senderDetails?.first_name} {senderDetails?.last_name}
              </p>
              <p>{senderDetails?.email}</p>
              <p>{senderDetails?.country?.country_name}</p>
              <p>
                {senderDetails?.state}, {senderDetails?.union},{" "}
                {senderDetails?.addres_line_1}
              </p>
              <p>{senderDetails?.phone_number.mobile}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SenderRecieverBox;
