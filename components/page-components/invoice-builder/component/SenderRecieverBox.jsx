import CountryField from "@/components/global-components/inputs/CountryField";
import TextField from "@/components/global-components/inputs/CustomTextField";
import Headline from "@/components/ui/Headline";
import Modal from "@/components/ui/Modal";
import { getCountries } from "@/utils/resolvers/query";
import React, { useState } from "react";
import { useLocalStorage } from "@/lib/hooks/useHooks";
import { useFormik } from "formik";
import Button from "@/components/ui/Button";

const SenderRecieverBox = ({
  Icon,
  infoFor,
  nameFor,
  contactFor,
  inputName,
  headerInfoModal,
  headerAddressModal,
}) => {
  const [allCountry] = useLocalStorage("countries", getCountries);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const { values, errors, handleSubmit, setFieldValue, handleChange } =
    useFormik({
      initialValues: {},
      onSubmit: (values) => {
        console.log(values);
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
          </div>
          <div className="border-b">
            <Headline>{headerAddressModal}</Headline>
          </div>
          <div className="grid grid-cols-2 gap-5 py-5">
            <div>
              <CountryField
                onChange={handleChange}
                label="Last Name"
                name="country_name"
                setFieldValue={setFieldValue}
                allCountry={allCountry}
              />
            </div>
            <div>
              <TextField
                onChange={handleChange}
                label="Tex Registration Number"
              />
            </div>
            <div>
              <TextField onChange={handleChange} label="First Name" required />
            </div>
            <div>
              <TextField onChange={handleChange} label="Last Name" required />
            </div>
            <div>
              <TextField
                onChange={handleChange}
                label="Email"
                type="email"
                required
              />
            </div>

            <div>
              <TextField onChange={handleChange} label="Web Site" />
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
    </>
  );
};

export default SenderRecieverBox;
