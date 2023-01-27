import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-cover">
      <div className=" w-full min-h-[600px] bg-cover rectanglePolygon">
        <div></div>
        <div></div>
      </div>
      <div className="container px-4 py-20 mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-full md:w-1/2">
            <div>
              <p className="text-gray-900 md:text-4xl sm:text-xl">
                {" "}
                Let Us Help You To .{" "}
              </p>
              <p className="md:text-4xl text-2xl font-bold text-[#417ee7] drop-shadow-lg leading-10 mt-2">
                Grow Your Business!
              </p>
              <p className="mt-2 font-medium text-gray-600">
                Simply Save Time & Money With BD ERP
              </p>
            </div>
          </div>
          <div className="self-center hidden w-1/2 lg:block">
            <Image
              src="/img/home/Hero-Image.png"
              alt="Hero-Image"
              className="w-full"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
