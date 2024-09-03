import React from "react";
import Typography from "./Typography";
import { VscChevronRight } from "react-icons/vsc";
import Heart from "../assets/icons/Heart";

const BreadCrumb = () => {
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
          <button className="hidden sm:block justify-self-end">
            <Typography
              variant="span_normal_16"
              className="font-bold border-b-2 border-primary_color italic"
            >
              Add to Wishlist
            </Typography>
          </button>
          <div className="sm:hidden justify-self-end cursor-pointer">
            <Heart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
