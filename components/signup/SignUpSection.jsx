import Image from "next/image";
import React, { useState } from "react";

import Link from "next/link";
import SignUpForm from "./component/SignUpForm";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./component/TestimonialCard";

const SignUpSection = () => {
  return (
    <section className="py-20 ">
      <div className="container flex flex-col items-center justify-between md:space-x-10 md:flex-row">
        <div className="order-2 w-full mt-16 md:mt-0 md:w-1/2 md:order-1">
          <div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/img/signup/settings-circle.png"
                alt="settings-circle"
                width={150}
                height={150}
              />
              <p>
                From its medieval origins to the{" "}
                <Link href="/" className="text-blue-700">
                  {" "}
                  digital learn everything there{" "}
                </Link>{" "}
                is to know about the ubiquitous lorem ipsum passage esse and
                dolore fugiat nulla Poriatur excepteur Sint oc.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              autoplay={true}
              pagination={{ clickable: true }}
              navigation
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <TestimonialCard
                  avatar="/img/signup/temtimunial-1.png"
                  name="Regina Hamilton"
                  designation="CEO, Of SaasCo"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard
                  avatar="/img/signup/temtimunial-1.png"
                  name="Regina Hamilton"
                  designation="CEO, Of SaasCo"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard
                  avatar="/img/signup/temtimunial-1.png"
                  name="Regina Hamilton"
                  designation="CEO, Of SaasCo"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard
                  avatar="/img/signup/temtimunial-1.png"
                  name="Regina Hamilton"
                  designation="CEO, Of SaasCo"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2 md:order-2">
          <div className="text-center">
            <div className="flex justify-center">
              <Image
                src="/img/header/ERP-Logo.png"
                alt="BD_ERP_logo"
                className="max-w-[120px]"
                width={150}
                height={70}
              />
            </div>
            <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md font-bold xl:leading-[50px] md:leading-10  text-primary mt-8">
              Digitalizing Manufacturing & Trading SMEs
            </h1>
          </div>
          <div className="lg:px-10 ">
            <p className="text-center text-primary">
              Have an account?{" "}
              <Link href="/signin" className="font-semibold text-blue-600">
                Sign In
              </Link>{" "}
            </p>
            <SignUpForm />
            <div className="mt-5 text-center">
              <h1>100% Safe & Secure!</h1>
              <p>Trusted By 10,000+ Manufacturing & Tranding SMEs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
