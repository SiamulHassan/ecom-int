import React from "react";
import Search from "../assets/icons/Search";
import Cart from "../assets/icons/Cart";
import Typography from "./Typography";
import { Link } from "react-router-dom";
const DesktopNav = ({ navList, handleCart }) => {
  return (
    <>
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
        <Cart
          className="cursor-pointer hover:scale-[1.1] transition-all duration-100 ease-in"
          onclick={handleCart}
        />
        <Link to="/sign-in">
          <Typography
            variant="span_normal_16"
            color="text-primary_color"
            className="cursor-pointer inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondary_color after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Sign In
          </Typography>
        </Link>
      </div>
      {/* Main Navigation for Desktop ends */}
    </>
  );
};

export default DesktopNav;
