import React from "react";
import { motion } from "framer-motion";
import { MdSell } from "react-icons/md";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { FaShopify, FaSackDollar, FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Headings from "../components/Headings";

const About = () => {
  const developers = [
    {
      id: "1",
      name: "Olawoyin Yusuf",
      image: "../../Images/avatar-ali.png",
      stack: "Frontend Development",
    },
    {
      id: "2",
      name: "Keneth Dev",
      image: "../../Images/avatar-anisha.png",
      stack: "Backend Development",
    },
    {
      id: "3",
      name: "Other Dev",
      image: "../../Images/avatar-shanai.png",
      stack: "Backend Development",
    },
  ];

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  const staggerContainer = {
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="py-4 about-section">
      <div className="container px-2 p-sm-0">
        {/* About Section */}
        <div className="gap-4 flex-column-reverse flex-md-row align-items-center d-flex m-0 mt-3">
          <motion.div
            className="col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Headings heading={"About Us"} />
            <p>
              Welcome to Pizza Rush, where every slice is made with love and served with a smile. We’re more than just
              a pizza place—we’re your neighborhood spot for fresh, delicious meals that bring people together. <br />
              <br />
              We take pride in using only the freshest ingredients to craft pizzas that burst with flavor. From timeless
              classics like Margherita to bold, gourmet creations, we’ve designed a menu that caters to every craving.
              <br />
              <br />
              At Pizza Rush, you’re not just a customer—you’re family. That’s why we’re committed to fast, friendly
              service and ensuring every order leaves you smiling. So come on in and join the rush—we can’t wait to
              serve you! 🍕
            </p>
          </motion.div>
          <motion.div
            className="col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <img src="../../Images/pizz.png" alt="Pizza" />
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <motion.div
          className="grid my-4 py-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[MdSell, HiMiniCurrencyDollar, FaShopify, FaSackDollar].map((Icon, index) => (
            <motion.div
              className="grid-item d-flex border p-3 gap-2 flex-column align-items-center justify-content-center"
              key={index}
              variants={fadeUp}
            >
              <Icon size={27} />
              <p className="fw-bold">{["10.5k", "33k", "45.5k", "25k"][index]}</p>
              <small>
                {[
                  "Sellers active on our site",
                  "Monthly Product Sale",
                  "Customer active in our site",
                  "Annual gross sale in our site",
                ][index]}
              </small>
            </motion.div>
          ))}
        </motion.div>

        {/* Developers Grid */}
        <motion.div
          className="grid container2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {developers.map((dev) => (
            <motion.div className="item" key={dev.id} variants={fadeUp}>
              <div className="coloured">
                <div className="member-image d-flex align-items-center justify-content-center">
                  <img src={dev.image} alt={dev.name} />
                </div>
              </div>
              <div className="item-details d-flex align-items-center justify-content-center flex-column gap-2 p-3 mt-5">
                <p className="fw-bold m-0">{dev.name}</p>
                <small>{dev.stack}</small>
                <div className="d-flex align-items-center gap-2">
                  <Link className="nav-link" to="/">
                    <FaXTwitter />
                  </Link>
                  <Link className="nav-link" to="/">
                    <FaLinkedin />
                  </Link>
                  <Link className="nav-link" to="/">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
