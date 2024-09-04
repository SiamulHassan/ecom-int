import React from "react";
import Typography from "./Typography";
import { FiMinus, FiPlus } from "react-icons/fi";
import Delete from "../assets/icons/Delete";
import { useCartContext } from "../context/CartContext";
const CartItem = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useCartContext();
  console.log(cart);
  const handleDecrease = (id) => {
    decreaseQuantity(id);
  };
  const handleIncrease = (id) => {
    increaseQuantity(id);
  };
  return (
    <>
      {cart?.map((item, i) => (
        <div
          className="cart_item grid grid-cols-2 items-center border-b border-border_DCD pb-4 mb-8 last:mb-0"
          key={i}
        >
          <div className="grid grid-cols-2">
            <img
              src={item.image}
              className="w-[6rem] h-[6rem] object-cover"
              alt="product image"
            />
            <div>
              <Typography variant="span_normal_12">
                {item.productName}
              </Typography>
              <button className="w-full border border-primary_color rounded-full grid grid-cols-3 items-center justify-items-center">
                <Typography onClick={() => handleDecrease(item.id)}>
                  <FiMinus />
                </Typography>
                <Typography variant="span_normal_14">
                  {item.quantity}
                </Typography>
                <Typography onClick={() => handleIncrease(item.id)}>
                  <FiPlus />
                </Typography>
              </button>
            </div>
          </div>
          <div className="justify-self-end flex flex-col gap-5">
            <Typography variant="span_bold_16">
              ৳ {Number.parseInt(item.price) * item.quantity}
            </Typography>
            <Typography className="ml-auto">
              <Delete />
            </Typography>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
