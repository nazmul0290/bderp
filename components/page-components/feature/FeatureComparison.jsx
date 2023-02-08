import ImageCompare from "@/components/global-components/ImageCompare";
import React from "react";

const FeatureComparison = () => {
  return (
    <section className="py-10 bg-gray-200 md:py-20">
      <div className="container">
        <ImageCompare
          title="Help Yourself By Using BD ERP Do You Know? "
          subtitle="Mr. Sharif is a successful businessman. But..."
          imgUrlBefore="/img/home/before-bderp.jpg"
          imgUrlAfter="/img/home/after-bderp.jpg"
        />
      </div>
    </section>
  );
};

export default FeatureComparison;
