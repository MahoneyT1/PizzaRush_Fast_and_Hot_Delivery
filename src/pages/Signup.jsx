import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="user-reg py-5">
      <div className="container2">
        <div className="row m-0 h-user">

            <div className="col-md-6 p-0 reg-image">
              <img src="../Images/sign.png" alt="" />
            </div>


              <div className="col-md-6 bg-white d-flex align-items-center justify-content-center p-4 p-sm-0">
                 
                <form action="" className="user-reg-form d-flex flex-column gap-2">
                    <div>
                      <h4 className="fw-bold">Create an Account</h4>
                      <small>Enter Your Details Below</small>
                    </div>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="mt-2 main-btn">Create Account</button>
                    <button className='main-btn bg-dark-subtle text-dark'>Sign up with Google</button>
                    <small>Already have an acount? <Link to="/login">Login</Link></small>
                </form> 
                 
               
              </div>
        </div>
      </div>
    </div>
  )
}

export default Signup