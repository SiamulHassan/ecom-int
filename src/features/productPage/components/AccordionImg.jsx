import React from "react";
import accImg from "../../../assets/images/accordion_img.png";
const AccordionImg = () => {
  return (
    <picture className="mx-auto order-first lg:order-last">
      <img
        src={accImg}
        className="max-w-[50rem] w-full lg:h-auto object-cover"
        alt="accordion image"
      />
    </picture>
  );
};

export default AccordionImg;
