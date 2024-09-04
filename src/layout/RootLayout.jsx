import React, { useEffect, useRef } from "react";
import Header from "../ui/Header";
import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";

const RootLayout = () => {
  const menuRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 205) {
        menuRef.current.classList.add(
          "fixed",
          "top-0",
          "w-full",
          "shadow-lg",
          "z-[99]",
          "transition-all",
          "duration-300"
        );
      } else {
        menuRef.current.classList.remove(
          "fixed",
          "top-0",
          "w-full",
          "shadow-lg",
          "z-[99]"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <div ref={menuRef}>
        <Header />
        <NavBar />
      </div>
      <div className="grow bg-bg_FF6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
