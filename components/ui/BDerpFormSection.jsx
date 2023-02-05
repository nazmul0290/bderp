import Image from "next/image";
import Link from "next/link";
import React from "react";

const BDerpFormSection = ({ children }) => {
  return (
    <>
      <div className="text-center">
        <div className="flex justify-center">
          <Image
            src="/img/header/ERP-Logo.png"
            alt="BD_ERP_logo"
            className="max-w-[120px]"
            width={150}
            height={70}
          />
        </div>
        <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md font-bold xl:leading-[50px] md:leading-10  text-primary mt-8">
          Digitalizing Manufacturing & Trading SMEs
        </h1>
      </div>
      {children}
    </>
  );
};

export default BDerpFormSection;
