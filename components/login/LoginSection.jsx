import Image from "next/image";
import Link from "next/link";
import React from "react";
import BDerpFormSection from "../ui/BDerpFormSection";
import LoginForm from "./component/LoginForm";

const LoginSection = () => {
  return (
    <section className="py-5 md:py-20 ">
      <div className="container flex flex-col items-center justify-between md:space-x-10 md:flex-row">
        <div className="hidden w-full mt-16 md:mt-0 md:block md:w-1/2">
          <Image
            src="/img/login/login-vactor.png"
            alt="Login-vactor"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full md:w-1/2">
          <BDerpFormSection>
            <div className="lg:px-10 ">
              <p className="text-center text-primary">
                Have an account?{" "}
                <Link href="/signup" className="font-semibold text-blue-600">
                  Sign Up
                </Link>{" "}
              </p>
              <LoginForm />
              <div className="mt-3 text-center">
                <Link href="/forgot" className="mt-5 text-center text-blue-400">
                  Forget Password?
                </Link>
              </div>
            </div>
          </BDerpFormSection>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
