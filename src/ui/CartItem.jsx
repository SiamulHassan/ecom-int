import React from "react";
import Typography from "./Typography";
import { FiMinus, FiPlus } from "react-icons/fi";
import smallImg from "../assets/images/product_small_1.png";
import Delete from "../assets/icons/Delete";
const CartItem = () => {
  const handleDecrease = () => {
    console.log("decrease");
  };
  const handleIncrease = () => {
    console.log("Increase");
  };
  return (
    <div className="cart_item grid grid-cols-2 items-center border-b border-border_DCD pb-4 mb-8 last:mb-0">
      <div className="grid grid-cols-2">
        <img
          src={smallImg}
          className="w-[6rem] h-[6rem] object-cover"
          alt="product image"
        />
        <div>
          <Typography variant="span_normal_12">
            Tropical Fruit Trio (Rambutan)
          </Typography>
          <button className="w-full border border-primary_color rounded-full grid grid-cols-3 items-center justify-items-center">
            <Typography onClick={handleDecrease}>
              <FiMinus />
            </Typography>
            <Typography variant="span_normal_14">2</Typography>
            <Typography onClick={handleIncrease}>
              <FiPlus />
            </Typography>
          </button>
        </div>
      </div>
      <div className="justify-self-end flex flex-col gap-5">
        <Typography variant="span_bold_16">৳ 144</Typography>
        <Typography className="ml-auto">
          <Delete />
        </Typography>
      </div>
    </div>
  );
};

export default CartItem;
