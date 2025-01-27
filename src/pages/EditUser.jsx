import React, { useContext, useState } from 'react'
import { UserContext } from "../UserContext";
import Loading from "./Loading";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { MdErrorOutline } from "react-icons/md";

import * as Yup from "yup";

const EditUser = ({setIsEdit}) => {

     const { setUser, user } = useContext(UserContext);
     const [errorM, setErrorM] = useState(null)
     const [loading, setLoading] = useState(false)
     

     const initialValues = {
      last_name: user?.last_name,
      first_name: user?.first_name,
      email: user?.email,
      address: user?.address,
      phone_number: user?.phone_number,
      username: user?.username
    };


    const onSubmit = async(values, {resetForm}) => {
      if(validationSchema){
        const token = localStorage.getItem("access_token")
        setLoading(true)
        try {
          const response = await axios.put(`http://localhost:8000/users/${user.id}/`, values, {
            headers : {
              Authorization: `Bearer ${token}`
            }
          })
          // console.log("Response:", response.data);          
          // resetForm({ values: ""})
          setErrorM({})
          setLoading(false)
          setUser(response.data)
          return toast.success("Account Updated successfully.")
          
        } catch (error) {
          if (error.response && error.response.data) {
            const errors = error.response.data;
            // setErrorM(errors)
            // console.log(errors)
            setLoading(false)
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
            // console.error("Unknown error:", error);
            setLoading(false)
          }
        }

      }
    }


      const validationSchema = Yup.object().shape({
           username: Yup.string().required("Username cannot be blank"),
           last_name: Yup.string().required("Lastname cannot be blank"),
           first_name: Yup.string().required("Firstname cannot be blank"),
           address: Yup.string().required("Address cannot be blank"),
           phone_number: Yup.string().required("PhoneNumber is required"),
           email: Yup.string().email("Invalid email format").required("Email is required"),
           
         });


    const formData = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
      });
    
  


  


  return (
    <>
    {loading && <Loading />}
    
    <div className='edit-modal user'>
        <div className="modal-container">
            <div className="modal-contents">
            <form action="" className="p-4" 
              onSubmit={formData.handleSubmit}>
                <p className="fw-bold">Edit Your Profile</p>
                <div className="d-flex flex-column mt-3 flex-md-row gap-3">
                  <div className="w-100 input-field">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="first_name"
                      value={formData.values.first_name}
                      onBlur={formData.handleBlur}
                      onChange={formData.handleChange}
                      className={errorM ? "input-error rounded" : "rounded"}
                    />
                    {
                      formData.touched.first_name &&  formData.errors.first_name ? <MdErrorOutline size="20" className='icon' color="red" /> : null
                    }
                
                    {
                      formData.touched.first_name &&  formData.errors.first_name ? <small className='error_m'>{formData.errors.first_name}</small> : null
                    }
                  </div>
                  <div className="w-100 input-field">
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="last_name"
                      value={formData.values.last_name}
                      onBlur={formData.handleBlur}
                      onChange={formData.handleChange}
                      className={errorM ? "input-error rounded" : "rounded"}
                    />
                    {
                      formData.touched.last_name &&  formData.errors.last_name ? <MdErrorOutline size="20" className='icon' color="red" /> : null
                    }
                
                    {
                      formData.touched.last_name &&  formData.errors.last_name ? <small className='error_m'>{formData.errors.last_name}</small> : null
                    }
                  </div>
                </div>
                <div className="d-flex flex-column my-3 flex-md-row gap-3">
                  <div className="w-100 input-field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.values.email}
                      onBlur={formData.handleBlur}
                      onChange={formData.handleChange}
                      className={errorM ? "input-error rounded" : "rounded"}
                    />
                    {
                      formData.touched.emailusernamephone_number &&  formData.errors.emailusernamephone_number ? <MdErrorOutline size="20" className='icon' color="red" /> : null
                    }
                
                    {
                      formData.touched.emailusernamephone_number &&  formData.errors.emailusernamephone_number ? <small className='error_m'>{formData.errors.emailusernamephone_number}</small> : null
                    }
                  </div>

                  <div className="w-100 input-field">
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={formData.values.username}
                      onBlur={formData.handleBlur}
                      onChange={formData.handleChange}
                      className={errorM ? "input-error rounded" : "rounded"}
                    />
                    {
                      formData.touched.usernamephone_number &&  formData.errors.usernamephone_number ? <MdErrorOutline size="20" className='icon' color="red" /> : null
                    }
                
                    {
                      formData.touched.usernamephone_number &&  formData.errors.usernamephone_number ? <small className='error_m'>{formData.errors.usernamephone_number}</small> : null
                    }
                  </div>
                </div>

                <div className='input-field'>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone_number"
                        value={formData.values.phone_number}
                        onBlur={formData.handleBlur}
                        onChange={formData.handleChange}
                        className={errorM ? "input-error rounded" : "rounded"}
                  />
                  {
                      formData.touched.phone_number &&  formData.errors.phone_number ? <MdErrorOutline size="20" className='icon' color="red" /> : null
                    }
                
                    {
                      formData.touched.phone_number &&  formData.errors.phone_number ? <small className='error_m'>{formData.errors.phone_number}</small> : null
                    }
                </div>

                <div className='input-field'>
                  <input
                    type="text"
                    placeholder="Address"
                    name='address'
                    value={formData.values.address}
                    onBlur={formData.handleBlur}
                    onChange={formData.handleChange}
                    className={errorM ? "input-error mt-3 rounded" : " mt-3 rounded"}
                  />
                  {
                      formData.touched.address &&  formData.errors.address ? <MdErrorOutline size="20" className='icon' color="red" /> : null
                    }
                
                    {
                      formData.touched.address &&  formData.errors.address ? <small className='error_m'>{formData.errors.address}</small> : null
                    }
                </div>

                <small className="fw-bold">Password changes (feature Not avaialble now)</small>
                <input
                  type="password"
                  placeholder="Current Password"
                  className="mt-3 rounded"
                  disabled
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="mt-3 rounded"
                  disabled
                />
               
                <div className="buttons d-flex align-items-center mt-3 flex-right gap-3">
                  <button type='submit' className="main-btn rounded ">Save changes</button>
                  <button className="rounded main-btn " onClick={()=> setIsEdit(false)}>Cancel </button>
                </div>
              </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default EditUser