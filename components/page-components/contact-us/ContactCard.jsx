/* eslint-disable react/no-unescaped-entities */
import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import ContactForm from "./component/ContactForm";
import Link from "next/link";
import BigHeadline from "@/components/ui/BigHealine";
import Paragraph from "@/components/ui/Paragraph";

const ContactCard = () => {
  return (
    <section className="container py-10">
      <div className="flex flex-col gap-2 shadow-2xl lg:flex-row">
        <div className="w-full lg:w-1/3 p-5 bg-[#3989fa] background-clipy-contact text-white ">
          <h1 className="mb-2 text-lg font-semibold xl:text-4xl md:text-xl lg-text-2xl">
            Contact
          </h1>
          <p>We've Worked With </p>
          <p className="text-sm lg:text-lg xl:text-xl">
            Leading Brands Globally
          </p>

          <div className="mt-5 ">
            <div className="flex items-center space-x-2">
              <span>
                <MarkunreadIcon className="text-lg md:text-xl" />
              </span>
              <p className="text-xs sm:text-sm ">emil.company@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <LocalPhoneIcon className="text-lg md:text-xl " />
              </span>
              <p className="text-xs sm:text-sm ">123.567.7897</p>
            </div>
          </div>
          <div className="flex gap-5 mt-5 ">
            <Link href="/">
              <FacebookIcon />
            </Link>
            <Link href="/">
              <TwitterIcon />
            </Link>
            <Link href="/">
              <LanguageIcon />
            </Link>
            <Link href="/">
              <LinkedInIcon />
            </Link>
            <Link href="/">
              <PinterestIcon />
            </Link>
          </div>
        </div>
        <div className="w-full p-5 pr-10 lg:w-2/3">
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
