import React from "react";

const Button = ({ type = "submit", className, secondary, ...props }) => (
  <button
    type={type}
    className={`${className} ${
      secondary
        ? "text-gray-900 border-2 border-gray-900 active:bg-white/80 hover:bg-gray-200 bg-gray-300"
        : "active:bg-gray-900 hover:bg-gray-700 ring-gray-300 text-white focus:border-gray-900 bg-gray-800"
    } inline-flex items-center justify-center px-4 py-2  border border-transparent rounded-md font-semibold text-xs  uppercase tracking-widest  focus:outline-none  focus:ring  disabled:opacity-25 transition ease-in-out duration-150`}
    {...props}
  />
);

export default Button;
