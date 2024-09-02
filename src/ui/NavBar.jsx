import React from "react";
import { Link } from "react-router-dom";
import Typography from "./Typography";
import { navList } from "../fake_api/NavData";
import Logo from "../assets/icons/Logo";
import Search from "../assets/icons/Search";
import Cart from "../assets/icons/Cart";

const NavBar = () => {
  return (
    <div className="bg-bg_F20 py-[1rem]">
      <nav className="container grid grid-cols-[1fr_2fr_1fr] items-center">
        <div className="logo">
          <Logo className="w-[7rem] h-full cursor-pointer" />
        </div>
        <ul className="flex justify-center gap-[4rem]">
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
        <div className="right_part flex items-center gap-[1.6rem] justify-self-end">
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
      </nav>
    </div>
  );
};

export default NavBar;
