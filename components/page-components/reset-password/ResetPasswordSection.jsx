import Image from "next/image";

import React from "react";

import ResetForm from "./component/ResetForm";

const ResetPasswordSection = () => {
  return (
    <section className="container py-10">
      <div className="flex items-center justify-between md:space-x-4">
        <div className="hidden md:w-1/2 md:block">
          <Image
            src="/img/reset/reset-password-vector.jpg"
            alt="Forgot Password."
            className="w-full"
            width={600}
            height={600}
          />
        </div>
        <div className="w-full md:w-1/2">
          <ResetForm />
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordSection;
