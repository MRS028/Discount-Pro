import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {

  return (
    <>
      <Header />

      <section className="min-h-[calc(100vh-250px)]">
        <Outlet />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomeLayout;
