import React from "react";
import Typography from "../../ui/Typography";
import BreadCrumb from "../../ui/BreadCrumb";
import ProductDetails from "./components/ProductDetails";
import { productData } from "../../fake_api/productData";
import ProductAccordion from "./components/ProductAccordion";
const Product = () => {
  return (
    <>
      <BreadCrumb />
      <ProductDetails productData={productData} />
      <ProductAccordion />
    </>
  );
};

export default Product;
