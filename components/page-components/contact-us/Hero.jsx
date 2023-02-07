/* eslint-disable react/no-unescaped-entities */
import BigHeadline from "@/components/ui/BigHealine";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className=" bg-[#effaff] py-10">
        <div className="container text-center">
          <div>
            <BigHeadline>BD ERP Will Love To Hear From You </BigHeadline>
            <Paragraph className="text-gray-900">
              We are the best CLOUD Based ERP solution Providers in Bangladesh{" "}
            </Paragraph>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/img/contact-us/contact-hero.png"
              alt="Contact"
              className="w-full md:max-w-[600px]"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>
      <div className="w-full pb-5 mt-10 text-center">
        <Paragraph className="max-w-[800px] m-auto">
          Whether you are running small business or large! We are here to help
          you. You won't have to manage all things clone ! Let us do manage all
          things clone! Let us do manage your whole inventory and you focus on
          your business.{" "}
        </Paragraph>
      </div>
    </>
  );
};

export default Hero;
