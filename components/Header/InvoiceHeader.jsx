import React from "react";

const InvoiceHeader = () => {
  return (
    <header
      className="flex justify-between text-gray-100 bg-gray-600 md:hidden"
      data-dev-hint="mobile menu bar"
    >
      <a
        href="#"
        className="block p-4 font-bold text-white truncate whitespace-nowrap"
      >
        BDERP
      </a>

      <label
        for="menu-open"
        id="mobile-menu-button"
        className="p-2 m-2 rounded-md focus:outline-none hover:text-white hover:bg-gray-700"
      >
        <svg
          id="menu-open-icon"
          className="w-6 h-6 transition duration-200 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          id="menu-close-icon"
          className="w-6 h-6 transition duration-200 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </label>
    </header>
  );
};

export default InvoiceHeader;
