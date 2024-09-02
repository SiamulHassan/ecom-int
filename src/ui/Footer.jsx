import React from "react";
import Logo from "../assets/icons/Logo";
import Typography from "./Typography";
import { IoIosArrowRoundUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { socialIcons } from "../fake_api/socialIconData";

const Footer = () => {
  return (
    <footer className="px-[1rem] bg-bg_153 py-[3.5rem]">
      <div className="container grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center gap-y-[2.8rem] md:gap-y-0">
        <div className="logo mx-auto md:mx-0">
          <Link to="/">
            <Logo
              fill="white"
              className="w-[25rem] md:w-[15rem] h-[9rem] md:h-[7rem]"
            />
          </Link>
        </div>

        <div className="send_mail mx-auto">
          <Typography
            variant="p_normal_16"
            color="text-white"
            className="text-center mb-[2.5rem] max-w-[50rem]"
          >
            Subscribe to the newsletter and always stay updated on the latest
            news and exclusive promotions.
          </Typography>
          <div className="mx-auto relative w-full max-w-[400px]">
            <input
              type="email"
              name="email"
              className="w-full font-primary_font text-[1.6rem] text-white placeholder:text-[rgba(255,255,255,0.62)] py-[0.5rem] pr-[3rem] bg-[rgba(255,0,0,0)] border-b border-[rgba(255,255,255,0.62)] focus:outline-none focus:border-white transition-colors"
              placeholder="Your Email Address"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-primary_color flex items-center group"
            >
              <Typography variant="span_normal_14" className="text-white">
                Submit
              </Typography>
              <IoIosArrowRoundUp className="text-white rotate-[45deg] w-[2rem] h-[2rem] group-hover:scale-[1.2] group-hover:-translate-y-1 transition-all ease-in" />
            </button>
          </div>
        </div>
        <div className="contact justify-self-center md:justify-self-end flex items-center gap-3">
          {socialIcons.map((icons, i) => (
            <Link
              className="w-[3.6rem] h-[3.6rem] rounded-full border-2 border-white flex justify-center items-center hover:bg-[rgba(255,255,255,0.3)] transition-all duration-150 ease-in group"
              key={i}
              to={icons.link}
            >
              {<icons.icon />}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
