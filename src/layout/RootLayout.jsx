import React from "react";
import Header from "../ui/Header";
import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />
      <div className="grow bg-bg_FF6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
