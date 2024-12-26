import React, { useState } from "react";
import Slider from "react-slick";
import { LiaQuoteRightSolid } from "react-icons/lia";
import { LiaQuoteLeftSolid } from "react-icons/lia";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { IoIosArrowRoundBack } from "react-icons/io";


const testimonials = [
  {
    name: "Jane Doe",
    image: "https://via.placeholder.com/100",
    quote: "Absolutely delicious! The pizza arrived hot and fresh, and the delivery was super fast. Definitely my new go-to place for pizza.",
    role: "Customer"
  },
  {
    name: "John Smith",
    image: "https://via.placeholder.com/100",
    quote: "I’ve tried many pizza places, but this one tops them all! Great variety, fantastic taste, and the delivery was on time. Highly recommend!",
    role: "Customer"
  },
  {
    name: "Alice Johnson",
    image: "https://via.placeholder.com/100",
    quote: "The best pizza I’ve had in a long time. The crust is perfect, and the toppings are always fresh. 5 stars all around!",
    role: "Customer"
  },
  {
    name: "David Majeed",
    image: "https://via.placeholder.com/100",
    quote: "If you’re craving pizza, this is the place to order from! The quality is unmatched, and the customer service is top-notch.",
    role: "Customer"
  },
  {
    name: "Emily Racheal",
    image: "https://via.placeholder.com/100",
    quote: "Every time I order, the pizza is always fresh, flavorful, and hot. Plus, the delivery drivers are always polite and efficient.",
    role: "Customer"
  },
  {
    name: "Sarah Mendel",
    image: "https://via.placeholder.com/100",
    quote: "Fast, friendly service and mouth-watering pizzas! I love how easy it is to order, and the delivery is always prompt.",
    role: "Customer"
  },


];



const Testimonials = ({ data, search, header, title, liked, setLiked }) => {
  const slider = React.useRef(null);

  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
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
    <div className="my-4 testimonials py-4">
      <div className="container">
        <h3 className="text-center fw-bold">Our Testimonials</h3>
        <p className="lead text-center">What Our Customers Are Saying</p>
        <div className="all-items mt-3">
          <div className="slider-container mt-5">
            <div>
              <Slider className="sliderr" ref={slider} {...settings}>

                

                {
                  testimonials.map(items => (
                    <div key={items.role} className="box mt-4 mt-md-0 p-4">
                      <div className="profile d-flex align-items-center gap-2">
                        <img src="../images/avatar-anisha.png" alt="" />
                        
                        <div className="d-flex flex-column gap-1">
                            <h4 className="m-0 p-0">{items.name}</h4>
                            <p className="m-0">{items.role}</p>
                        </div>
                      </div>
                      <p className="text-muted  mt-3 mb-1"><LiaQuoteLeftSolid size={30} />{items.quote}<LiaQuoteRightSolid size={30} /></p>
                      <img src="../../Images/rating.png" className="rating-image" alt="" />
                    </div>
                    ))
                }


                
              </Slider>

              


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
