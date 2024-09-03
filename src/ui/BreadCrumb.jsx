import React from "react";
import Typography from "./Typography";
import { VscChevronRight } from "react-icons/vsc";
import Heart from "../assets/icons/Heart";
import ButtonPrimary from "./ButtonPrimary";

const BreadCrumb = () => {
  const handleClick = () => {
    console.log("you clicked");
  };
  return (
    <div className="px-[1rem] border-b border-border_DCD">
      <div className="container py-[3.5rem]">
        <div className="grid items-center grid-cols-2">
          <div className="flex items-center">
            <Typography variant="span_normal_16">Home</Typography>
            <Typography variant="span_normal_16">
              <VscChevronRight className="w-[1.8rem] sm:w-[2.3rem] h-[1.8rem] sm:h-[2.3rem]" />
            </Typography>
            <Typography variant="span_normal_16">
              Vitamin C Supplements
            </Typography>
          </div>
          <ButtonPrimary onclick={handleClick}>Add to Wishlist</ButtonPrimary>
          <div className="sm:hidden justify-self-end cursor-pointer">
            <Heart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
