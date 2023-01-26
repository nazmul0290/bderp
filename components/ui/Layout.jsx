import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <section className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="min-h-[calc(100vh-60vh)]"> {children} </main>
      <Footer />
    </section>
  );
};

export default Layout;
