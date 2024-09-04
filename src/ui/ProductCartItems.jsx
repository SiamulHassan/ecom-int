import React from "react";
import Typography from "./Typography";
import CartHeading from "./CartHeading";
import CartItem from "./CartItem";
import ButtonRounded from "./ButtonRounded";

const ProductCartItems = ({ setShowCart }) => {
  return (
    <>
      <div className="p-[1.6rem] min-h-[85vh]">
        <CartHeading setShowCart={setShowCart} />
        <CartItem />
      </div>
      <div className="p-[1.6rem] bg-bg_F20">
        <div className="flex justify-between items-center mb-[0.8rem]">
          <Typography variant="span_bold_16" color="text-primary_color">
            Subtotal
          </Typography>
          <Typography variant="span_bold_16" color="text-primary_color">
            Tk. 641
          </Typography>
        </div>
        <ButtonRounded width="100%">Checkout</ButtonRounded>
      </div>
    </>
  );
};

export default ProductCartItems;
