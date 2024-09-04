import React, { useState } from "react";
import { navList } from "../fake_api/NavData";
import ProductCartItems from "./ProductCartItems";
import NavMobile from "./NavMobile";
import DesktopNav from "./DesktopNav";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCart = () => {
    console.log("clicked");
    setShowCart((prev) => !prev);
  };

  return (
    <div className="px-[1rem] bg-bg_F20 py-[1rem] border-b border-border_DCD">
      <nav className="container grid-cols-2 grid md:grid-cols-[1fr_2fr_1fr] items-center">
        {/* Logo and Menu Icons for Mobile */}
        <NavMobile
          handleCart={handleCart}
          handleMenuToggle={handleMenuToggle}
        />
        <DesktopNav navList={navList} handleCart={handleCart} />

        <NavMenu
          isMenuOpen={isMenuOpen}
          handleMenuToggle={handleMenuToggle}
          navList={navList}
        />
      </nav>
      {/* product cart */}
      <div
        className={`fixed top-0 right-0 w-[35rem] sm:w-[40rem] border border-border_DCD bg-bg_FF6 z-[99] transform ${
          showCart
            ? "translate-x-0 pointer-events-auto	"
            : "pointer-events-none translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ProductCartItems setShowCart={setShowCart} />
      </div>
    </div>
  );
};

export default NavBar;
