import { keyFeature } from "@/lib/data";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";

const KeyFeature = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div className="text-center text-primary">
          <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-lg font-bold xl:leading-[50px] md:leading-10 ">
            Why Buy ERP Software only from BD ERP
          </h1>
        </div>
        <div className="grid gap-10 mt-5 sm:grid-cols-2 md:mt-14">
          {keyFeature.map((feature) => (
            <div className="flex items-baseline space-x-3" key={feature.id}>
              <div className="text-[#115dde]">
                <DoneIcon className="text-2xl lg:text-4xl md:text-3xl" />
              </div>
              <div>
                <h1 className="text-[#115dde] font-semibold md:font-bold">
                  {feature.title}
                </h1>
                <p className="text-sm font-semibold lg:text-md text-primary">
                  {feature.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeature;
