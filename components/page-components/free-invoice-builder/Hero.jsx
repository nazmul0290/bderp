import BigHeadline from "@/components/ui/BigHealine";
import Button from "@/components/ui/Button";
import Headline from "@/components/ui/Headline";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";

import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full min-h-[500px] bg-cover bg-bottom "
      style={{
        backgroundImage:
          "url('/img/invoice/Vecteezy_Backgrond-white-Background.jpg')",
      }}
    >
      <div className="container py-20">
        <div className="text-center">
          <BigHeadline>Online Invoice Generator</BigHeadline>
          <Paragraph>Create & download invoices for free</Paragraph>
          <Button className="mt-5 font-bold rounded-full md:py-4 lg:py-6 md:px-16 lg:px-28">
            Create invoice now
          </Button>
        </div>
        <div className="flex items-center justify-center mt-10">
          <Image
            src="/img/invoice/free-invoice-creator.png"
            alt="Free Invoice Creator"
            className="shadow-2xl "
            width={500}
            height={900}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;