import React from "react";
import Typography from "./Typography";

const ButtonRounded = ({ children, width }) => {
  return (
    <button
      className="hover:bg-[rgba(22,79,73,0.9)] rounded-full bg-secondary_color py-[0.8rem] text-center"
      style={{ width }}
    >
      <Typography variant="span_normal_16" color=" text-white">
        {children}
      </Typography>
    </button>
  );
};

export default ButtonRounded;
