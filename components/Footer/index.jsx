import Image from "next/image";
import React from "react";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";

const index = () => {
  return (
    <footer className="bg-[#eef9ff] py-16">
      <section className="container m-auto">
        <div className="flex justify-between space-x-5">
          <div className="md:w-1.5/4">
            <div>
              <Image
                className="w-[150px]"
                src="/img/header/ERP-Logo.png"
                alt="Logo"
                width={300}
                height={100}
              />
            </div>
            <div className="mt-5 ">
              <div className="flex space-x-2">
                <span>
                  <MarkunreadIcon className="text-primary " />
                </span>
                <p className="text-[#8f9aa8]">emil.company@gmail.com</p>
              </div>
              <div className="flex mt-1 space-x-2">
                <span>
                  <LocalPhoneIcon className="text-primary " />
                </span>
                <p className="text-xl font-extrabold text-primary">
                  123.567.7897
                </p>
              </div>
            </div>
            <div className="mt-3">
              <div className="relative inline-block overflow-hidden border rounded-md">
                <input
                  type="text"
                  className="z-0 w-full pl-10 pr-20 rounded-lg h-14 focus:shadow focus:outline-none placeholder:text-primary"
                  placeholder="Email address"
                />
                <div className="absolute top-0 right-0">
                  <button className="w-24 text-white bg-[#417ee7] rounded-lg h-14 hover:bg-[#5289e9]">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-0.5/4 text-primary hidden md:block">
            <div>
              <h1 className="text-2xl font-extrabold">Services</h1>
            </div>
            <ul className="flex flex-col mt-4 space-y-2 font-medium">
              <li>
                <Link href="/">Web Design</Link>
              </li>
              <li>
                <Link href="/">Development</Link>
              </li>
              <li>
                <Link href="/">Wordpress</Link>
              </li>
              <li>
                <Link href="/">Online Marketing</Link>
              </li>
              <li>
                <Link href="/">Content</Link>
              </li>
            </ul>
          </div>
          <div className="md:w-0.5/4 text-primary hidden md:block">
            <div>
              <h1 className="text-2xl font-extrabold">About Us</h1>
            </div>
            <ul className="flex flex-col mt-4 space-y-2 font-medium">
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Work Portfolio</Link>
              </li>
              <li>
                <Link href="/">Team</Link>
              </li>
              <li>
                <Link href="/">Plan & Pricing</Link>
              </li>
              <li>
                <Link href="/">News</Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 text-primary">
            <div>
              <h1 className="text-2xl font-extrabold">Our Address</h1>
            </div>
            <div className="flex mt-5 space-x-1">
              <div>
                <PinDropIcon className="text-3xl text-primary" />
              </div>
              <div>
                <address>
                  Cencilia Chapman 711-2880 nulla St. <br /> mankato Mississipi
                  96522 , <br />
                  (257) 563-7401
                </address>
              </div>
            </div>
            <ul className="flex mt-5 space-x-2 md:space-x-5 lg:space-x-10">
              <li className="text-[#417ee7] p-3 bg-white flex items-center justify-center rounded-full">
                <Link href="/">
                  <FacebookOutlinedIcon fontSize="large" />
                </Link>
              </li>
              <li className="flex items-center justify-center p-3 bg-white rounded-full ">
                <Link href="/">
                  <TwitterIcon fontSize="large" />
                </Link>
              </li>
              <li className="flex items-center justify-center p-3 bg-white rounded-full ">
                <Link href="/">
                  <LanguageIcon fontSize="large" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-[#8f9aa8] flex justify-between items-center">
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
