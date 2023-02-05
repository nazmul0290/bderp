import Image from "next/image";
import React, { useState } from "react";
import Headline from "../ui/Headline";
import Paragraph from "../ui/Paragraph";
import SingupStageWizard from "../ui/SingupStageWizard";
import { MuiTelInput } from "mui-tel-input";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import PhoneInput from "react-phone-number-input";
import CustomButton from "../ui/CustomButton";
import { useFormik } from "formik";

const PhoneNumberWizard = () => {
  const [value, setValue] = useState();

  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };

  console.log(value);

  return (
    <section className="py-10">
      <div className="container ">
        <div>
          <SingupStageWizard activeStep={1} />
        </div>
        <div className="text-center">
          <Headline>Shariful, We Take Data Security Seriously!</Headline>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-3">
          <div className="flex items-center max-w-[300px] p-4  w-full  justify-center  border-2 rounded-md border-[#005fec] ">
            <div className="flex items-center justify-center space-x-2">
              <Image
                src="/img/signup/lock.png"
                alt="lock"
                className="max-w-[50px]"
                width={70}
                height={70}
              />
              <Paragraph>100% Data Security</Paragraph>
            </div>
          </div>
          <div className="flex items-center max-w-[300px] p-4  w-full  justify-center  border-2 rounded-md border-[#005fec]">
            <div className="flex items-center justify-center space-x-2">
              <Image
                src="/img/signup/server.png"
                alt="lock"
                width={70}
                height={70}
              />
              <Paragraph>Download Data Backup</Paragraph>
            </div>
          </div>
          <div className="flex items-center max-w-[300px] p-4  w-full  justify-center  border-2 rounded-md border-[#005fec]">
            <div className="flex items-center justify-center space-x-2">
              <Image
                src="/img/signup/database.png"
                alt="lock"
                width={70}
                height={70}
              />
              <Paragraph>Priority Resolution of Data conerns</Paragraph>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Paragraph>
            TranZact enabled us to maintain the lowest possible material and
            product levels in store to preserve working capital and use it more
            efficiently.TranZact brought our entire business to the forefront by
            eliminating silos profitability.{" "}
          </Paragraph>
          <div className="flex items-center justify-center mt-5">
            <Image
              src="/img/signup/cirtificate.png"
              alt="cirtificate"
              width={700}
              height={100}
            />
          </div>
        </div>
        <div className="p-4 mt-10 text-center bg-gray-100">
          <Headline>
            Enter Your WhatsApp number to recieive the NDA in 24 Hours{" "}
          </Headline>

          <div className="mt-5 ">
            <div className="max-w-[500px] mx-auto flex flex-col gap-6">
              <Grid item xs={12}>
                {/* <MuiTelInput fullWidth value={phone} onChange={handleChange} /> */}
                <PhoneInput
                  className="pl-3 overflow-hidden text-red-600 border border-red-600 rounded-md"
                  international
                  placeholder="Enter phone number"
                  countryCallingCodeEditable={false}
                  defaultCountry="BD"
                  value={value}
                  onChange={setValue}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomButton
                  variant="contained"
                  className="w-full py-2 text-white rounded-md bg-gradient-to-r from-[#4680ff] to-[#5b89ec]"
                >
                  Send Code
                </CustomButton>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneNumberWizard;
