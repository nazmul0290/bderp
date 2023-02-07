import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";
import React from "react";

const ProcessEfficiencyCard = ({ imgUrl, content }) => {
  return (
    <div className="w-[220px] flex justify-between space-x-3 ">
      <div>
        <Image
          src={imgUrl}
          alt="Process"
          width={150}
          height={150}
          className="w-[50px]  "
        />
      </div>
      <div>
        <p className="text-primary">{content}</p>
      </div>
    </div>
  );
};

export default ProcessEfficiencyCard;
