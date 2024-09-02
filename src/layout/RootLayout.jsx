import React from "react";
import Header from "../ui/Header";
import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";

const RootLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
