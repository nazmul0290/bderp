import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className=" bg-[#effaff]">
      <div className="container flex items-end justify-center py-10">
        <Image
          src="/img/about-us/about-us-hero.png"
          className="md:max-w-[700px] w-full"
          alt="About us"
          width={700}
          height={400}
        />
      </div>
    </section>
  );
};

export default Hero;
