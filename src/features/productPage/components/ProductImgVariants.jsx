import React, { useState } from "react";
import ImgVariantSlider from "./ImgVariantSlider";

const ProductImgVariants = ({ smallImgs, bigImgs }) => {
  const [bigImg, setBigImg] = useState(0);
  return (
    <div className="flex flex-col gap-[3.2rem]">
      <div className="img_view flex-grow">
        <img
          src={bigImgs[bigImg]}
          alt="product image"
          className="h-[50rem] w-[50rem] md:w-full md:h-full object-cover"
        />
      </div>

      <div className="w-full flex justify-center gap-4">
        <ImgVariantSlider smallImgs={smallImgs} setBigImg={setBigImg} />
      </div>
    </div>
  );
};

export default ProductImgVariants;
