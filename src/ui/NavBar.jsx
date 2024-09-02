import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "./Typography";
import { navList } from "../fake_api/NavData";
import Logo from "../assets/icons/Logo";
import Search from "../assets/icons/Search";
import Cart from "../assets/icons/Cart";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="px-[1rem] bg-bg_F20 py-[1rem] border-b border-border_DCD">
      <nav className="container grid-cols-2 grid md:grid-cols-[1fr_2fr_1fr] items-center">
        {/* Logo and Menu Icon for Mobile */}

        <div className="logo">
          <Link to="/">
            <Logo
              className="w-[8rem] h-full cursor-pointer"
              fill="var(--primary_color)"
            />
          </Link>
        </div>
        <div className="md:hidden justify-self-end">
          <HiOutlineMenuAlt1
            className="w-8 h-8 cursor-pointer md:hidden"
            onClick={handleMenuToggle}
          />
        </div>

        {/* Main Navigation for Desktop starts*/}
        <ul className="hidden md:flex justify-center gap-[4rem]">
          {navList.map((navItem, i) => (
            <li key={i}>
              <Link to={navItem.link}>
                <Typography
                  variant="span_normal_16"
                  color="text-primary_color"
                  className="inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondary_color after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  {navItem.navItem}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
        {/* Right Part */}
        <div className="hidden md:flex items-center gap-[1.6rem] justify-self-end">
          <Search className="cursor-pointer hover:scale-[1.1] transition-all duration-100 ease-in" />
          <Cart className="cursor-pointer hover:scale-[1.1] transition-all duration-100 ease-in" />
          <Typography
            variant="span_normal_16"
            color="text-primary_color"
            className="cursor-pointer inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondary_color after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Sign In
          </Typography>
        </div>
        {/* Main Navigation for Desktop ends */}

        {/* Mobile Menu starts*/}
        <div
          className={`fixed top-0 right-0 h-full w-[30rem] bg-bg_F20 z-[99] transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden flex flex-col`}
        >
          <div className="flex justify-between items-center p-[1rem] border-b border-border_DCD">
            <div className="logo">
              <Link to="/">
                <Logo
                  className="w-[8rem] h-full cursor-pointer"
                  fill="var(--primary_color)"
                />
              </Link>
            </div>
            <TfiClose
              className="w-8 h-8 cursor-pointer"
              onClick={handleMenuToggle}
            />
          </div>

          <div className="flex items-center h-full">
            <ul className="w-full text-center py-[2rem]">
              {navList.map((navItem, i) => (
                <li
                  key={i}
                  className="hover:bg-[rgba(220,210,187,0.25)] text-center border-t-2 border-dotted border-border_DCD transition-all duration-150 ease-in group"
                >
                  <Link to={navItem.link} onClick={handleMenuToggle}>
                    <Typography
                      variant="span_normal_16"
                      color="text-primary_color"
                      className="block text-[2.6rem] group-hover:translate-x-4 transition-all ease-in"
                    >
                      {navItem.navItem}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Mobile Menu ends*/}
      </nav>
    </div>
  );
};

export default NavBar;
