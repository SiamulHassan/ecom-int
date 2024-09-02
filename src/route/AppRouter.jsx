import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Product from "../features/productPage/Product";
import RootLayout from "../layout/RootLayout";
import Shop from "../features/shopPage/Shop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Product />} />
      <Route path="/shop" element={<Shop />} />
    </Route>
  )
);

export default router;
