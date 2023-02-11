import CustomButton from "@/components/ui/Button";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { secureEmail } from "@/utils/email";
import { useMutation, useQuery } from "react-query";
import { emailVerify } from "@/utils/resolvers/query";
import Paragraph from "@/components/ui/Paragraph";
import { useToken } from "@/lib/hooks/useHooks";
import Button from "@/components/ui/Button";
import { resendEmail } from "@/utils/resolvers/mutation";

const EmailVerifyPage = () => {
  const router = useRouter();
  const { token, userId, expires, signature } = router.query;
  const [bearerToken, setBearerToken] = useToken("BDERP_authToken");

  const { data, isLoading, isError, error, isSuccess } = useQuery({
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

  const { mutate } = useMutation(resendEmail);

  const resendEmailHandler = () => {
    mutate(bearerToken, {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

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
          {isError && (
            <>
              <h1>{error?.response.data.message}</h1>{" "}
              <Button className="mt-5" onClick={resendEmailHandler}>
                Resend Email{" "}
                <ArrowForwardIcon className="ml-2" fontSize="small" />
              </Button>
            </>
          )}
          {isSuccess && (
            <>
              <Paragraph>{data?.data.message}</Paragraph>
              <Button
                className="mt-5"
                onClick={() => {
                  router.push("/accounts");
                }}
              >
                Continue <ArrowForwardIcon className="ml-2" fontSize="small" />
              </Button>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default EmailVerifyPage;
