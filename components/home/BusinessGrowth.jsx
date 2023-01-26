import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import Image from "next/image";
import Input from "../ui/Input";
import Button from "../ui/Button";

const BusinessGrowth = () => {
  return (
    <section className="container flex flex-col items-center px-2 py-10 m-auto space-x-0 lg:flex-row lg:space-x-3 ">
      <div className="order-2 w-full mt-8 align-middle lg:mt-0 lg:w-1/2 lg:order-1">
        <Image
          src="/img/home/screen-monitor.png"
          alt="screen"
          width={500}
          height={500}
        />
      </div>
      <div className="order-1 w-full lg:w-1/2 lg:order-2">
        <div>
          <p className="text-[#115dde] text-xl font-medium">
            For Future Business Growth
          </p>
          <p className="mt-2 text-2xl lg:text-4xl text-primary">
            You Need The Simplest Way To <br />
            <span className="font-bold">Manager Inventory With BDERP</span>
          </p>
          <p className="mt-2 font-medium text-gray-600 text-md lg:text-xl">
            If you are worried about mishandling current business purchase and
            sales , or worried about daily sales report is right or wrong?.
            Sometimes you may have purchase on credit or you may have keep due
            records of your customers! What if? You could handle all these
            things alone?{" "}
          </p>
        </div>
        <div className="mt-6">
          <p className="mt-2 text-xl lg:text-2xl font-semibold text-[#115dde]">
            Let's see how BDERP will help you...
          </p>
          <div className="flex flex-col mt-4 space-y-1">
            <div className="flex items-center space-x-3">
              <p className="text-[#115dde]">
                <DoneIcon fontSize="large" />
              </p>
              <p className="font-semibold text-primary">
                Keep Track All Products Of Your Business
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-[#115dde]">
                <DoneIcon fontSize="large" />
              </p>
              <p className="font-semibold text-primary">
                Manage more than one outlet easily
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-[#115dde]">
                <DoneIcon fontSize="large" />
              </p>
              <p className="font-semibold text-primary">
                Run e-commerce order, cash on delivery, courier management in a
                single hand.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-[#115dde]">
                <DoneIcon fontSize="large" />
              </p>
              <p className="font-semibold text-primary">
                Get SMS notification FREE!
              </p>
            </div>
          </div>
          <Button className="px-10 py-3 mt-10">Sign Up Free</Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowth;
