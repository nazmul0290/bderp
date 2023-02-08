import { facility } from "@/lib/data";
import React from "react";

const Features = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="grid gap-10 mt-5 md:gap-20 sm:grid-cols-2 md:mt-14">
          {facility.map((item) => {
            return (
              <div className="flex flex-col space-y-3" key={item.id}>
                <h1 className="text-[#115dde] font-semibold md:font-bold">
                  {item.title}
                </h1>
                <p className="text-sm font-semibold lg:text-md text-primary">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
