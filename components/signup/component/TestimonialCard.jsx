import Image from "next/image";
import React from "react";

const TestimonialCard = ({ avatar, name, designation }) => {
  return (
    <div className="flex flex-col items-center justify-center">
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
  );
};

export default TestimonialCard;
