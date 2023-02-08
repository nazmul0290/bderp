import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";

const ImageCompare = ({ title, subtitle, imgUrlBefore, imgUrlAfter }) => {
  return (
    <>
      <div className="text-center text-primary">
        <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-lg font-bold xl:leading-[50px] md:leading-10 ">
          {title}
        </h1>
        <p>{subtitle}</p>
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
              src={imgUrlBefore}
              alt="Before-BDERP-Usage"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={imgUrlAfter}
              alt="After-BDERP-Usage"
            />
          }
        />
      </div>
    </>
  );
};

export default ImageCompare;
