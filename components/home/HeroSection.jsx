import Image from "next/image";
import React from "react";
import { Button, Grid } from "@mui/material";

const HeroSection = () => {
  return (
    <section className="  relative min-h-[450px]  lg:min-h-[690px] w-full   ">
      <div
        className="hidden md:block relative min-h-[465px] w-full bg-[length:100%_100%]  bg-no-repeat bg-top bg-origin-border"
        style={{
          backgroundImage: "url('/img/home/banner-bg.png')",
        }}
      >
        <div className="inline-flex justify-end items-center absolute top-[90px] left-0 right-0 h-[490px] lg:h-[530px] xl:h-[644px]">
          <div
            className="w-1/2 h-full bg-[length:auto_100%] bg-no-repeat"
            style={{
              backgroundImage: "url('/img/home/banner-right-bg.png')",
            }}
          ></div>
        </div>
      </div>
      <div
        className="md:hidden block relative min-h-[280px] sm:min-h-[450px]  max-w-full bg-[length:100%_66%]  bg-no-repeat bg-top bg-origin-border"
        style={{
          backgroundImage: "url('/img/home/banner-ng-small.png')",
        }}
      >
        <div className="inline-flex justify-end items-center absolute top-10 left-0 right-0 h-[400px]">
          <div
            className="w-full bg-top  h-[300px] flex justify-center items-center bg-contain  bg-no-repeat"
            style={{
              backgroundImage: "url('/img/home/banner-right-bg.png')",
            }}
          ></div>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 z-10 hidden h-full mx-auto md:block">
        <div className="flex h-full justify-center items-center relative top-[90px] container">
          <div className="grid grid-cols-2  h-[calc(100% - 85px)] ">
            <div className="w-full my-auto">
              <h1 className="font-semibold text-primary xl:text-[64px] xl:leading-[62px] lg:text-[45px] lg:leading-[55px] leading-[35px] text-[30px]">
                Let Us Help You To Grow Your Business!
              </h1>
              <p className="mt-4 leading-5 xl:mt-5 text-primary ">
                Simply Save Time & Money With BD ERP
              </p>
              <Button className="px-8 mt-4 xl:mt-5 py-2 text-white rounded-md bg-gradient-to-r from-[#4680ff] to-[#5b89ec] ">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 h-full mx-auto md:hidden">
        <div className="container flex items-center justify-center mt-24 sm:mt-0">
          <div className="">
            <div className="w-full my-auto text-center">
              <h1 className="text-xl font-semibold leading-7 text-primary">
                Let Us Help You To Grow Your Business!
              </h1>
              <p className="mt-3 leading-2 text-primary ">
                Simply Save Time & Money With BD ERP
              </p>
              <Button className="w-full mt-4 py-2 text-white rounded-md bg-gradient-to-r from-[#4680ff] to-[#5b89ec] ">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
