/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CustomButton from "../ui/Button";
import Button from "../ui/Button";

const index = ({ transparent, stickyNav }) => {
  const [sticky, setSticky] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 90);
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
        className={` ${
          transparent ? "bg-transparent fixed" : "bg-[#c2c4ff] "
        }  ${
          sticky && stickyNav
            ? "navbar_scrolled navbar fixed"
            : transparent
            ? "navbar"
            : "navbar sticky text-white"
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
                className={`${
                  transparent && !sticky ? "border-white" : "border-primary"
                } py-2 duration-75 hover:border-b `}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="block py-2 md:p-2 lg:p-4">
              <Link
                className={`${
                  transparent && !sticky ? "border-white" : "border-primary"
                } py-2 duration-75 hover:border-b `}
                href="#"
              >
                Service
              </Link>
            </li>
            <li className="block py-2 md:p-2 lg:p-4">
              <Link
                className={`${
                  transparent && !sticky ? "border-white" : "border-primary"
                } py-2 duration-75 hover:border-b `}
                href="#"
              >
                About Us
              </Link>
            </li>
            <li className="block py-2 md:p-2 lg:p-4">
              <Link
                className={`${
                  transparent && !sticky ? "border-white" : "border-primary"
                } py-2 duration-75 hover:border-b `}
                href="#"
              >
                Price
              </Link>
            </li>
            <li className="block py-2 md:p-2 lg:p-4">
              <Link
                className={`${
                  transparent && !sticky ? "border-white" : "border-primary"
                } py-2 duration-75 hover:border-b `}
                href="#"
              >
                Contact Us
              </Link>
            </li>
            <li className="block py-2 md:p-2 lg:p-4">
              <Button href="/login">
                Login <ArrowForwardIcon className="ml-2" fontSize="small" />
              </Button>
            </li>
          </ul>
        </div>

        {/* Backdrop Blur */}

        <div
          className={`${
            navOpen ? "block" : "hidden"
          }  h-screen fixed top-0 z-20  left-0   w-full   md:hidden backdrop-blur-sm `}
          onClick={handleClose}
        ></div>

        {/*  Mobile Navigation bar .  */}
        <div
          className={`${
            navOpen ? "block" : "hidden"
          }  h-[70vh] fixed px-5 top-0 z-50  right-0  animated_circle w-2/3  md:hidden`}
        >
          <div className="container flex justify-between py-10 h-[70px] ">
            <div></div>
            <button className="text-gray-800 md:hidden" onClick={handleClose}>
              <CloseIcon fontSize="large" />
            </button>
          </div>
          <ul className="px-4 pt-4 font-semibold text-center bg-transparent text-primary md:flex md:justify-between md:items-center md:pt-0">
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
            <CustomButton>
              Login <ArrowForwardIcon className="ml-2" fontSize="small" />
            </CustomButton>
          </li>
        </div>
      </header>
    </>
  );
};

export default index;
