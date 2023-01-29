import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import Image from "next/image";
import { Button } from "@mui/material";

const BusinessGrowth = () => {
  return (
    <section className="container flex flex-col items-center px-2 py-10 m-auto mt-10 space-x-0 lg:mt-1 md:mt-28 lg:flex-row lg:space-x-5 ">
      <div className="flex items-center justify-center order-2 hidden w-full md:block mt-14 lg:mt-0 lg:w-1/2 lg:order-1">
        <Image
          src="/img/home/screen-monitor.png"
          alt="screen"
          className="max-w-[300px] md:max-w-[500px]"
          width={500}
          height={500}
        />
      </div>
      <div className="order-1 w-full lg:w-1/2 lg:order-2">
        <div>
          <p className="text-[#115dde] lg:text-xl md:text-lg text-md font-medium ">
            For Future Business Growth
          </p>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl xl:text-4xl text-primary">
            You Need The Simplest Way To <br />
            <span className="font-bold">Manager Inventory With BDERP</span>
          </p>
          <p className="mt-2 text-sm font-medium text-gray-600 lg:text-lg md:text-md">
            If you are worried about mishandling current business purchase and
            sales , or worried about daily sales report is right or wrong?.
            Sometimes you may have purchase on credit or you may have keep due
            records of your customers! What if? You could handle all these
            things alone?{" "}
          </p>
        </div>
        <div className="mt-6">
          <p className="mt-2  font-semibold text-[#115dde] lg:text-xl md:text-lg text-md">
            Let's see how BDERP will help you...
          </p>
          <div className="flex flex-col mt-4 space-y-1 ">
            <div className="flex items-center space-x-3">
              <p className="text-[#115dde]">
                <DoneIcon className="text-2xl lg:text-4xl md:text-3xl" />
              </p>
              <p className="text-sm font-semibold lg:text-lg md:text-md text-primary">
                Keep Track All Products Of Your Business
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-[#115dde]">
                <DoneIcon className="text-2xl lg:text-4xl md:text-3xl" />
              </p>
              <p className="text-sm font-semibold lg:text-lg md:text-md text-primary">
                Manage more than one outlet easily
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-[#115dde]">
                <DoneIcon className="text-2xl lg:text-4xl md:text-3xl" />
              </p>
              <p className="text-sm font-semibold lg:text-lg md:text-md text-primary">
                Run e-commerce order, cash on delivery, courier management in a
                single hand.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-[#115dde] ">
                <DoneIcon className="text-2xl lg:text-4xl md:text-3xl" />
              </p>
              <p className="text-sm font-semibold lg:text-lg md:text-md text-primary">
                Get SMS notification FREE!
              </p>
            </div>
          </div>
          <Button className=" px-10 mt-4 py-2 text-white rounded-md bg-gradient-to-r from-[#4680ff] to-[#5b89ec] ">
            Sign Up Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowth;
