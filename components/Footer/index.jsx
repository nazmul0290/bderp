import Image from "next/image";
import React from "react";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import FooterMenu from "./component/FooterMenu";

const index = () => {
  return (
    <footer className="">
      <section className=" bg-[#c2c4ff] py-16">
        <div className="container px-2 m-auto">
          <div className="grid justify-between grid-cols-2 gap-5 lg:grid-cols-4 ">
            <div className="">
              <div>
                <Image
                  className="md:w-[150px] w-20"
                  src="/img/header/ERP-Logo.png"
                  alt="Logo"
                  width={300}
                  height={100}
                />
              </div>
              <div className="mt-5 ">
                <div className="flex items-center space-x-2">
                  <span>
                    <MarkunreadIcon className="text-lg md:text-2xl text-primary" />
                  </span>
                  <p className="text-[#8f9aa8] text-xs sm:text-sm xl:text-lg">
                    emil.company@gmail.com
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <LocalPhoneIcon className="text-lg md:text-2xl text-primary " />
                  </span>
                  <p className="font-extrabold lg:text-xl text-primary">
                    123.567.7897
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <div className="relative inline-block overflow-hidden border rounded-md">
                  <input
                    type="text"
                    className="z-0 w-full h-8 pl-2 pr-5 text-xs rounded-lg md:pl-5 md:pr-20 md:h-12 focus:shadow focus:outline-none placeholder:text-primary "
                    placeholder="Email address"
                  />
                  <div className="absolute top-0 right-0">
                    <button className="xl:w-20 sm:w-12 w-10 text-sm md:text-base text-white bg-primaryBlue rounded-lg md:h-12 h-8 hover:bg-[#5289e9]">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" text-primary">
              <FooterMenu />
            </div>
            <div className=" text-primary">
              <FooterMenu />
            </div>
            <div className=" text-primary">
              <div>
                <h1 className="text-xl font-bold md:font-extrabold md:text-2xl">
                  Our Address
                </h1>
              </div>
              <div className="flex mt-5 space-x-1">
                <div>
                  <PinDropIcon className="text-lg md:text-3xl text-primary" />
                </div>
                <div>
                  <address className="text-sm lg:text-lg md:text-md">
                    Cencilia Chapman 711-2880 nulla St. <br /> mankato
                    Mississipi 96522 , <br />
                    (257) 563-7401
                  </address>
                </div>
              </div>
              <ul className="flex mt-5 space-x-2 md:space-x-5 lg:space-x-10 ">
                <li className="flex items-center justify-center text-primary ">
                  <Link href="/">
                    <FacebookOutlinedIcon className="text-lg md:text-2xl" />
                  </Link>
                </li>
                <li className="flex items-center justify-center ">
                  <Link href="/">
                    <TwitterIcon className="text-lg md:text-2xl" />
                  </Link>
                </li>
                <li className="flex items-center justify-center">
                  <Link href="/">
                    <LanguageIcon className="text-lg md:text-2xl" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1976d2]">
        <div className="container flex flex-col items-center justify-center h-20 mx-auto space-y-5 text-sm text-white lg:text-lg md:text-md md:justify-between md:flex-row md:space-y-0">
          <div>
            <p>2020 copyright all right reserved</p>
          </div>
          <ul className="flex space-x-10">
            <li>
              <Link href="/">Help</Link>
            </li>
            <li>
              <Link href="/">Term & Condition</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default index;
