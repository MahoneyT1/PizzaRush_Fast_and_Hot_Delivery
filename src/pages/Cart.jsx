import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='my-5 cart'>
        <div className="container2">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row" className='d-flex align-items-center gap-2'>
                    <img src="../../Images/f2.png" width="40px" loading='lazy' alt="" />
                    <small>Shirt Series 2</small>
                </th>
                <td>$200</td>
                <td><input type="number" defaultValue="1" name=""  id="" /></td>
                <td>$200</td>
                </tr>
                <tr>
                <th scope="row" className='d-flex align-items-center gap-2'>
                    <img src="../../Images/f3.png" width="40px" loading='lazy' alt="" />
                    <small>Shirt Series 2</small>
                </th>
                <td>$400</td>
                <td><input type="number" name="" defaultValue="1" id="" /></td>
                <td>$400</td>
                </tr>
                <tr>
                <th scope="row" className='d-flex align-items-center gap-2'>
                    <img src="../../Images/image4.png" width="40px" loading='lazy' alt="" />
                    <small>GMV Gamepad</small>
                </th>
                <td>$100</td>
                <td><input type="number" defaultValue="1" name=""  id="" /></td>
                <td>$100</td>
                </tr>
            </tbody>
            </table>



            <div className="cart-others d-flex mt-3 justify-content-between flex-column flex-md-row gap-3">
                <div className="cart-coupon">
                    <form action="" className='d-flex p-0 m-0 align-content-center gap-2 w-100'>
                        <input className='mt-0 border rounded' placeholder='Coupon Code' type="text" />
                        <button className="main-btn w-100 rounded">Apply Coupon</button>
                    </form>
                </div>
                <div className="cart-card d-flex flex-column gap-3 border p-3">
                    <p className="fw-bold">Cart Total</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <small className='fw-bold'>Subtotal</small>
                        <small>$1100</small>
                    </div>
                    <hr className='m-0' />
                    <div className="d-flex align-items-center justify-content-between">
                        <small className='fw-bold'>Shipping</small>
                        <small>Free</small>
                    </div>
                    <hr className='m-0'/>
                    <div className="d-flex align-items-center justify-content-between">
                        <small className='fw-bold'>Total</small>
                        <small>$1100</small>
                    </div>
                    <Link to="/checkout" className=" rounded text-center main-btn">Proceed to checkout</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart