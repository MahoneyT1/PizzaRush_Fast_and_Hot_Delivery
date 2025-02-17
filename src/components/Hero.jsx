// import React from 'react'
// import {motion} from "framer-motion"

// const Hero = () => {
  







//   return (
//     <section className="main">
//     <div className="container p-0">
//       <div className="d-flex flex-column-reverse align-items-center flex-lg-row hero m-0">
//         <div className="col-lg-6 d-flex text-center text-lg-start justify-content-center align-items-lg-start align-items-center flex-column gap-2 p-4 p-lg-0">
//           <h1 className="hero-header">The Tastiest & The Best <span className='colorr'>PIZZA</span> In Nigeria</h1>

//           <p className="text-muted para my-2">Fresh, hot, and loaded with flavor—your perfect pizza is just a click away. Order now and we’ll deliver it right to your door! </p>

//           <div className='actions d-flex align-items-center gap-2'>
//             <button className="d-inline-block text-white button">Order Now</button>
//             <button className="d-inline-block text-white button2">See Menu</button>
//           </div>
//         </div>
//         <div className="col-lg-6 d-flex justify-content-end">
          
//         <motion.img
//               src="../../Images/pi2.jpg"
//               className="img-fluid intro-image"
//               alt="hero_image"
//               animate={{ rotate: 360 }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 5,
//                 ease: "linear",
//               }}
//             />
//         </div>
//       </div>
//     </div>
//   </section>
//   )
// }

// export default Hero






// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const images = [
//     "../../Images/pi1.jpg",
//     "../../Images/pi2.jpg",
//     "../../Images/pi3.jpg",
//     "../../Images/pi4.jpg",
//     "../../Images/pi5.jpg",
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Change image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, [images.length]);

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   return (
//     <section className="main">
//       <div className="container p-0">
//         <div className="d-flex flex-column-reverse align-items-center flex-lg-row hero m-0">
//           {/* Text Section */}
//           <motion.div
//             className="col-lg-6 d-flex text-center text-lg-start justify-content-center align-items-lg-start align-items-center flex-column gap-2 p-4 p-lg-0"
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.h1
//               className="hero-header"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               The Tastiest & The Best <span className="colorr">PIZZA</span> In
//               Nigeria
//             </motion.h1>

//             <motion.p
//               className="text-muted para my-2"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               Fresh, hot, and loaded with flavor—your perfect pizza is just a
//               click away. Order now and we’ll deliver it right to your door!🍕
//             </motion.p>

//             <motion.div
//               className="actions d-flex align-items-center gap-2"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <button className="d-inline-block text-white button">
//                 Order Now
//               </button>
//               <button className="d-inline-block text-white button2">
//                 See Menu
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* Image Section */}
//           <motion.div
//             className="col-lg-6 d-flex justify-content-end"
//             initial="hidden"
//             animate="visible"
//             variants={imageVariants}
//             key={currentImageIndex} // Re-render on image change
//             transition={{ duration: 1 }}
//           >
//             <motion.img
//               src={images[currentImageIndex]}
//               className="img-fluid intro-image"
//               alt={`Pizza ${currentImageIndex + 1}`}
//               loading="lazy"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const HeroM = () => {
//   const images = [
//     "../../Images/pi11.jpg",
//     "../../Images/pi2.jpg",
//     "../../Images/pi11.jpg",
//     "../../Images/pi2.jpg",
//     "../../Images/pi11.jpg",
//   ];

//   // Define different animations for each image
//   const imageAnimations = [
//     {
//     hidden: { opacity: 0, x: 100 },
//     visible: { opacity: 1, x: 0 },
//     },
//     {
//     hidden: { opacity: 0, y: -100 },
//     visible: { opacity: 1, y: 0 },
//     },
//     {
//       hidden: { opacity: 0, scale: 0.5 },
//       visible: { opacity: 1, scale: 1 },
//     },
//     {
//       hidden: { opacity: 0, rotate: -45 },
//       visible: { opacity: 1, rotate: 0 },
//     },
//     {
//       hidden: { opacity: 0, y: 100 },
//       visible: { opacity: 1, y: 0 },
//     },
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Change image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 7000);

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, [images.length]);

//   return (
//     <section className="main">
//       <div className="container p-0">
//         <div className="d-flex flex-column-reverse align-items-center flex-lg-row hero m-0">
//           {/* Text Section */}
//           <motion.div
//             className="col-lg-6 d-flex text-center text-lg-start justify-content-center align-items-lg-start align-items-center flex-column gap-2 p-4 p-lg-0"
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.h1
//               className="hero-header"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               The Tastiest & The Best <span className="colorr">PIZZA</span> In
//               Nigeria
//             </motion.h1>

//             <motion.p
//               className="text-muted para my-2"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               Fresh, hot, and loaded with flavor—your perfect pizza is just a
//               click away. Order now and we’ll deliver it right to your door!🍕
//             </motion.p>

//             <motion.div
//               className="actions d-flex align-items-center gap-2"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <button className="d-inline-block text-white button">
//                 Order Now
//               </button>
//               <button className="d-inline-block text-white button2">
//                 See Menu
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* Image Section */}
//           <motion.div
//             className="col-lg-6 d-flex justify-content-end"
//             initial="hidden"
//             animate="visible"
//             variants={imageAnimations[currentImageIndex]} // Apply unique animation
//             key={currentImageIndex} // Re-render on image change
//             transition={{ duration: 1 }}
//           >
//             <motion.img
//               src={images[currentImageIndex]}
//               className="img-fluid intro-image"
//               alt={`Pizza ${currentImageIndex + 1}`}
//               loading="lazy"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroM;




import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroM = () => {
  const images = [
    "../../Images/pi2.jpg",
    "../../Images/pi3.jpg",
    "../../Images/pi4.jpg",
    "../../Images/pi11.jpg",
    "../../Images/p10.jpg",
  ];

  // Define different animations for each image
  const imageAnimations = [
    {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
        },
        {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
        },
        {
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 },
        },
        {
            hidden: { opacity: 0, rotate: -45 },
            visible: { opacity: 1, rotate: 0 },
        },
        {
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
        },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  // Variants for text animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between children animations
        delayChildren: 0.5, // Initial delay before animations start
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="main">
      <div className="container p-0">
        <div className="d-flex flex-column-reverse align-items-center flex-lg-row hero m-0">
          {/* Text Section */}
          <motion.div
            className="col-lg-6 d-flex text-center text-lg-start justify-content-center align-items-lg-start align-items-center flex-column gap-2 p-4 p-lg-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="hero-header"
              variants={textVariants}
              transition={{ duration: 1 }}
            >
              The Tastiest & The Best <span className="colorr">PIZZA</span> In
              Nigeria
            </motion.h1>

            <motion.p
              className="text-muted para my-2"
              variants={textVariants}
              transition={{ duration: 1 }}
            >
              Fresh, hot, and loaded with flavor—your perfect pizza is just a
              click away. Order now and we’ll deliver it right to your door!🍕
            </motion.p>

            <motion.div
              className="actions d-flex align-items-center gap-2"
              variants={textVariants}
              transition={{ duration: 1 }}
            >
              <button className="d-inline-block text-white button">
                Order Now
              </button>
              <button className="d-inline-block text-white button2">
                See Menu
              </button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="col-lg-6 d-flex justify-content-end"
            initial="hidden"
            animate="visible"
            variants={imageAnimations[currentImageIndex]} // Apply unique animation
            key={currentImageIndex} // Re-render on image change
            transition={{ duration: 1 }}
          >
            <motion.img
              src={images[currentImageIndex]}
              className="img-fluid intro-image"
              alt={`Pizza ${currentImageIndex + 1}`}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroM;
