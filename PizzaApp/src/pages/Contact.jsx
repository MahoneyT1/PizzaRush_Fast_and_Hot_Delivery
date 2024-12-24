import React from 'react'
import { SlCallOut } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { VscSend } from "react-icons/vsc";

const Contact = () => {
  return (
    <div className='contact py-4'>
        <div className="container2">
            <div className="row m-0 my-4">
                <div className="col-md-4  contact-info p-4  d-flex flex-column gap-2">
                    <small className='fw-bold'><SlCallOut /> Call To Us</small>
                    <small>We are available 24/7, 7 days a week.</small>
                    <small>Phone: +234 8168 028 145</small>
                    <hr />

                    <small className='fw-bold'><GoMail /> Mail To Us</small>
                    <small>Fill out our form and we will contact you within 24 hours.</small>
                    <small>Emails: customer@exclusive.com</small>
                    <small>Emails: support@exclusive.com</small>

                </div>
                <div className="col-md-8 shadow-sm bg-white rounded">
                    <form action="" className='   p-3'>
                        <div className="row gap-3 gap-md-0">
                            <div className="col-md-4">
                                <input type="text" className='rounded' placeholder='Your Name'/>
                            </div>
                            <div className="col-md-4 p-md-0">
                                <input type="email" className='rounded' placeholder='Your Email' />
                            </div>
                            <div className="col-md-4">
                                <input type="phone" className='rounded' placeholder='Your Phone' />
                            </div>
                        </div>
                        <textarea className='mt-3 rounded' placeholder='Your Message' name="" id=""></textarea>
                        <button className='main-btn rounded mt-2'>Send Message <VscSend /></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact