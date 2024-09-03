import React, { useState } from "react";
import ImgVariantSlider from "./ImgVariantSlider";

const ProductImgVariants = ({ smallImgs, bigImgs }) => {
  const [bigImg, setBigImg] = useState(0);
  return (
    <div className="flex flex-col gap-[3.2rem] items-center">
      <div className="img_view flex-grow">
        <img
          src={bigImgs[bigImg]}
          alt="product image"
          className="h-[35rem] w-[40rem] sm:h-[50rem] sm:w-[50rem] md:w-[60rem] md:h-[60rem] object-cover"
        />
      </div>

      <div className="w-full flex justify-center gap-4">
        <ImgVariantSlider smallImgs={smallImgs} setBigImg={setBigImg} />
      </div>
    </div>
  );
};

export default ProductImgVariants;
