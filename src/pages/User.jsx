import React from 'react'
import { SlCallOut } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { VscSend } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className='user py-4'>
        <div className="container">
            <div className="row m-0 my-4">
                <div className="col-md-4  contact-info p-4  d-flex flex-column gap-2">
                    <small className='fw-bold'>Manage My Account</small>
                    
                    <ul className='d-flex flex-column gap-2'>
                        <li><Link className='nav-link text-muted' to="/shop">My Profile</Link></li>
                        <li><Link className='nav-link text-muted' to="/shop">Address Book</Link></li>
                        <li><Link className='nav-link text-muted' to="/shop">My Payment Options</Link></li>
                    </ul>

                    <small className='fw-bold'>My Orders</small>
                    <ul className='d-flex flex-column gap-2'>
                        <li><Link className='nav-link text-muted' to="/shop">My Returns</Link></li>
                        <li><Link className='nav-link text-muted' to="/shop">My Cancellations</Link></li>
                    </ul>
                    {/* <small className='fw-bold'>My WishList</small> */}

                </div>

                









                <div className="col-md-8 shadow-sm bg-white rounded">
                    <form action="" className='p-4'>
                        <p className="fw-bold">Edit Your Profile</p>
                        <div className="d-flex flex-column mt-3 flex-md-row gap-3">
                            <div className="w-100">
                                <input type="text" className='rounded' placeholder='First Name'/>
                            </div>
                            <div className="w-100">
                                <input type="text" className='rounded' placeholder='Last Name' />
                            </div>
                        </div>
                        <div className="d-flex flex-column my-3 flex-md-row gap-3">
                            <div className="w-100">
                                <input type="email" className='rounded' placeholder='Email'/>
                            </div>
                            <div className="w-100">
                                <input type="text" className='rounded' placeholder='Your Address' />
                            </div>
                        </div>
                        <small className="fw-bold">Password changes</small>
                        <input type="password" placeholder='Current Password' className='mt-3 rounded' />
                        <input type="password" placeholder='New Password' className='mt-3 rounded' />
                        <input type="password" placeholder='Confirm New Password' className='mt-3 rounded' />
                        <div className="buttons d-flex align-items-center mt-3 flex-right gap-3">
                            <button className='main-btn rounded '>Save changes</button>
                            <button className='rounded main-btn '>Cancel </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default User