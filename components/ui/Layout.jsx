import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, transparent, stickyNav }) => {
  return (
    <section className="flex flex-col justify-between min-h-screen">
      <Header transparent={transparent} stickyNav={stickyNav} />
      <main className="min-h-[calc(100vh-55vh)] "> {children} </main>
      <Footer />
    </section>
  );
};

export default Layout;
