import Image from "next/image";
import React from "react";

const SolutionCard = ({ src, content }) => {
  return (
    <div className="flex flex-col items-center mx-auto space-y-5 md:w-full max-w-[500px]">
      <div className="flex items-center justify-center h-1/2">
        <Image
          src={src}
          alt="solution"
          width={500}
          height={500}
          className="lg:max-w-[170px] lg:h-[150px] md:max-w-[130px] md:h-[115px] max-w-[100px] h-[85px]"
        />
      </div>
      <div className="text-center md:font-semibold text-primary h-1/2">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
