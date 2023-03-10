import AuditSection from "@/components/page-components/about/AuditSection";
import Hero from "@/components/page-components/about/Hero";
import WhoWeAre from "@/components/page-components/about/WhoWeAre";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import React from "react";

const about = () => {
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
        <WhoWeAre />
        <AuditSection />
      </Layout>
    </>
  );
};

export default about;
