import CustomButton from "@/components/ui/Button";
import Layout from "@/components/ui/Layout";
import Head from "next/head";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { secureEmail } from "@/utils/email";
import { useQuery } from "react-query";
import { emailVerify } from "@/utils/resolvers/query";
import Paragraph from "@/components/ui/Paragraph";
import { useToken } from "@/lib/hooks/useHooks";

const EmailVerifyPage = () => {
  const router = useRouter();
  const { token, userId, expires, signature } = router.query;
  const [bearerToken, setBearerToken] = useToken("BDERP_authToken");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["email_verification", token],
    queryFn: () =>
      emailVerify({
        token,
        userId,
        expire_at: expires,
        signature,
        bearerToken,
      }),
    enabled: !!token,
  });

  //TODO:Here I will send a get requiest with the token. and wait for Response

  if (isLoading) {
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
          {isError && <h1>{error?.response.data.message}</h1>}
          {!isError && <Paragraph>{data?.data.message}</Paragraph>}

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
