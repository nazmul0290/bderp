import Link from "next/link";
import React from "react";
import InvoiceHeader from "../Header/InvoiceHeader";

const InvoiceLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen md:flex" data-dev-hint="container">
      <label
        htmlFor="menu-open"
        className="absolute p-2 text-gray-600 bg-gray-100 rounded-full shadow-lg right-2 bottom-2 md:hidden"
        data-dev-hint="floating action button"
      >
        <svg
          className="w-6 h-6"
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
      </label>

      <InvoiceHeader />
      <aside
        id="sidebar"
        className="absolute inset-y-0 left-0 w-3/4 px-0 pt-6 space-y-6 overflow-y-auto text-gray-100 transition duration-200 ease-in-out transform bg-gray-800 md:w-64 md:relative md:translate-x-0 md:flex md:flex-col md:justify-between"
        data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
      >
        <div
          className="flex flex-col space-y-6"
          data-dev-hint="optional div for having an extra footer navigation"
        >
          <Link
            href="/"
            className="flex items-center px-4 space-x-2 text-white"
            title="Your App is cool"
          >
            <span className="text-2xl font-extrabold truncate whitespace-nowrap">
              BDERP
            </span>
          </Link>
        </div>
      </aside>

      <main id="content" className="flex-1 p-6 lg:px-8">
        <div className="mx-auto max-w-7xl">{children}</div>
      </main>
    </div>
  );
};

export default InvoiceLayout;
