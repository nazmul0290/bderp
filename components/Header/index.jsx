/* eslint-disable react-hooks/rules-of-hooks */
import { Backdrop, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const index = ({ transparent }) => {
  const [sticky, setSticky] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleClose = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <>
      <header
        id="navbar"
        className={` ${transparent ? "bg-transparent" : "bg-[#eef9ff]"}  ${
          sticky ? "navbar_scrolled navbar " : "navbar "
        }`}
      >
        <div className="container">
          <Link href="/">
            <Image
              className="w-20 md:w-24 lg:w-32"
              src="/img/header/ERP-Logo.png"
              alt="Logo"
              width={300}
              height={150}
            />
          </Link>

          <button
            className="text-white md:hidden"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <MenuIcon fontSize="large" />
          </button>

          <ul
            className={`${
              transparent && !sticky ? "text-white" : " text-primary"
            } hidden pt-4 font-semibold  md:flex md:justify-between md:items-center md:pt-0`}
          >
            <li className="block py-2 md:p-2 lg:p-4">
              <Link
                className="py-2 duration-75 hover:border-b border-primary"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="block py-2 md:p-2 lg:p-4">
              <Link
                className="py-2 duration-75 hover:border-b border-primary"
                href="#"
              >
                Service
              </Link>
            </li>
            <li className="block py-2 md:p-2 lg:p-4">
              <Link
                className="py-2 duration-75 hover:border-b border-primary"
                href="#"
              >
                About Us
              </Link>
            </li>
            <li className="block py-2 md:p-2 lg:p-4">
              <Link
                className="py-2 duration-75 hover:border-b border-primary"
                href="#"
              >
                Price
              </Link>
            </li>
            <li className="block py-2 md:p-2 lg:p-4">
              <Link
                className="py-2 duration-75 hover:border-b border-primary"
                href="#"
              >
                Contact Us
              </Link>
            </li>
            <li className="block py-2 md:p-2 lg:p-4">
              <Button className="px-6 py-2 text-white rounded-md bg-gradient-to-r from-[#4680ff] to-[#5b89ec] ">
                Login <ArrowForwardIcon className="ml-2" fontSize="small" />
              </Button>
            </li>
          </ul>
        </div>

        <div
          className={`${
            navOpen ? "block" : "hidden"
          }  h-screen fixed top-0 z-20  left-0   w-full   md:hidden backdrop-blur-sm `}
          onClick={handleClose}
        ></div>

        <div
          className={`${
            navOpen ? "block" : "hidden"
          }  h-screen fixed top-0 z-50  left-0  animated_circle w-full  md:hidden`}
        >
          <div className="container flex justify-between py-10 h-[70px] ">
            <Link href="/">
              <Image
                className="w-20 md:w-24 lg:w-32"
                src="/img/header/ERP-Logo.png"
                alt="Logo"
                width={300}
                height={150}
              />
            </Link>

            <button className="text-gray-800 md:hidden" onClick={handleClose}>
              <CloseIcon fontSize="large" />
            </button>
          </div>
          <ul className="px-4 pt-4 font-semibold bg-transparent text-primary md:flex md:justify-between md:items-center md:pt-0">
            <li className="block py-2 md:p-2 lg:p-4">
              <Link
                className="block px-3 py-2 rounded-md text-primary hover:text-white border-primary hover:bg-primary"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="block py-2 md:p-2 lg:p-4">
              <Link
                className="block px-3 py-2 rounded-md text-primary hover:text-white border-primary hover:bg-primary"
                href="#"
              >
                Service
              </Link>
            </li>
            <li className="block py-2 md:p-2 lg:p-4">
              <Link
                className="block px-3 py-2 rounded-md text-primary hover:text-white border-primary hover:bg-primary"
                href="#"
              >
                About Us
              </Link>
            </li>
            <li className="block py-2 md:p-2 lg:p-4">
              <Link
                className="block px-3 py-2 rounded-md text-primary hover:text-white border-primary hover:bg-primary"
                href="#"
              >
                Price
              </Link>
            </li>
            <li className="block py-2 md:p-2 lg:p-4">
              <Link
                className="block px-3 py-2 rounded-md text-primary hover:text-white border-primary hover:bg-primary"
                href="#"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <li className="block p-4 ">
            <Button className="w-full py-2 text-white rounded-md bg-[#1976d2] ">
              Login <ArrowForwardIcon className="ml-2" fontSize="small" />
            </Button>
          </li>
        </div>
      </header>
    </>
  );
};

export default index;
