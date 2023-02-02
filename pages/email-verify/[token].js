import CustomButton from "@/components/ui/CustomButton";
import Layout from "@/components/ui/Layout";
import Head from "next/head";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { useRouter } from "next/router";
import { secureEmail } from "@/utils/email";

const EmailVerifyPage = () => {
  const router = useRouter();
  const { token } = router.query;

  //TODO:Here I will send a get requiest with the token. and wait for Response

  if (!token) {
    return (
      <Layout>
        <section className="py-10">
          <div className="container text-center">
            <h1>Loading...</h1>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-10">
        <div className="container text-center">
          <h1>Your Email Has been Verified Successfully</h1>
          <h1>{token}</h1>
          <CustomButton
            className="mt-5"
            onClick={() => {
              router.push("/");
            }}
          >
            Go To Home Page{" "}
            <ArrowForwardIcon className="ml-2" fontSize="small" />
          </CustomButton>
        </div>
      </section>
    </Layout>
  );
};

export default EmailVerifyPage;
