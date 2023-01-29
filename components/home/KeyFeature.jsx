import React from "react";
import KeyFetureCard from "./component/KeyFetureCard";

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
          <KeyFetureCard
            title="Lifetime FREE!"
            subtitle="Understand every ERP software's features in details to zero in on the most suitable option."
          />
          <KeyFetureCard
            title="Customized Modules "
            subtitle="Choose any ERP module you want, we will ensure easy integration with your existing system or business."
          />
          <KeyFetureCard
            title="Easy Implementation"
            subtitle="Implementation time is reduces to help you get started right away. Very easy to learn and operate."
          />
          <KeyFetureCard
            title="Expert Consultation"
            subtitle="Software experts will guide you through the buying stages and help make the right purchase decision"
          />

          <KeyFetureCard
            title="Premium Customer Support "
            subtitle="Our Premium expert team will always wait to hear from you!. If you need help, our team will assist you quickly."
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeature;
