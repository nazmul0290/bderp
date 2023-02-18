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
import { makeAddressString } from "@/utils/tools";
import { showClientInfoField, showCompanyInfoField } from "@/redux/resolvers/invoiceSlice";

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

  const dispatch = useDispatch();

  const { values, errors, handleSubmit, setFieldValue, handleChange } =
    useFormik({
      initialValues: {
        display_name: "",
        attention: "",
        company_name: "",
        company_info: "",
        first_name: "",
        last_name: "",
        mobile: "",
        mobile_country_code: "",
        email: "",
        country_id: "",
        country_name: "",
        state_name: "",
        district_name: "",
        thana_name: "",
        union_name: "",
        zipcode: "",
        street_address_line_1: "",
        street_address_line_2: "",
        house: "",
        website: "",
        tax_number: "",
        ...senderDetails,
      },
      onSubmit: (values) => {
        dispatch(action(values));
        closeModal();
      },
    });

  const mobileHandlerChange = (value, data) => {
    console.log(data);
    setFieldValue("mobile_country_code", `+${data?.dialCode}`);
    setFieldValue("mobile", value);
  };

  const countryHandlerChange = (event, newValue) => {
    setFieldValue("country_id", newValue.id);
    setFieldValue("country_name", newValue.country_name);
  };

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
                value={values.company_name}
                onChange={handleChange}
                label="Company/Sender name"
                name="company_name"
                required
              />
            </div>
            <div>
              <TextField
                value={values.tax_number}
                onChange={handleChange}
                label="Tax Registration Number"
                name="tax_number"
              />
            </div>
            <div>
              <TextField
                value={values.first_name}
                onChange={handleChange}
                name="first_name"
                label="First Name"
                required
              />
            </div>
            <div>
              <TextField
                value={values.last_name}
                onChange={handleChange}
                name="last_name"
                label="Last Name"
                required
              />
            </div>
            <div>
              <TextField
                value={values.email}
                onChange={handleChange}
                label="Email"
                type="email"
                name="email"
                required
              />
            </div>

            <div>
              <TextField
                value={values.website}
                onChange={handleChange}
                name="website"
                label="Web Site"
              />
            </div>
            <div>
              <PhoneNumberInput
                name="phone_number"
                handleChange={mobileHandlerChange}
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
                handleChange={countryHandlerChange}
                allCountry={allCountry}
              />
            </div>
            <div>
              <TextField
                value={values.state_name}
                onChange={handleChange}
                label="Devision/Province/State"
                name="state_name"
              />
            </div>
            <div>
              <TextField
                value={values.district_name}
                onChange={handleChange}
                label="City/Sub District/Thana"
                name="district_name"
              />
            </div>
            <div>
              <TextField
                value={values.union_name}
                onChange={handleChange}
                label="Union/Area/Town"
                name="union_name"
              />
            </div>
            <div>
              <TextField
                value={values.zipcode}
                onChange={handleChange}
                label="Zip Code"
                name="zipcode"
              />
            </div>
            <div>
              <TextField
                value={values.street_address_line_1}
                onChange={handleChange}
                label="Street Address 1/Village"
                name="street_address_line_1"
              />
            </div>

            <div>
              <TextField
                value={values.street_address_line_2}
                onChange={handleChange}
                label="Street Address 2 (House/suite/apartment no)"
                name="street_address_line_2"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Set Information</Button>
          </div>
        </form>
      </Modal>
      <div className="w-1/2 p-4 transition-all duration-100 border-2 border-dashed rounded-md hover:border-solid hover:border-purple-400">
        {isEmpty(senderDetails.company_name) ? (
          <>
            <div
              onClick={() => {
                setIsOpen(true);
              }}
            >
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
            </div>
            {senderDetails?.company_info_edit && (
              <TextField
                autoFocus
                onBlur={(e) => {
                  dispatch(showCompanyInfoField());
                }}
                className="my-2"
              />
            )}
            {senderDetails?.client_info_edit && (
              <TextField
                autoFocus
                onBlur={(e) => {
                  dispatch(showClientInfoField());
                }}
                className="my-2"
              />
            )}
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
                {makeAddressString(
                  senderDetails?.state_name ? senderDetails?.state_name : "",
                  senderDetails?.district_name
                    ? senderDetails?.district_name
                    : "",
                  senderDetails?.union_name ? senderDetails?.union_name : "",
                  senderDetails?.street_address_line_1
                    ? senderDetails?.street_address_line_1
                    : ""
                )}
              </p>
              <p>{senderDetails?.mobile}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SenderRecieverBox;
