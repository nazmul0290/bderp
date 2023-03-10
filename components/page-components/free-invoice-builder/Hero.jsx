import BigHeadline from "@/components/ui/BigHealine";
import Button from "@/components/ui/Button";
import Headline from "@/components/ui/Headline";
import Modal from "@/components/ui/Modal";
import Paragraph from "@/components/ui/Paragraph";
import useUser from "@/lib/hooks/useUser";
import isEmpty from "@/utils/is-empty";
import { Divider } from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/router";

import React, { useState } from "react";

const Hero = () => {
  const user = useUser({ middleware: "guest" });
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen((prev) => !prev);
  };

  const guestButtonHandler = () => {
    sessionStorage.setItem(
      `${process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY}guest`,
      JSON.stringify({
        name: "Guest",
        id: 1,
      })
    );
    router.push("/invoice-builder");
  };

  const createInvoiceNowHandler = () => {
    if (isEmpty(user.token)) {
      return setIsOpen((prev) => !prev);
    }
    router.push("/invoice-builder");
  };

  const signRouteHandler = () => {
    sessionStorage.setItem(
      `${process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY}memory`,
      JSON.stringify("/invoice-builder")
    );
    router.push("/login");
  };
  return (
    <>
      <Modal isOpen={isOpen} size="small" closeModal={closeModal}>
        <div className="">
          <div className="mx-auto max-w-[200px]">
            <Button href="/signup" className="w-full">
              Sign Up
            </Button>
          </div>
          <div className="mt-5 mx-auto max-w-[200px] ">
            <Button onClick={signRouteHandler} className="w-full">
              Sign In
            </Button>
          </div>
          <Divider className="mt-5">Or</Divider>
          <div className="mt-5  mx-auto max-w-[200px]">
            <Button onClick={guestButtonHandler} className="w-full">
              Continue As a Guest
            </Button>
          </div>
        </div>
      </Modal>
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
            <Button
              className="mt-5 font-bold rounded-full md:py-4 lg:py-6 md:px-16 lg:px-28"
              /* href="/invoice-builder" */

              onClick={createInvoiceNowHandler}
            >
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
    </>
  );
};

export default Hero;
