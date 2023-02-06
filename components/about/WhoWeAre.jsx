import Image from "next/image";
import React from "react";
import Headline from "../ui/Headline";
import Paragraph from "../ui/Paragraph";

const WhoWeAre = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div>
          <Headline>Who We Are ?</Headline>
          <Paragraph>
            A web-based, adaptable, and user-friendly software for an ERP
            solution called BD ERP since 2018 which is customized to meet the
            requirements of small, medium and large sized companies. The
            solution, which caters to the needs of small, medium and large sized
            businesses, is distinctive, personalized, and specifically designed
            for those needs. In order to provide our clients with services that
            are both affordable and trustworthy, we intend to leverage newly
            developed cutting-edge cloud technology.
          </Paragraph>
        </div>
        <div className="flex items-center px-6 py-3 mt-10 space-x-3 rounded-md shadow-xl">
          <div className="w-1/4">
            <Image
              src="/img/about-us/mission-vector.png"
              alt="About Us"
              width={350}
              height={350}
            />
          </div>
          <div className="w-3/4">
            <Headline>Our Mission</Headline>
            <Paragraph>
              To provide our customer with high-quality services on time, build
              a family of satisfied and loyal customers, establish enduring
              relationships.
            </Paragraph>
          </div>
        </div>
        <div className="flex items-center px-6 py-3 mt-20 space-x-3 rounded-md shadow-xl">
          <div className="w-3/4">
            <Headline>Our Vision</Headline>
            <Paragraph>
              Develop a fully customized web based ERP solution for each sector
              of small to large business organization . Without sacrificing the
              quality providing each customer easy business management solution
              that will boost up their business to the next level.
            </Paragraph>
          </div>
          <div className="w-1/4">
            <Image
              src="/img/about-us/vision-vector.png"
              alt="About Us"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
