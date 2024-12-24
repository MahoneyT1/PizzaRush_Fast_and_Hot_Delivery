import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../pages/Header'
import Footer from "./Footer";
const SharedLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  );
};

export default SharedLayout;
