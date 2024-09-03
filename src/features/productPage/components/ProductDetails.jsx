import React from "react";
import ProductImgVariants from "./ProductImgVariants";
import ProductItemDetails from "./ProductItemDetails";

const ProductDetails = ({ productData }) => {
  return (
    <>
      <div className="container px-[1rem] grid grid-cols-1 lg:grid-cols-2 pt-5 pb-[3rem] gap-x-5 xl:gap-x-0 gap-y-[4.2rem] lg:gap-y-0">
        <div className="max-w-[60rem] w-full mx-auto">
          <ProductImgVariants
            smallImgs={productData[0].smallImgs}
            bigImgs={productData[0].bigImgs}
          />
        </div>
        <div className="">
          <ProductItemDetails productItemDetails={productData} />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
