import Layout from "@/components/Layout/Layout";
import Hero from "@/components/page-components/free-invoice-builder/Hero";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Sign Up - Bangladesh ERP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default index;
