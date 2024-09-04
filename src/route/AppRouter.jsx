import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Product from "../features/productPage/Product";
import RootLayout from "../layout/RootLayout";
import Shop from "../features/shopPage/Shop";
import Prescription from "../features/PrescriptionPage/Prescription";
import BookTherapy from "../features/BookTherapyPage/BookTherapy";
import Blog from "../features/BlogPage/Blog";
import SignIn from "../features/SignInPage/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Product />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/prescription" element={<Prescription />} />
      <Route path="/book-therapy" element={<BookTherapy />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Route>
  )
);

export default router;
