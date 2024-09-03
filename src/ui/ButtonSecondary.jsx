import React from "react";
import Typography from "./Typography";

const ButtonSecondary = ({ children, width }) => {
  return (
    <button
      className="hover:bg-[rgba(22,79,73,0.9)] bg-secondary_color py-[0.8rem] text-center"
      style={{ width }}
    >
      <Typography variant="span_normal_16" color=" text-white">
        {children}
      </Typography>
    </button>
  );
};

export default ButtonSecondary;
