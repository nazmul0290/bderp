import Image from "next/image";
import Link from "next/link";
import React from "react";

const TestimonialCard = ({ avatar, name, designation }) => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/img/signup/settings-circle.png"
            alt="settings-circle"
            className="max-w-[150px]"
            width={150}
            height={150}
          />
          <p>
            From its medieval origins to the{" "}
            <Link href="/" className="text-blue-700">
              {" "}
              digital learn everything there{" "}
            </Link>{" "}
            is to know about the ubiquitous lorem ipsum passage esse and dolore
            fugiat nulla Poriatur excepteur Sint oc.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <Image
          src={avatar}
          alt="testimunial-1"
          className="max-w-[100px] rounded-full"
          width={150}
          height={150}
        />
        <div className="mt-4 text-center">
          <h1 className="text-xl font-bold text-primary">{name}</h1>
          <p>{designation}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
