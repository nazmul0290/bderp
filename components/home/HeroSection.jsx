import Image from "next/image";
import React from "react";
import { Grid } from "@mui/material";

const HeroSection = () => {
  return (
    <section className="relative min-h-[690px] w-full  mb-32  ">
      <div
        className="relative min-h-[465px] w-full bg-[length:100%_100%]  bg-no-repeat bg-top bg-origin-border"
        style={{
          backgroundImage: "url('/img/home/banner-bg.png')",
        }}
      >
        <div className="inline-flex justify-end items-center absolute top-[90px] left-0 right-0 h-[644px]">
          <div
            className="w-1/2 h-full bg-[length:auto_100%] bg-no-repeat"
            style={{
              backgroundImage: "url('/img/home/banner-right-bg.png')",
            }}
          ></div>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 z-10 h-full mx-auto">
        <div className="flex h-full justify-center items-center relative top-[90px] container">
          <div className="grid grid-cols-2  h-[calc(100% - 85px)] ">
            <div className="w-full my-auto">
              <h1 className="font-semibold text-primary text-[64px] leading-[77px]">
                Let Us Help You To Grow Your Business!
              </h1>
              <p className="leading-5 mt-9 text-primary ">
                Simply Save Time & Money With BD ERP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
