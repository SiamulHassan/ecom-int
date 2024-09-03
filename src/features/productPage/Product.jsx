import React from "react";
import BreadCrumb from "../../ui/BreadCrumb";
import ProductDetails from "./components/ProductDetails";
import { productData } from "../../fake_api/productData";
import ProductAccordion from "./components/ProductAccordion";
import Feature from "./components/Feature";
import FrequentBought from "./components/FrequentBought";
import ReviewSection from "./components/ReviewSection";
import Consultation from "./components/Consultation";
const Product = () => {
  return (
    <main>
      <BreadCrumb />
      <ProductDetails productData={productData} />
      <ProductAccordion />
      <Feature />
      <FrequentBought />
      <ReviewSection />
      <Consultation />
    </main>
  );
};

export default Product;
