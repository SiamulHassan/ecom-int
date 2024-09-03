import React from "react";
import Typography from "./Typography";
import { FiPlus } from "react-icons/fi";
import { productCardData } from "../fake_api/productCardData";
const ProductCart = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-y-[3rem] md:gap-y-0 gap-x-4 lg:gap-x-[4rem] xl:gap-x-[10rem]">
        {productCardData.map((cardData, i) => (
          <div
            className="w-full card cursor-pointer hover:shadow-md transition-all duration-150 hover:scale-[1.01] ease-in"
            key={i}
          >
            <div className="relative h-[38rem] lg:h-[43rem] xl:h-[50rem]">
              <img
                src={cardData.image}
                className="block w-full h-full object-cover"
                alt="product card image"
              />
              <div className="bg-secondary_color w-[2.8rem] h-[2.8rem] flex justify-center items-center text-white absolute right-5 top-5">
                <FiPlus size={20} />
              </div>
            </div>

            <div className="px-4 pb-4 h-[14rem]">
              <div className="flex justify-between items-center mt-[1.6rem] mb-[0.8rem]">
                <Typography variant="span_noraml_20" color="text-primary_color">
                  {cardData.title}
                </Typography>
                <Typography variant="span_bold_20" color="text-primary_color">
                  BDT {cardData.price}
                </Typography>
              </div>
              <Typography
                variant="p_normal_12"
                color="text-primary_color"
                className="leading-[2rem]"
              >
                {cardData.description}
              </Typography>
              <Typography
                variant="p_normal_12"
                color="text-primary_color"
                className="mt-[0.8rem]"
              >
                {cardData.medicineQuantity}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
