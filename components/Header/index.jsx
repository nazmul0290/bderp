import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <header className="py-3 shadow-md">
      <nav className="container flex flex-wrap items-center justify-between w-full px-4 py-4 m-auto text-lg text-gray-700 bg-white md:py-0">
        <div>
          <Link href="/">
            <Image
              className="w-32"
              src="/img/header/ERP-Logo.png"
              alt="Logo"
              width={300}
              height={150}
            />
          </Link>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="block w-6 h-6 cursor-pointer md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div className="hidden w-full md:flex md:items-center md:w-auto">
          <ul className="pt-4 font-semibold text-primary md:flex md:justify-between md:items-center md:pt-0">
            <li className="block py-2 md:p-4">
              <Link
                className="py-2 duration-75 hover:border-b border-primary"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="block py-2 md:p-4">
              <Link
                className="py-2 duration-75 hover:border-b border-primary"
                href="#"
              >
                Service
              </Link>
            </li>
            <li className="block py-2 md:p-4">
              <Link
                className="py-2 duration-75 hover:border-b border-primary"
                href="#"
              >
                About Us
              </Link>
            </li>
            <li className="block py-2 md:p-4">
              <Link
                className="py-2 duration-75 hover:border-b border-primary"
                href="#"
              >
                Price
              </Link>
            </li>
            <li className="block py-2 md:p-4">
              <Link
                className="py-2 duration-75 hover:border-b border-primary"
                href="#"
              >
                Contact Us
              </Link>
            </li>
            <li className="block py-2 md:p-4">
              <button className="px-10 py-2 text-white rounded-full bg-gradient-to-r from-[#4680ff] to-[#5b89ec]">
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default index;
