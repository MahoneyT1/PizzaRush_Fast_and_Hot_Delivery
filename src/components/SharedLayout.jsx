import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../pages/Header'
import Footer from "./Footer";
const SharedLayout = ({productsInCart, prodLength, fetchPizzas, fetchCart}) => {
  return (
    <>
        <Header 
          productsInCart={productsInCart}
          prodLength={prodLength}
          fetchPizzas={fetchPizzas}
          fetchCart={fetchCart}
        />
        <Outlet />
        <Footer />
    </>
  );
};

export default SharedLayout;
