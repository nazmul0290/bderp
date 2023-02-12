import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const ExcelAlert = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div className="text-center">
          <h1 className="text-xl font-bold text-primaryBlue md:text-2xl lg:text-3xl xl:text-4xl">
            Hey! Are You
          </h1>
          <p className="mt-2 md:tracking-wide text-md md:text-md lg:text-xl xl:text-2xl ">
            Still doing your Inventory Management manually? Or on Excel?
          </p>
          <p className="mt-2 font-bold tracking-wide text-md md:text-md lg:text-xl xl:text-2xl ">
            Come on! Save Your Time & Let Us Help Your Business To Grow!
          </p>
        </div>
        <div className="flex items-center justify-center mt-10">
          <Image
            src="/img/home/excel-draft.png"
            alt="excel-draft"
            className="max-w-full"
            width={1200}
            height={700}
          />
        </div>
        <div className="mt-10 text-center">
          <Button className="px-4 md:px-10 py-3  rounded-md bg-gradient-to-r from-[#4680ff] to-[#5b89ec] text-white font-bold capitalize text-md lg:text-lg xl:text-xl ">
            Just FREE Sign Up & Get Lifetime Access!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExcelAlert;
