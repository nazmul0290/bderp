import React from "react";
import BigHeadline from "../ui/BigHealine";

import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Paragraph from "../ui/Paragraph";
import ContactForm from "./component/ContactForm";

const ContactCard = () => {
  return (
    <section className="container py-10">
      <div className="flex gap-2 shadow-2xl">
        <div className=" w-1/3 p-5 bg-[#3989fa] background-clipy-contact text-white ">
          <h1 className="mb-2 text-lg font-semibold xl:text-4xl md:text-xl lg-text-2xl">
            Contact
          </h1>
          <p>We've Worked With </p>
          <p className="text-sm lg:text-xl xl:text-2xl">
            Leading Brands Globally
          </p>

          <div className="mt-5 ">
            <div className="flex items-center space-x-2">
              <span>
                <MarkunreadIcon className="text-lg md:text-2xl" />
              </span>
              <p className="text-xs sm:text-sm xl:text-lg">
                emil.company@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <LocalPhoneIcon className="text-lg md:text-2xl " />
              </span>
              <p className="text-xs sm:text-sm xl:text-lg ">123.567.7897</p>
            </div>
          </div>
        </div>
        <div className="w-2/3 p-5 pr-10">
          <BigHeadline className="font-extrabold">
            Start Growing From Today
          </BigHeadline>
          <Paragraph>
            You can also fill-up the pop-up form and one of our representatives
            will get back to you as soon as possible
          </Paragraph>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
