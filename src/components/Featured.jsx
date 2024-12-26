import React from "react";
import { motion } from "framer-motion";
import { GrDeliver } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LuShieldCheck } from "react-icons/lu";

const Featured = () => {
  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" }, // Initial state: blurred and invisible
    visible: {
      opacity: 1,
      filter: "blur(0)", // Final state: no blur and fully visible
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="container2">
      <div className="container">
        <div className="grid my-4 py-4">
          <motion.div
            className="d-flex gap-2 flex-column align-items-center text-center justify-content-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={blurVariants}
          >
            <GrDeliver size={27} />
            <small className="fw-bold text-center">FREE AND FAST DELIVERY</small>
            <small>Free delivery for all orders over NGN30K</small>
          </motion.div>

          <motion.div
            className="d-flex gap-2 flex-column align-items-center text-center justify-content-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={blurVariants}
          >
            <RiCustomerService2Fill size={27} />
            <small className="fw-bold text-center">24/7 CUSTOMER SERVICE</small>
            <small>Friendly 24/7 customer support</small>
          </motion.div>

          <motion.div
            className="d-flex gap-2 flex-column align-items-center text-center justify-content-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={blurVariants}
          >
            <LuShieldCheck size={27} />
            <small className="fw-bold text-center">MONEY BACK GUARANTEE</small>
            <small>We return money within 30 days</small>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
