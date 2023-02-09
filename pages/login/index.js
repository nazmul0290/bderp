import LoginSection from "@/components/page-components/login/LoginSection";
import Layout from "@/components/ui/Layout";
import Head from "next/head";
import React from "react";

const login = () => {
  return (
    <>
      <Head>
        <title>Sign Up - Bangladesh ERP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <LoginSection />
      </Layout>
    </>
  );
};

export default login;