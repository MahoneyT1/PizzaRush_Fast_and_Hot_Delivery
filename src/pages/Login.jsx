import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errorM, setErrorM] = useState({});

  const initialValues = {
    username : "",
    password : ""
  }

  const onSubmit = async(values, {resetForm}) => {
    if(validationSchema){
      setLoading(true)
      try {
        const response = await axios.post('http://localhost:8000/api/login/', values)
        console.log("Response:", response.data);          
        resetForm({ values: ""})
        setErrorM({})
        navigate('/')
        // return toast.success("Account Created successfully, You can now login.")
        console.log("all fine")
        
      } catch (error) {
        if (error.response && error.response.data) {
          const errors = error.response.data;
          setErrorM(errors)
          console.log(errors)
          // Loop through the errors and display each in a toast
          // for (const key in errors) {
          //   let message = errors[key][0]; 
          //   if (key === "email") {
          //     message = "Email already taken.";
          //   } else if (key === "username") {
          //     message = "Username already taken.";
          //   }
          //   toast.error(`${message}`);
          // }
        }

          
        else {
          console.error("Unknown error:", error);
        }
      }

    }
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formData = useFormik({
    initialValues,
    onSubmit,
    validationSchema
})




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
            <img src="../images/pi9.jpg" alt="Login" />
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
              method="POST"
              onSubmit={formData.handleSubmit}
              viewport={{ once: true }}
            >
              <div>
                <motion.h4
                  className="fw-bold"
                  variants={fadeUp(0.5)} // Delay for heading
                >
                  Login To Pizza_Rush
                </motion.h4>
                <motion.small
                  variants={fadeUp(0.6)} // Delay for small text
                >
                  Enter Your Details Below
                </motion.small>
              </div>

              {/* Input fields with sequential fade-up */}
              <div className="input-field">
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={ formData.values.email}
                  onBlur={formData.handleBlur}
                  onChange={formData.handleChange}
                  variants={fadeUp(0.7)} // Delay for Email field
                />
                    {
                      formData.touched.email &&  formData.errors.email ? <MdErrorOutline size="20" className='icon' color="red" /> : null
                    }
                
                    {
                      formData.touched.email &&  formData.errors.email ? <small className='error_m'>{formData.errors.email}</small> : null
                    }
              </div>


              <div className="input-field">
                <motion.input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={ formData.values.password}
                  onBlur={formData.handleBlur}
                  onChange={formData.handleChange}
                  variants={fadeUp(0.8)} // Delay for Password field
                />

                    {
                      formData.touched.password &&  formData.errors.password ? <MdErrorOutline size="20" className='icon' color="red" /> : null
                    }
                
                    {
                      formData.touched.password &&  formData.errors.password ? <small className='error_m'>{formData.errors.password}</small> : null
                    }
              </div>

              {/* Buttons with sequential fade-up */}
              <motion.button
                className="mt-2 main-btn button2 text-white"
                variants={fadeUp(0.9)} // Delay for Login button
                type="submit"
              >
                Login
              </motion.button>

              <motion.small variants={fadeUp(1.0)}>
                Not Created an Account yet? <Link to="/signup">Signup</Link>
              </motion.small>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
