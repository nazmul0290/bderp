import Image from "next/image";
import React, { useState } from "react";

import SingupStageWizard from "@/components/ui/SingupStageWizard";
import Headline from "@/components/ui/Headline";
import Paragraph from "@/components/ui/Paragraph";

import PhoneNumberForm from "./component/PhoneNumberForm";

const PhoneNumberWizard = () => {
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
        <div className="mt-5"></div>
        <div className="p-4 mt-10 text-center bg-gray-100">
          <Headline>
            Enter Your WhatsApp number to recieive the NDA in 24 Hours{" "}
          </Headline>

          <div className="mt-5 ">
            <PhoneNumberForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneNumberWizard;
