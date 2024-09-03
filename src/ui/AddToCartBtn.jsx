import React from "react";
import Typography from "./Typography";
import { FiMinus, FiPlus } from "react-icons/fi";
const AddToCartBtn = ({ children, width, onclick }) => {
  return (
    <button
      className="hover:bg-[rgba(22,79,73,0.9)] bg-secondary_color py-[0.8rem] grid grid-cols-3 items-center text-white px-[1.6rem]"
      style={{ width }}
      onClick={onclick}
    >
      <FiMinus size={20} />
      <Typography variant="span_normal_16" color=" text-white">
        {children}
      </Typography>
      <FiPlus size={20} className="justify-self-end" />
    </button>
  );
};

export default AddToCartBtn;
