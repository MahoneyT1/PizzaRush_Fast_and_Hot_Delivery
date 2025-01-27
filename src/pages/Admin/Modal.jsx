import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { motion } from "framer-motion";
import { MdErrorOutline } from "react-icons/md";
// import Loading from "./Loading";
// import { Link } from "react-router-dom";
// import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../Loading";

const Modal = ({setModal, setIsEditing, isEditing}) => {
  const [loading, setLoading] = useState(false);
  const [errorM, setErrorM] = useState({});

  const initialValues = {
    name: "",
    description_type: "",
    ingredients: "",
    price: "",
    image: null,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    price: Yup.string().required("Price is required"),
    ingredients: Yup.string().required("Ingredients is required"),
    description_type: Yup.string().required("Type is required"),
    image: Yup.mixed()
  .required("Image is required")
  .test("fileSize", "File size is too large", (value) =>
    value ? value.size <= 2 * 1024 * 1024 : true // Max 2MB
  )
  .test("fileType", "Unsupported file format", (value) =>
    value
      ? ["image/jpeg", "image/png", "image/gif"].includes(value.type)
      : true
  ),
   
  });

  const onSubmit = async(values, {resetForm}) => {
    if(validationSchema){
      setLoading(true)
      const token = localStorage.getItem('access_token')
      try {
        const response = await axios.post('http://localhost:8000/pizzas/', values, {
          headers : {
            Authorization : `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          
          }
        })
        // console.log("Response:", response.data);          
        resetForm({ values: ""})
        setErrorM({})
        setLoading(false)
        setModal(false)
        return toast.success("Pizza Added successfully.")
        
      } catch (error) {
        if (error.response && error.response.data) {
          const errors = error.response.data;
          // console.log(errors);
          setErrorM(errors)
          setLoading(false)
         
        }

          
        else {
          console.error("Unknown error:", error);
          setLoading(false)
        }
      }

    }
  }


  
  const formData = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  



  const fadeUp = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: delay },
    },
  });
  const type = ["Starters", "Classic", "Vegetarian", "Meat-Lover's"];

  return (
    <>
    
    {
      loading && <Loading />
    }
    
    <div>
      <motion.div initial="hidden" variants={fadeUp} className="p-modal d-flex align-items-center justify-content-center bg">
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
                {
                  isEditing ? "Edit Pizza" : "Add Pizza"
                }
                
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
                <small className="error_m">{formData.errors.name}</small>
              ) : null}
            </div>

            <div className="input-field">
              <motion.input
                type="text"
                placeholder="Ingredients"
                name="ingredients"
                value={formData.values.ingredients}
                onChange={formData.handleChange}
                onBlur={formData.handleBlur}
                className={errorM.email ? "input-error" : ""}
                variants={fadeUp(0.8)}
              />
              {formData.touched.ingredients && formData.errors.ingredients ? (
                <MdErrorOutline size="20" className="icon" color="red" />
              ) : null}

              {formData.touched.ingredients && formData.errors.ingredients ? (
                <small className="error_m">{formData.errors.ingredients}</small>
              ) : null}
            </div>

            

            <div className="input-field">
              <select
                name="description_type"
                id="type"
                onChange={formData.handleChange}
                onBlur={formData.handleBlur}
                
                variants={fadeUp(0.9)}
              >
                <option value="">Pizza Type</option>
                {type.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            {formData.touched.type && formData.errors.type ? (
                <MdErrorOutline size="20" className="icon" color="red" />
            ) : null}

            {formData.touched.type && formData.errors.type ? (
                <small className="error_m">{formData.errors.type}</small>
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
                onChange={(event) => {
                  formData.setFieldValue("image", event.currentTarget.files[0]);
                }}
                variants={fadeUp(0.9)}
                name="image"
              />
              {formData.touched.image && formData.errors.image ? (
                <MdErrorOutline size="20" className="icon" color="red" />
              ) : null}

              {formData.touched.image && formData.errors.image ? (
                <small className="error_m">{formData.errors.image}</small>
              ) : null}
            </div>






            {/* Buttons with sequential fade-up */}
            <motion.button
              className="mt-2 main-btn button2 text-white"
              variants={fadeUp(1.0)}
              type="submit"
            >{
              isEditing ? "Edit Pizza" : "Create Pizza"
            }
              
            </motion.button>
            <motion.button
              className="mt-2 main-btn button1 bg-dark text-white"
              variants={fadeUp(1.1)}
              onClick={()=>{setModal(false)}}
            >Cancel              
            </motion.button>

            
          </motion.form>
        </div>
      </motion.div>
    </div>



    <Toaster />
    </>
  );
};

export default Modal;
