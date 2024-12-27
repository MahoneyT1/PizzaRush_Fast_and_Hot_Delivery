import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = ({ productsInCart, onProductRemove, prodLength, onQuantityChange }) => {
  // Calculate subtotal for products
  const calculateSubtotal = (products) => {
    return products.reduce((total, product) => {
      return total + product.price * product.count;
    }, 0);
  };

  // Animation variants
  const fadeUp = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: delay },
    },
  });

  return (
    <div className="my-1 mb-4 cart">
      <div className="container">
        {/* Empty Cart Section */}
        {prodLength === 0 && (
          <motion.div
            className="empty-cart text-center w-100 py-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.5)} // Delay for empty cart message
          >
            <p>Your basket is currently empty</p>
            <Link to="/menu" className="nav-link cus-btn">
              Shop Now
            </Link>
          </motion.div>
        )}

        {/* Products in Cart Section */}
        {prodLength > 0 && (
          <motion.table
            className="table table-responsive"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.6)} // Delay for the table
          >
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
                  <th scope="row" className="d-flex align-items-center gap-2">
                    <img
                      src={product.image}
                      width="10px"
                      className="prod-image"
                      loading="lazy"
                      alt=""
                    />
                    <small>{product.name}</small>
                  </th>
                  <td style={{ verticalAlign: "middle" }}>
                    <TbCurrencyNaira size={20} />{" "}
                    {parseFloat(product.price * product.count)}
                  </td>
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
                  <td style={{ verticalAlign: "middle" }}>
                    <button onClick={() => onProductRemove(product)}>
                      <RiDeleteBinLine size={14} />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </motion.table>
        )}

        {/* Cart Details */}
        {prodLength > 0 && (
          <motion.div
            className="cart-others d-flex mt-3 justify-content-between flex-column flex-md-row gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.7)} // Delay for the cart details section
          >
            <div className="cart-coupon">
              <form
                action=""
                className="d-flex p-0 m-0 align-content-center gap-2 w-100"
              >
                <input className="mt-0 border rounded" placeholder="Coupon Code" type="text" />
                <button className="main-btn w-100 rounded">Apply Coupon</button>
              </form>
            </div>
            <motion.div
              className="cart-card d-flex flex-column gap-3 border p-3"
              variants={fadeUp(0.8)} // Delay for the cart total card
            >
              <p className="fw-bold">Cart Total</p>
              <div className="d-flex align-items-center justify-content-between">
                <small className="fw-bold">Subtotal</small>
                <small>
                  <TbCurrencyNaira size={20} /> {calculateSubtotal(productsInCart)}
                </small>
              </div>
              <hr className="m-0" />
              <div className="d-flex align-items-center justify-content-between">
                <small className="fw-bold">Shipping</small>
                <small>Free</small>
              </div>
              <hr className="m-0" />
              <div className="d-flex align-items-center justify-content-between">
                <small className="fw-bold">Total</small>
                <small>
                  <TbCurrencyNaira size={20} /> {calculateSubtotal(productsInCart)}
                </small>
              </div>
              <Link
                to="/checkout"
                className="nav-link text-white button2 rounded text-center main-btn"
              >
                Proceed to checkout
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Cart;
