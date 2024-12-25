import React, { useState } from "react";
import Slider from "react-slick";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { IoIosArrowRoundBack } from "react-icons/io";

const Testimonials = ({ data, search, header, title, liked, setLiked }) => {
  const slider = React.useRef(null);

  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  //   const settings = {
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     nextArrow: false,
  //     prevArrow: false,
  //     arrows: false,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           initialSlide: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   };

  return (
    <div className="my-5 py-4">
      <div className="container">
        <div className="all-items mt-3">
          <div className="slider-container mt-4">
            <div>
              <Slider className="sliderr" ref={slider} {...settings}>
                <div class="box border text-center mt-4 mt-md-0 p-3">
                  <div class="profile">
                    <img src="../images/avatar-anisha.png" alt="" />
                  </div>
                  <h4>Anisha Li</h4>
                  <p class="text-muted  mt-2">
                    “Manage has supercharged our team’s workflow. The ability to
                    maintain visibility on larger milestones at all times keeps
                    everyone motivated.”
                  </p>
                </div>

                <div class="box border text-center mt-4 mt-md-0 p-3">
                  <div class="profile">
                    <img src="../images/avatar-ali.png" alt="" />
                  </div>
                  <h4>Ali Bravo</h4>
                  <p class="text-muted mt-2">
                    {" "}
                    “We have been able to cancel so many other subscriptions
                    since using Manage. There is no more cross-channel confusion
                    and everyone is much more focused.”
                  </p>
                </div>

                <div class="box border text-center mt-4 mt-md-0 p-3">
                  <div class="profile">
                    <img src="../images/avatar-richard.png" alt="" />
                  </div>
                  <h4>Richard Watts</h4>
                  <p class="text-muted mt-2">
                    “Manage allows us to provide structure and process. It keeps
                    us organized and focused. I can’t stop recommending them to
                    everyone I talk to!”
                  </p>
                </div>

                <div class="box border text-center mt-4 mt-md-0 p-3">
                  <div class="profile">
                    <img src="../images/avatar-shanai.png" alt="" />
                  </div>
                  <h4>Shanai Gough</h4>
                  <p class="text-muted mt-2">
                    “Their software allows us to track, manage and collaborate
                    on our projects from anywhere. It keeps the whole team
                    in-sync without being intrusive.”
                  </p>
                </div>
              </Slider>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
