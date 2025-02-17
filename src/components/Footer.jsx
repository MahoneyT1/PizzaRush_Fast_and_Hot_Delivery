import React from 'react'
import { LuPizza } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-5 footer">
        <div className="container p-0">
            <div className="m-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 p-0">

                <div className=" d-flex text-center text-lg-start align-items-lg-start align-items-center flex-column gap-3  p-lg-0 mb-3 mb-md-0">
                    <a href="/"  className="d-flex col-md-auto gap-2 align-items-center  mb-2 p-0 mb-md-0 text-white text-decoration-none" >
                        <LuPizza size={30} />
                        <b>Pizza_Rush</b>
                    </a>
                    <small>Fresh, hot, and loaded with flavor—your perfect pizza is just a click away. Order now and we’ll deliver it right to your door!</small>
                    <div className="socials d-flex align-items-center gap-3">
                        <li><a href="link"><FaInstagram size={22} /></a></li>
                        <li><a href="link"><FaXTwitter size={22} /></a></li>
                        <li><a href="link"><FaFacebookF size={22} /></a></li>
                        <li><a href="link"><FaWhatsapp size={22} /></a></li>
                    </div>
                </div>
            

             

                <ul className="mt-5 mt-sm-0 nav d-flex justify-content-start  align-items-center m-0 flex-column gap-2 mb-3 mb-md-0">
                    <li>
                        <b className='nav-link pt-0 text-white fw-bolder'>Pages</b>
                    </li>
                    <li>
                    <Link to="menu" className="nav-link ">Menu</Link>
                    </li>
                    <li>
                    <Link to="specials" className="nav-link ">Specials</Link>
                    </li>
                    <li>
                    <Link to="/contact" className="nav-link ">Contact Us
                    </Link>
                    </li>
                    <li>
                    <Link to="/about" className="nav-link">About Us</Link>
                    </li>
                </ul>

             

                <ul className="mt-5 mt-sm-0 nav d-flex justify-content-start  align-items-center m-0 flex-column gap-2 mb-3 mb-md-0">
                    <li>
                        <b className='nav-link pt-0 text-white fw-bolder'>Quick Links</b>
                    </li>
                    <li>
                    <Link to="/" className="nav-link ">Home</Link>
                    </li>
                    <li>
                    <Link to="menu" className="nav-link ">Menu</Link>
                    </li>
                    <li>
                    <Link to="specials" className="nav-link ">Specials</Link>
                    </li>
                    <li>
                    <Link to="/contact" className="nav-link ">Contact Us
                    </Link>
                    </li>
                </ul>
                
                {/* <h5></h5> */}


                <div className="mt-5 mt-sm-0 d-flex text-center text-lg-start  align-items-lg-start align-items-center flex-column gap-2  p-lg-0 mb-3 mb-md-0">
                <li>
                        <b className='nav-link pt-0 text-white fw-bolder'>Subscribe To Our Newsletter</b>
                    </li>
                    <div className="d-flex align-items-center align-items-md-end ">
                    <input type="text" className="f" placeholder="Enter Your Email..." />
                    <button className='button2 text-white'>Subscribe</button>
                    </div>
                    <div className="d-flex gap-2 link-secondary">
                    <small>Copyright 2024. All Rights Reserved</small>
                    </div>
                    <div className="d-flex gap-2 link-secondary">
                    <small>ALx SE Portfolio Project.</small>
                    </div>
                </div>
            </div>
        </div>
        
        
    </footer>
  )
}

export default Footer