import React from "react";
import Header from "../ui/Header";
import Nav from "../ui/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
