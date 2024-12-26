import React from 'react'
import { Link } from 'react-router-dom'
import { TbCurrencyNaira } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";


const Cart = ({productsInCart, onProductRemove,prodLength, onQuantityChange}) => {



    const calculateSubtotal = (products) => {
        return products.reduce((total, product) => {
            return total + product.price * product.count;
        }, 0);
    };


  return (
    <div className='my-1 mb-4 cart'>
        <div className="container">

          

        
            {prodLength === 0 && (
                <div className="empty-cart text-center w-100 py-4">
                    <p>Your basket is currently empty</p>
                    <Link to="/menu" className='nav-link cus-btn'>Shop Now</Link>
                </div>
            )}

            {
                prodLength > 0 && (
                    <table className="table table-responsive">
                    <thead>
                        <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    {productsInCart.map((product) => (
                        <tbody key={product.id}>
                            <tr>
                            <th scope="row" className='d-flex align-items-center gap-2'>
                                <img src={product.image} width="10px" className='prod-image' loading='lazy' alt="" />
                                <small>{product.name}</small>
                            </th>
                            <td style={{ verticalAlign: "middle" }}><TbCurrencyNaira size={20} /> {parseFloat(product.price * product.count)} </td>
                            <td style={{ verticalAlign: "middle" }}>
                                <select
                                    className="count"
                                    value={product.count}
                                    onChange={(event) => {
                                    onQuantityChange(product.id, event.target.value);
                                    }}
                                >
                                    {[...Array(10).keys()].map((number) => {
                                    const num = number + 1;
                                    return (
                                        <option value={num} key={num}>
                                        {num}
                                        </option>
                                    );
                                    })}
                                </select>
                            </td>
                            <td style={{ verticalAlign: "middle" }}><button onClick={() => onProductRemove(product)}><RiDeleteBinLine size={14} /></button></td>
                            </tr>
                        </tbody>


                        ))}
                    </table>

                )
            }

            
        

            {
                prodLength > 0 && (
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
                                <small><TbCurrencyNaira size={20} />  {calculateSubtotal(productsInCart)}</small>
                            </div>
                            <hr className='m-0' />
                            <div className="d-flex align-items-center justify-content-between">
                                <small className='fw-bold'>Shipping</small>
                                <small>Free</small>
                            </div>
                            <hr className='m-0'/>
                            <div className="d-flex align-items-center justify-content-between">
                                <small className='fw-bold'>Total</small>
                                <small><TbCurrencyNaira  size={20}/>  {calculateSubtotal(productsInCart)}</small>
                            </div>
                            <Link to="/checkout" className="nav-link text-white button2 rounded text-center main-btn">Proceed to checkout</Link>
                        </div>
                    </div>

                )
            }

        </div>
    </div>
  )
}

export default Cart