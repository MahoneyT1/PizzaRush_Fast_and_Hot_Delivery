import React from "react";
import { LuPizza } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai"; 


const Header = () => {
  return (
    <header className="header">
      <div className="container p-0">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-1 border-bottom">
          <a
            href="/"
            className="d-flex col-md-auto gap-2 align-items-center  mb-2 p-0 mb-md-0 text-dark text-decoration-none"
          >
            <LuPizza size={30} />
            <b>Pizza_Rush</b>
          </a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="nac" className="nav-link px-2 ">Home</a>
            </li>
            <li>
              <a href="nav" className="nav-link ">Menu</a>
            </li>
            <li>
              <a href="nav" className="nav-link ">Specials</a>
            </li>
            <li>
              <a href="nav" className="nav-link ">Contact Us
              </a>
            </li>
            <li>
              <a href="nav" className="nav-link">About Us</a>
            </li>
          </ul>

          <div className="col-md-auto d-flex justify-content-end align-items-center gap-3">
            <li><a href="nav"><AiOutlineShoppingCart size={24} /></a></li>
            <li>
              <a href="nav" className="nav-link">Order Online</a>
            </li>
            <li>
              <a href="nav" className="nav-link ">Sign Up</a>
            </li>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
