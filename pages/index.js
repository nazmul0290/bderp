import BusinessGrowth from "@/components/page-components/home/BusinessGrowth";
import Comparison from "@/components/page-components/home/Comparison";
import ExcelAlert from "@/components/page-components/home/ExcelAlert";
import Features from "@/components/page-components/home/Features";
import HeroSection from "@/components/page-components/home/HeroSection";
import KeyFeature from "@/components/page-components/home/KeyFeature";
import SolutionProcess from "@/components/page-components/home/SolutionProcess";
import Layout from "@/components/Layout/Layout";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bangladesh ERP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout transparent stickyNav>
        <HeroSection />
        <BusinessGrowth />
        <SolutionProcess />
        <KeyFeature />
        <Comparison />
        <ExcelAlert />
        <Features />
      </Layout>
    </>
  );
}
