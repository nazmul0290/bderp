import Headline from "@/components/ui/Headline";
import Image from "next/image";
import React from "react";

import HeroFeature from "./component/HeroFeature";

const processEfficiency = [
  {
    id: "1",
    imgUrl: "/img/about-us/transfer.png",
    content: "Easy Data Transfer Between Internal and External Parties.",
  },
  {
    id: "2",
    imgUrl: "/img/about-us/real-time-data.png",
    content: "Sharing Real-Time Data Between Departments.",
  },
  {
    id: "3",
    imgUrl: "/img/about-us/transparent-way.png",
    content: "Trancking Business resources in a transparent way.",
  },
  {
    id: "4",
    imgUrl: "/img/about-us/report.png",
    content: "Get monthly or yearly sales report in one click.",
  },
  {
    id: "5",
    imgUrl: "/img/about-us/sales-team.png",
    content: "Manage Your sales team in one hand",
  },
];

const Hero = () => {
  return (
    <section className="bg-[#effaff] py-10">
      <div className="container">
        <div className="max-w-xl">
          <p>Why Choose Us</p>
          <Headline>
            Track Your Purchase and Sales With Our Best ERP Software{" "}
          </Headline>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <HeroFeature
            imgUrl="/img/about-us/transfer.png"
            content="Visualize all purchase and sales activity in a simplest way."
          />
          <HeroFeature
            imgUrl="/img/about-us/real-time-data.png"
            content="Keep you due purchases in on shot."
          />
          <HeroFeature
            imgUrl="/img/about-us/transparent-way.png"
            content="You can do every work faster! No matter how many sales or purchases you are handling each day! Get faster documentation and report easily."
            fullWidth
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
