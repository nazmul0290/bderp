import ImageCompare from "@/components/global-components/ImageCompare";
import React from "react";

const Comparison = () => {
  return (
    <section className="py-10 bg-gray-200 md:py-20">
      <div className="container">
        <ImageCompare
          title="Overcome Business Challenges"
          imgUrlBefore="/img/home/before-bderp.jpg"
          imgUrlAfter="/img/home/after-bderp.jpg"
        />
      </div>
    </section>
  );
};

export default Comparison;
