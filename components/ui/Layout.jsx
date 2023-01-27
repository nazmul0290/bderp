import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, transparent }) => {
  return (
    <section className="flex flex-col justify-between min-h-screen">
      <Header transparent={transparent} />
      <main className="min-h-[calc(100vh-10vh)] "> {children} </main>
      <Footer />
    </section>
  );
};

export default Layout;
