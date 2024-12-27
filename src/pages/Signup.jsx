import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Signup = () => {
  // Animation variants
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeUp = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: delay },
    },
  });

  return (
    <div className="user-reg py-5">
      <div className="container">
        <motion.div
          className="row m-0 h-user"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Image Section */}
          <motion.div
            className="col-md-6 p-0 reg-image"
            variants={slideInLeft}
          >
            <img src="../Images/pi12.jpg" alt="Signup" />
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="col-md-6 bg-white d-flex align-items-center justify-content-center p-4 p-sm-0"
            variants={slideInRight}
          >
            <motion.form
              action=""
              className="user-reg-form d-flex flex-column gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div>
                <motion.h4
                  className="fw-bold"
                  variants={fadeUp(0.5)} // Delay for heading
                >
                  Create an Account
                </motion.h4>
                <motion.small
                  variants={fadeUp(0.6)} // Delay for small text
                >
                  Enter Your Details Below
                </motion.small>
              </div>

              {/* Input fields with sequential fade-up */}
              <motion.input
                type="text"
                placeholder="Username"
                variants={fadeUp(0.7)} // Delay for Username field
              />
              <motion.input
                type="email"
                placeholder="Email"
                variants={fadeUp(0.8)} // Delay for Email field
              />
              <motion.input
                type="password"
                placeholder="Password"
                variants={fadeUp(0.9)} // Delay for Password field
              />

              {/* Buttons with sequential fade-up */}
              <motion.button
                className="mt-2 main-btn button text-white"
                variants={fadeUp(1.0)} // Delay for Create Account button
              >
                Create Account
              </motion.button>

              <motion.button
                className="main-btn text-white button2"
                variants={fadeUp(1.1)} // Delay for Google Sign-up button
              >
                Sign up with Google
              </motion.button>

              <motion.small variants={fadeUp(1.2)}>
                Already have an account? <Link to="/login">Login</Link>
              </motion.small>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
