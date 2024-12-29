import React from "react";
import { motion } from "framer-motion";

const HeroM = () => {
  // Variants for the parent container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Delay between child animations
      },
    },
  };

  // Variants for individual text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0 }, // Slide into view
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

          <motion.div
            className="col-lg-6 d-flex justify-content-end"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 1.4 }}
          >
            <motion.img
              src="../../Images/pi2.jpg"
              className="img-fluid intro-image"
              alt="hero_image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroM;
