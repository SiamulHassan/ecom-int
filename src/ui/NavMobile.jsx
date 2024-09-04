import React from "react";
import { Link } from "react-router-dom";
import Search from "../assets/icons/Search";
import Cart from "../assets/icons/Cart";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Logo from "../assets/icons/Logo";

const NavMobile = ({ handleCart, handleMenuToggle }) => {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <Logo
            className="w-[8rem] h-full cursor-pointer"
            fill="var(--primary_color)"
          />
        </Link>
      </div>
      <div className="md:hidden justify-self-end grid grid-cols-3 gap-x-3">
        <Search className="w-8 h-8 cursor-pointer hover:scale-[1.1] transition-all duration-100 ease-in" />
        <Cart
          className="w-8 h-8 cursor-pointer hover:scale-[1.1] transition-all duration-100 ease-in"
          onclick={handleCart}
        />
        <HiOutlineMenuAlt1
          className="w-8 h-8 cursor-pointer hover:scale-[1.1] transition-all duration-100 ease-in md:hidden"
          onClick={handleMenuToggle}
        />
      </div>
    </>
  );
};

export default NavMobile;
