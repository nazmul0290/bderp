import ContactCard from "@/components/page-components/contact-us/ContactCard";
import Hero from "@/components/page-components/contact-us/Hero";
import Layout from "@/components/ui/Layout";
import Head from "next/head";

const ContactUsPage = () => {
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
        <ContactCard />
      </Layout>
    </>
  );
};

export default ContactUsPage;
