import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../pages/Header'
import Footer from "./Footer";
const SharedLayout = ({productsInCart, prodLength}) => {
  return (
    <>
        <Header 
          productsInCart={productsInCart}
          prodLength={prodLength}
        />
        <Outlet />
        <Footer />
    </>
  );
};

export default SharedLayout;
