import React from "react";
import Typography from "../../ui/Typography";
import BreadCrumb from "../../ui/BreadCrumb";
import ProductDetails from "./components/ProductDetails";
import { productData } from "../../fake_api/productData";
const Product = () => {
  return (
    <>
      <BreadCrumb />
      <ProductDetails productData={productData} />
      <div></div>
    </>
  );
};

export default Product;
