import TableSection from "@/components/page-components/price/TableSection";
import Layout from "@/components/Layout/Layout";
import { AuthUser } from "@/lib/hooks/useAuth";
import Head from "next/head";
import React from "react";

const PricePage = () => {
  const user = AuthUser();
  console.log(user);
  return (
    <>
      <Head>
        <title>Sign Up - Bangladesh ERP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <TableSection />
      </Layout>
    </>
  );
};

export default PricePage;
