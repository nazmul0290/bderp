import CheckList from "@/components/global-components/CheckList";
import BigHeadline from "@/components/ui/BigHealine";
import Paragraph from "@/components/ui/Paragraph";
import { featureList } from "@/lib/data";
import Image from "next/image";
import React from "react";

const FeatureSection = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <BigHeadline>
            Best Cloud-Based ERP Software Provider In Bangladesh{" "}
          </BigHeadline>
          <Paragraph>
            The most easiest, simplest, cheapest ERP solution for your business
            ever! Now, no one can stop your business from Growing!!
          </Paragraph>
        </div>
        <div className="flex flex-col items-center gap-5 mt-10 md:flex-row">
          <div className="w-full md:w-1/2">
            <CheckList title="Features" lists={featureList} />
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/img/feature/ERP-feature.png"
              alt="ERP"
              className="w-full md:max-w-[500px] "
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
