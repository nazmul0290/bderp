/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";

import SingupStageWizard from "@/components/ui/SingupStageWizard";

import AccountForm from "./component/AccountForm";
import { AuthUser } from "@/lib/hooks/useAuth";

const BusinessTypeWizard = () => {
  const user = AuthUser();

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <div>
          <SingupStageWizard activeStep={0} />
        </div>
        <div className="mt-2 text-center md:mt-5 text-primary">
          <h1 className="text-sm font-bold lg:text-xl md:text-lg">
            Welcome {user.first_name} {user.last_name}! Let's Get Started...
          </h1>
          <h1 className="font-bold xl:text-2xl lg:text-xl md:text-lg ">
            What do you do?
          </h1>
          <p className="font-medium">
            Which of the following best describer the type of business you in?
          </p>
        </div>
        <AccountForm />
      </div>
    </section>
  );
};

export default BusinessTypeWizard;
