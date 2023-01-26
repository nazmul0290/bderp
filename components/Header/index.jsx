import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Transition } from "@headlessui/react";

const index = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className={` shadow-md py-1 md:py-3 `}>
        <nav className="container flex flex-wrap items-center justify-between w-full px-4 py-4 m-auto text-lg text-gray-700 bg-white md:py-0">
          <div>
            <Link href="/">
              <Image
                className="w-20 md:w-24 lg:w-32"
                src="/img/header/ERP-Logo.png"
                alt="Logo"
                width={300}
                height={150}
              />
            </Link>
          </div>

          <button
            className="block w-6 h-6 cursor-pointer md:hidden"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            {navOpen ? (
              <CloseIcon fontSize="medium" />
            ) : (
              <MenuIcon fontSize="medium" />
            )}
          </button>
          <div className="hidden w-full md:flex md:items-center md:w-auto">
            <ul className="pt-4 font-semibold text-primary md:flex md:justify-between md:items-center md:pt-0">
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
                <button className="px-10 py-2 text-white rounded-full bg-gradient-to-r from-[#4680ff] to-[#5b89ec]">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <Transition
        show={navOpen}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div
          className={` h-screen absolute top-0 bg-white w-full border-t-2 border-primary md:hidden`}
        >
          <ul className="px-4 pt-4 font-semibold text-primary md:flex md:justify-between md:items-center md:pt-0">
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
            <li className="block py-2 md:p-2 lg:p-4">
              <button className="block px-10 w-full py-2 text-white rounded-full bg-gradient-to-r from-[#4680ff] to-[#5b89ec]">
                Login
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </>
  );
};

export default index;
