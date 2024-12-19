import React from "react";
import Slider from "react-slick";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { IoIosArrowRoundBack } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Data from "../data";
import { FaHeart } from "react-icons/fa";
// import { MdTrain } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
// import ShopHeader from "./ShopHeader";

const ShopComponent = () => {



  const slider = React.useRef(null);

 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-5">

      <h4 className="text-center fw-bold mb-3">Our Menu</h4>
      <div className="container">
        {/* <ShopHeader header={header} title={title} slider={slider} /> */}

        <div className=''>
            <div className="cat">
              <small className="ms-4 fw-bold cat-label">header</small>
            </div>
            <div className="cat-header mt-3 d-flex align-items-center justify-content-between">
              <h3 className="fw-bold ">title</h3>
              <div className="d-flex align-items-center gap-2">
                <button 
                    className="" 
                    onClick={() => slider?.current?.slickPrev()}
                ><IoIosArrowRoundBack size={20} /></button>
                <button 
                    onClick={() => slider?.current?.slickNext()}
                    className=""
                ><IoIosArrowRoundForward size={20} /></button>
              </div>
            </div>
        </div>



        <div className="all-items mt-3">
          <div className="slider-container">
            <div>
              <Slider ref={slider} {...settings}>

              {Array.isArray(Data) ? (
                Data.map(item => (
                  <div key={item.id} className="item ">
                      {/* =======PRODUCT IMAGE STARTS HERE======= */}
                      <div className="item-image rounded d-flex align-items-center justify-content-center">
                        <img src={item.image} loading="lazy" alt="" />
                        
                      </div>

                      {/* =======PRODUCT CONTENT STARTS HERE======= */}
                      <div className="item-details pt-2">
                        <Link
                          to={`/shop/${item.name}`}
                          className="fw-bolder nav-link"
                        >
                          {item.name}
                        </Link>
                        <div className="price d-flex align-items-center my-2 gap-3">
                          <small>
                            {item.description}
                          </small>
                        </div>
                          {/* <form action="" className="my-2">
                                <select name="" id="">
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="XLarge">XLarge</option>
                                </select>
                            </form> */}
                            <button className="button2 p-1 px-3 text-white">Add To cart NGN 14,000.00</button>
                    
                      </div>
                    </div>
                ))
              ) : (
                <div  className="item">
                  <p>data is not an</p>
                </div>
              )}



               
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopComponent;
