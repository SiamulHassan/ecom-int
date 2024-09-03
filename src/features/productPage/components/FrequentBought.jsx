import React from "react";
import ProductCart from "../../../ui/ProductCart";
import FrequentTitle from "./FrequentTitle";

const FrequentBought = () => {
  return (
    <div className="px-[1rem] border-t border-b border-border_DCD py-[4rem] mb-[4.5rem]">
      <FrequentTitle />
      <ProductCart />
    </div>
  );
};

export default FrequentBought;
