import Image from "next/image";
import React, { useState } from "react";

import Link from "next/link";
import SignUpForm from "./component/SignUpForm";

import { Carousel } from "react-responsive-carousel";
import BDerpFormSection from "@/components/ui/BDerpFormSection";
import TestimonialCard from "./component/TestimonialCard";

const SignUpSection = () => {
  return (
    <section className="py-5 md:py-20 ">
      <div className="container flex flex-col items-center justify-between md:space-x-10 md:flex-row">
        <div className="order-2 w-full mt-16 md:mt-0 md:w-1/2 md:order-1">
          <div className="flex items-center justify-center mt-10">
            <Carousel
              autoPlay={true}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
            >
              <TestimonialCard
                avatar="/img/signup/temtimunial-1.png"
                name="Regina Hamilton"
                designation="CEO, Of SaasCo"
              />

              <TestimonialCard
                avatar="/img/signup/temtimunial-1.png"
                name="Regina Hamilton"
                designation="CEO, Of SaasCo"
              />

              <TestimonialCard
                avatar="/img/signup/temtimunial-1.png"
                name="Regina Hamilton"
                designation="CEO, Of SaasCo"
              />

              <TestimonialCard
                avatar="/img/signup/temtimunial-1.png"
                name="Regina Hamilton"
                designation="CEO, Of SaasCo"
              />
            </Carousel>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2 md:order-2">
          <BDerpFormSection>
            <div className="lg:px-10 ">
              <p className="text-center text-primary">
                Have an account?{" "}
                <Link href="/login" className="font-semibold text-blue-600">
                  Sign In
                </Link>{" "}
              </p>
              <SignUpForm />
              <div className="mt-5 text-center">
                <h1>100% Safe & Secure!</h1>
                <p>
                  Trusted By{" "}
                  <span className="font-bold text-primary">10,000+</span>{" "}
                  Manufacturing & Tranding SMEs
                </p>
              </div>
            </div>
          </BDerpFormSection>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
