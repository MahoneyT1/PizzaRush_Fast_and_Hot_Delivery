import React from 'react'
import { LuPizza } from "react-icons/lu";
import { Link } from 'react-router-dom';
// import { AiOutlineShoppingCart } from "react-icons/ai"; 

const Footer = () => {
  return (
    <footer class="py-5 footer">
        <div class="container p-0">
            <div class="m-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 p-0">
                <div class="d-flex flex-column gap-md-4">
                    <a href="/"  className="d-flex col-md-auto gap-2 align-items-center  mb-2 p-0 mb-md-0 text-dark text-decoration-none" >
                        <LuPizza size={30} />
                        <b>Pizza_Rush</b>
                    </a>
                    <small>Fresh, hot, and loaded with flavor—your perfect pizza is just a click away. Order now and we’ll deliver it right to your door!</small>
                </div>
            

             

                <ul className=" nav d-flex justify-content-start  align-items-center m-0 flex-column gap-3">
                    <li>
                        <b className='nav-link text-dark fw-bolder'>Pages</b>
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

             

                <ul className=" nav d-flex justify-content-start  align-items-center m-0 flex-column gap-3">
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
                    <li>
                    <Link to="/about" className="nav-link">About Us</Link>
                    </li>
                </ul>
                
                


                <div class="d-flex flex-column gap-3 gap-md-4">
                    <div class="d-flex align-items-center align-items-md-end ">
                    <input type="text" class="form-control" placeholder="Updates in your inbox…" />
                    <button>Go</button>
                    </div>
                    <div class="d-flex gap-2 link-secondary">
                    <small>Copyright 2020. All Rights Reserved</small>
                    </div>
                </div>
            </div>
        </div>
        
        
    </footer>
  )
}

export default Footer