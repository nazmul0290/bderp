import BusinessGrowth from "@/components/home/BusinessGrowth";
import Comparison from "@/components/home/Comparison";
import ExcelAlert from "@/components/home/ExcelAlert";
import Features from "@/components/home/Features";
import HeroInput from "@/components/home/HeroInput";
import HeroSection from "@/components/home/HeroSection";
import KeyFeature from "@/components/home/KeyFeature";
import SolutionProcess from "@/components/home/SolutionProcess";
import Layout from "@/components/ui/Layout";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout transparent>
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
