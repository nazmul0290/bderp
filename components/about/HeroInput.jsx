/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Input from "../ui/Input";
import Label from "../ui/Label";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import StoreIcon from "@mui/icons-material/Store";
import Image from "next/image";
import CustomButton from "../ui/Button";

const HeroInput = () => {
  return (
    <section className="container py-10 ">
      <div className="relative flex items-center justify-center w-full ">
        <div className="absolute flex items-center justify-center w-full -top-7">
          <Image
            src="/img/home/lifetimefree.png"
            alt="lifetimefree"
            width={300}
            height={100}
            className="sm:max-w-[300px] "
          />
        </div>
        <div className="bg-[#417ee7]  inline-block px-4 md:px-10 md:pt-10 pt-4 pb-16 rounded-md  w-full max-w-[800px]  ">
          <div className="mt-5 text-center text-white">
            <p className="text-lg font-medium md:text-2xl">
              Submit Your Business Type
            </p>
            <p>One Of Our Custome Care Manager Will Help You</p>
          </div>
          <form className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
            <Label className="flex mt-4 border rounded-md">
              <span className="px-5 py-3 bg-[#e9eaec] text-[#818284]">
                <PersonIcon />
              </span>
              <Input
                type="text"
                className="w-full px-4 py-2.5"
                placeholder="Name"
              />
            </Label>
            <Label className="flex mt-4 border rounded-md">
              <span className="px-5 py-3 bg-[#e9eaec] text-[#818284]">
                <EmailIcon />
              </span>
              <Input
                type="text"
                className="w-full px-4 py-2.5"
                placeholder="Email Address"
              />
            </Label>
            <Label className="flex mt-4 border rounded-md">
              <span className="px-5 py-3 bg-[#e9eaec] text-[#818284]">
                <TapAndPlayIcon />
              </span>
              <Input
                type="text"
                className="w-full px-4 py-2.5"
                placeholder="Phone Number"
              />
            </Label>
            <Label className="flex mt-4 border rounded-md">
              <span className="px-5 py-3 bg-[#e9eaec] text-[#818284]">
                <StoreIcon />
              </span>
              <select type="text" className="w-full px-4 py-2.5 text-[#818284]">
                <option value="">What Type Of Business</option>
                <option value="">What Type Of Business</option>
                <option value="">What Type Of Business</option>
                <option value="">What Type Of Business</option>
                <option value="">What Type Of Business</option>
              </select>
            </Label>
            <CustomButton className="bg-white text-primary hover:bg-gray-300">
              Submit
            </CustomButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroInput;
