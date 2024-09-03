import React from "react";
import { Link } from "react-router-dom";
import Typography from "./Typography";

const ButtonPrimary = ({ onclick, link, children, hasLink = false }) => {
  return (
    <>
      {hasLink ? (
        <Link
          to={link}
          className="border-b border-primary_color hover:scale-[1.1] transition-all duration-150 ease-in"
        >
          <Typography variant="span_normal_12">{children}</Typography>
        </Link>
      ) : (
        <button
          className="hidden sm:block justify-self-end hover:scale-[1.1] transition-all duration-150 ease-in"
          onClick={onclick}
        >
          <Typography
            variant="span_normal_16"
            className="font-bold border-b-2 border-primary_color italic hover:scale-[1.1] transition-all duration-150 ease-in"
          >
            {children}
          </Typography>
        </button>
      )}
    </>
  );
};

export default ButtonPrimary;
