import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";
import React from "react";

const HeroFeature = ({ imgUrl, content, fullWidth }) => {
  return (
    <div
      className={`${fullWidth ? "col-span-2" : "max-w-lg"} flex  space-x-3 `}
    >
      <div className="w-[70px]">
        <Image
          src={imgUrl}
          alt="Process"
          width={150}
          height={150}
          className="w-[50px]  "
        />
      </div>
      <div>
        <Paragraph className="text-primary">{content}</Paragraph>
      </div>
    </div>
  );
};

export default HeroFeature;
