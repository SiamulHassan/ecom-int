import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/Logo";
import { TfiClose } from "react-icons/tfi";
import Typography from "./Typography";

const NavMenu = ({ isMenuOpen, handleMenuToggle, navList }) => {
  return (
    <>
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
                    className="block text-[2.6rem] sm:text-[3rem] group-hover:translate-x-4 transition-all ease-in"
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
    </>
  );
};

export default NavMenu;
