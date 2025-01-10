import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { MdErrorOutline } from "react-icons/md";
import Loading from "./Loading";

const Signup = () => {


    
    const [loading, setLoading] = useState(false);
    const [errorM, setErrorM] = useState({});

    


    const initialValues = {
      username : "",
      email : "",
      password : ""
  }

 



    const onSubmit = async(values, {resetForm}) => {
      if(validationSchema){
        setLoading(true)
        try {
          const response = await axios.post('http://localhost:8000/users/', values)
          console.log("Response:", response.data);          
          resetForm({ values: ""})
          setErrorM({})
          setLoading(false)
          return toast.success("Account Created successfully.")
          
        } catch (error) {
          if (error.response && error.response.data) {
            const errors = error.response.data;
            setErrorM(errors)
            setLoading(false)
            for (const key in errors) {
              let message = errors[key][0]; 
              if (key === "email") {
                message = "Email already taken.";
              } else if (key === "username") {
                message = "Username already taken.";
              }
              toast.error(`${message}`);
            }
          }
  
            
          else {
            console.error("Unknown error:", error);
            setLoading(false)
          }
        }

      }
    }


    const validationSchema = Yup.object().shape({
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    });


    const formData = useFormik({
      initialValues,
      onSubmit,
      validationSchema
  })

    


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
    <>
    
    {
      loading && <Loading />
    }

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
            <img src="../Images/pi12.jpg" loading="lazy" alt="Signup" />
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
              onSubmit={formData.handleSubmit}
              method="POST"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div>
                <motion.h4
                  className="fw-bold"
                  variants={fadeUp(0.5)} 
                >
                  Create an Account
                </motion.h4>
                <motion.small
                  variants={fadeUp(0.6)} 
                >
                  Enter Your Details Below
                </motion.small>
              </div>

              

              {/* Input fields with sequential fade-up */}
              <div className="input-field">
                <motion.input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={ formData.values.username}
                  onBlur={formData.handleBlur}
                  onChange={formData.handleChange}
                  className={errorM.username ? "input-error" : ""}
                  variants={fadeUp(0.7)}
                />
                    {
                      formData.touched.username &&  formData.errors.username ? <MdErrorOutline size="20" className='icon' color="red" /> : null
                    }
                
                    {
                      formData.touched.username &&  formData.errors.username ? <small className='error_m'>{formData.errors.username}</small> : null
                    }

                


              </div>

                
              <div className="input-field">
                <motion.input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={ formData.values.email}
                  onChange={formData.handleChange}
                  onBlur={formData.handleBlur}
                  className={errorM.email ? "input-error" : ""}
                  variants={fadeUp(0.8)} 
                />
                  {
                    formData.touched.email &&  formData.errors.email? <MdErrorOutline size="20" className='icon' color="red" /> : null
                  }
                
                  {
                    formData.touched.email &&  formData.errors.email ? <small className='error_m'>{formData.errors.email}</small> : null
                  }
              </div>

              <div className="input-field">
                <motion.input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onBlur={formData.handleBlur}
                  value={ formData.values.password}
                  onChange={formData.handleChange}
                  variants={fadeUp(0.9)} 
                />
                  {
                    formData.touched.password &&  formData.errors.password? <MdErrorOutline size="20" className='icon' color="red" /> : null
                  }
                
                  {
                    formData.touched.password &&  formData.errors.password ? <small className='error_m'>{formData.errors.password}</small> : null
                  }
              </div>

              {/* Buttons with sequential fade-up */}
              <motion.button
                className="mt-2 main-btn button text-white"
                variants={fadeUp(1.0)} 
                type="submit"
              >
                Create Account
              </motion.button>

              <motion.button
                className="main-btn text-white button2"
                variants={fadeUp(1.1)}
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
      <Toaster />
    </div>
    </>
  );
};

export default Signup;
