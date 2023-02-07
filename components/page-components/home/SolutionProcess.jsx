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
          <SolutionCard
            src="/img/home/solution-1.png"
            content="FREE Sign up with our ERP solution software. Oue support team will give you short training on how to operate."
          />
          <SolutionCard
            src="/img/home/solution-2.png"
            content="Start Managing your sales, purchase inventory, accounting etc 100% accurate! alone or with minimal staff. "
          />
          <SolutionCard
            src="/img/home/solution-3.png"
            content="Reduce extra cost, minimize losses and focus on business! just Boom"
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionProcess;
