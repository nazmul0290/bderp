/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import CheckList from "@/components/global-components/CheckList";
import { businessGrowthChecklist } from "@/lib/data";
import Button from "@/components/ui/Button";

const BusinessGrowth = () => {
  return (
    <section className="container flex flex-col items-center px-2 py-10 m-auto mt-10 space-x-0 lg:mt-1 md:mt-28 lg:flex-row lg:space-x-5 ">
      <div className="items-center justify-center order-2 hidden w-full md:flex mt-14 lg:mt-0 lg:w-1/2 lg:order-1">
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
            <span className="font-bold">Manage Inventory With BDERP</span>
          </p>
          <p className="mt-2 text-sm font-medium text-gray-600 lg:text-lg md:text-md">
            If you are worried about mishandling current business purchase and
            sales , or worried about daily sales report is right or wrong?.
            Sometimes you may have purchase on credit or you may have keep due
            records of your customers! What if? You could handle all these
            things alone?{" "}
          </p>
        </div>
        <CheckList
          title="Let's see how BDERP will help you..."
          lists={businessGrowthChecklist}
        />
        <Button href="/signup">Sign Up Free</Button>
      </div>
    </section>
  );
};

export default BusinessGrowth;
