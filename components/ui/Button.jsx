import Link from "next/link";
import React from "react";

const Button = ({
  type = "submit",
  className,
  secondary,
  disabled,
  href,
  children,
  ...props
}) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`${className} ${
          secondary
            ? "text-gray-900 border-2  border-gray-900 active:bg-white/80 hover:bg-gray-200 bg-gray-300"
            : " bg-gradient-to-r from-[#4680ff] to-[#5b89ec]  ring-gray-300 text-white  "
        } inline-flex items-center justify-center px-4 py-2  border border-transparent rounded-md font-semibold text-xs h-10  uppercase tracking-widest  focus:outline-none  focus:ring  disabled:opacity-25 transition ease-in-out duration-150 relative`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} ${
        secondary
          ? "text-gray-900 border-2  border-gray-900 active:bg-white/80 hover:bg-gray-200 bg-gray-300"
          : "bg-gradient-to-r from-[#4680ff] to-[#5b89ec]  ring-gray-300 text-white "
      } inline-flex items-center  justify-center px-4 py-2  border border-transparent rounded-md font-semibold text-xs h-10  uppercase tracking-widest  focus:outline-none  focus:ring  disabled:opacity-25 transition ease-in-out duration-150 relative`}
      {...props}
    >
      {" "}
      {disabled ? (
        <>
          <div className="absolute w-5 h-5 border-2 border-gray-200 border-solid rounded-full"></div>

          <div className="absolute w-5 h-5 border-2 border-green-500 border-solid rounded-full shadow-md animate-spin border-t-transparent"></div>
        </>
      ) : (
        children
      )}{" "}
    </button>
  );
};

export default Button;
