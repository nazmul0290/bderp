import { BDERP_solutionHelp } from "@/lib/data";
import React from "react";
import SolutionCard from "./component/SolutionCard";

const SolutionProcess = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center text-primary">
          <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-lg font-bold xl:leading-[50px] md:leading-10 ">
            How Can BD ERP Solution Help
          </h1>
          <p className="text-lg tracking-wide xl:text-4xl lg:text-3xl md:text-2xl">
            Take You Business to the Next Level
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 mt-5 md:mt-16 sm:grid-cols-3">
          {BDERP_solutionHelp.map((solution) => (
            <SolutionCard
              key={solution.id}
              src={solution.imgUrl}
              content={solution.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionProcess;
