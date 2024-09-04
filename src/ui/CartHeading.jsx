import React from "react";
import Typography from "./Typography";
import { IoClose } from "react-icons/io5";
const CartHeading = ({ setShowCart }) => {
  return (
    <div className="heading">
      <div className="cross grid grid-cols-2 items-center">
        <Typography variant="span_bold_24" color="text-primary_color">
          Shopping Cart
        </Typography>
        <IoClose
          size={25}
          className="justify-self-end cursor-pointer"
          onClick={() => setShowCart(false)}
        />
      </div>
      <Typography variant="p_normal_12">
        Add items worth{" "}
        <Typography variant="span_normal_12" color="text-secondary_color">
          Tk 30
        </Typography>{" "}
        for free shopping
      </Typography>
      {/* progress */}
      <div className="my-[0.8rem]">
        <div className="relative w-full bg-bg_D9D rounded-full h-3 overflow-hidden">
          <div
            className="bg-secondary_color h-full"
            style={{ width: `70%` }}
          ></div>
        </div>
      </div>
      <div className="added_items">
        <Typography variant="span_normal_16" color="text-secondary_color">
          Added items (4 Items)
        </Typography>
      </div>
    </div>
  );
};

export default CartHeading;
