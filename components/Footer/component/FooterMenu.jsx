import Link from "next/link";
import React from "react";

const FooterMenu = () => {
  return (
    <>
      <div>
        <h1 className="text-xl font-bold md:font-extrabold md:text-2xl">
          Services
        </h1>
      </div>
      <ul className="flex flex-col mt-4 space-y-2 text-sm md:font-medium md:text-xl lg:text-lg md:text-md">
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
    </>
  );
};

export default FooterMenu;
