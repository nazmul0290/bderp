import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useRouter } from "next/router";

const AppLayout = ({ children, transparent, stickyNav }) => {
  const router = useRouter();

  return (
    <section className="flex flex-col justify-between min-h-screen">
      <Header transparent={transparent} stickyNav={stickyNav} />
      <main className="min-h-[calc(100vh-55vh)] "> {children} </main>
      <Footer />
    </section>
  );
};

export default AppLayout;
