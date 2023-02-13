import InvoiceLayout from "@/components/Layout/InvoiceLayout";
import Layout from "@/components/Layout/Layout";
import FormSection from "@/components/page-components/invoice-builder/FormSection";
import Section from "@/components/ui/Section";
import React from "react";

const index = () => {
  return (
    <Layout>
      <Section>
        <FormSection />
      </Section>
    </Layout>
  );
};

export default index;
