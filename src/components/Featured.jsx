import React from 'react'
import { GrDeliver } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LuShieldCheck } from "react-icons/lu";

const Featured = () => {
  return (
    <div>
        <div className="container2">
            
        <div className="container">
                <div className="grid my-4 py-4">
                    <div className="d-flex   gap-2 flex-column align-items-center text-center justify-content-center">
                        <GrDeliver size={27} />
                        <small className='fw-bold text-center'>FREE AND FAST DELIVERY</small>
                        <small>Free delivery for all orders over NGN30K</small>
                    </div>
                    <div className="d-flex text-center  gap-2 flex-column align-items-center justify-content-center">
                        <RiCustomerService2Fill size={27} />
                        <small className='fw-bold text-center'>24/7 CUSTOMER SERVICE</small>
                        <small>Friendly 24/7 customer support</small>
                    </div>
                    <div className="d-flex text-center gap-2 flex-column align-items-center justify-content-center">
                        <LuShieldCheck size={27} />
                        <small className='fw-bold text-center'>MONEY BACK GUARANTEE</small>
                        <small>We return money within 30 days</small>
                    </div>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Featured