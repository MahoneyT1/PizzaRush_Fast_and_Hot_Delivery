import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { motion } from "framer-motion";
import { MdErrorOutline } from "react-icons/md";
// import Loading from "./Loading";
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

const Modal = () => {
  const [loading, setLoading] = useState(false);
  const [errorM, setErrorM] = useState({});

  const initialValues = {
    name: "",
    type: "",
    ingredients: "",
    price: "",
    image: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const onSubmit = async (values, { resetForm }) => {};

  const fadeUp = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: delay },
    },
  });

  const formData = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const type = ["Starters", "Classic", "Vegetarian", "Meat-Lover's"];

  return (
    <div>
      <div className="p-modal d-flex align-items-center justify-content-center bg">
        <div className="pmodal-content">
          <motion.form
            action=""
            className="user-reg-form d-flex flex-column gap-2"
            initial="hidden"
            onSubmit={formData.handleSubmit}
            method="POST"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <motion.h4 className="fw-bold text-center" variants={fadeUp(0.5)}>
                Add Pizza
              </motion.h4>
            </div>

            {/* Input fields with sequential fade-up */}
            <div className="input-field">
              <motion.input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.values.name}
                onBlur={formData.handleBlur}
                onChange={formData.handleChange}
                className={errorM.name ? "input-error" : ""}
                variants={fadeUp(0.7)}
              />
              {formData.touched.name && formData.errors.name ? (
                <MdErrorOutline size="20" className="icon" color="red" />
              ) : null}

              {formData.touched.name && formData.errors.name ? (
                <small className="error_m">{formData.errors.username}</small>
              ) : null}
            </div>

            <div className="input-field">
              <motion.input
                type="text"
                placeholder="Ingedients"
                name="ingedients"
                value={formData.values.ingedients}
                onChange={formData.handleChange}
                onBlur={formData.handleBlur}
                className={errorM.email ? "input-error" : ""}
                variants={fadeUp(0.8)}
              />
              {formData.touched.ingedients && formData.errors.ingedients ? (
                <MdErrorOutline size="20" className="icon" color="red" />
              ) : null}

              {formData.touched.ingedients && formData.errors.ingedients ? (
                <small className="error_m">{formData.errors.ingedients}</small>
              ) : null}
            </div>

            

            <div className="input-field">
              <select
                name="type"
                id="type"
                onChange={formData.handleChange}
                onBlur={formData.handleBlur}
              >
                <option value="">Pizza Type</option>
                {type.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            {formData.touched.password && formData.errors.password ? (
                <MdErrorOutline size="20" className="icon" color="red" />
            ) : null}

            {formData.touched.password && formData.errors.password ? (
                <small className="error_m">{formData.errors.password}</small>
            ) : null}
            </div>



            <div className="input-field">
              <motion.input
                type="number"
                placeholder="Price"
                name="price"
                onBlur={formData.handleBlur}
                value={formData.values.price}
                onChange={formData.handleChange}
                variants={fadeUp(0.9)}
              />
              {formData.touched.price && formData.errors.price ? (
                <MdErrorOutline size="20" className="icon" color="red" />
              ) : null}

              {formData.touched.price && formData.errors.price ? (
                <small className="error_m">{formData.errors.price}</small>
              ) : null}
            </div>


            <div className="input-field">
              <motion.input
                type="file"
                accept="image/*"
                // onBlur={formData.handleBlur}
                // value={formData.values.price}
                // onChange={formData.handleChange}
                variants={fadeUp(0.9)}
              />
              {formData.touched.price && formData.errors.price ? (
                <MdErrorOutline size="20" className="icon" color="red" />
              ) : null}

              {formData.touched.price && formData.errors.price ? (
                <small className="error_m">{formData.errors.price}</small>
              ) : null}
            </div>






            {/* Buttons with sequential fade-up */}
            <motion.button
              className="mt-2 main-btn button2 text-white"
              variants={fadeUp(1.0)}
              type="submit"
            >
              Create Pizza
            </motion.button>

            
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
