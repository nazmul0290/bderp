import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";

const Comparison = () => {
  return (
    <section className="py-10 bg-gray-200 md:py-20">
      <div className="container">
        <div className="text-center text-primary">
          <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-lg font-bold xl:leading-[50px] md:leading-10 ">
            Overcome Business Challenges
          </h1>
        </div>
        <div className="p-3 mt-10 rounded-md">
          <ReactCompareSlider
            boundsPadding={30}
            handle={
              <ReactCompareSliderHandle
                buttonStyle={{
                  backgroundColor: "#000000",
                  border: "1px solid white",
                }}
                linesStyle={{
                  backgroundColor: "#000000",
                  border: "1px solid #999999",
                  boxShadow: "-1px 1px 15px 0px rgba(0,0,0,0.35)",
                }}
              />
            }
            itemOne={
              <ReactCompareSliderImage
                src="/img/home/before-bderp.jpg"
                alt="Before-BDERP-Usage"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="/img/home/after-bderp.jpg"
                alt="After-BDERP-Usage"
              />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Comparison;
