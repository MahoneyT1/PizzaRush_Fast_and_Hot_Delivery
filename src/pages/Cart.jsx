import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from "axios";
import Loading from "./Loading";
import toast, { Toaster } from "react-hot-toast";

const Cart = ({
  productsInCart,
  handleDeleteItem,
  prodLength,
  onQuantityChange,
  fetchCart
}) => {
  // Calculate subtotal for products
  const calculateSubtotal = (cartItems) => {
    return cartItems.reduce((subtotal, item) => subtotal + item.total_price, 0);
  };

  const [pizzaDetails, setPizzaDetails] = useState({});

  
  const token = localStorage.getItem("access_token");
  


  // Fetch pizza details
  const fetchPizzaDetails = async () => {
    // setLoading(true);
    
    const token = localStorage.getItem("access_token");
    try {
      // Fetch details for all pizzas in the cart
      const details = await Promise.all(
        productsInCart.map((item) =>
          axios.get(`http://localhost:8000/pizzas/${item.pizza}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        )
      );

      // Store details using the pizza ID as a key
      const detailsMap = {};
      details.forEach((res, index) => {
        detailsMap[productsInCart[index].pizza] = res.data;
      });

      setPizzaDetails(detailsMap);
    } catch (error) {
      console.error("Error fetching pizza details:", error);
    }
  };

  useEffect(() => {
    if (productsInCart.length > 0) {
      fetchPizzaDetails();
    }
  }, [productsInCart]);
 

 

  // Animation variants
  const fadeUp = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: delay },
    },
  });

  const [loading, setLoading] = useState(false);

  const goToPay = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/create_payment/",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`, // Include token for authentication
          },
        }
      );
      setLoading(false);

      if (response.data.status === "success") {
        const approvalUrl = response.data.approval_url;
        window.location.href = approvalUrl; // Redirect user to PayPal
      } else {
        console.error("Payment creation failed:", response.data);
        toast.error("Payment creation failed. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error during payment creation:", error);
      alert("An error occurred. Please try again later.");
    }
  };


  // Function to increment quantity
  const handleQuantityChange = async (productId, quantityChange) => {
    
    try {
      const token = localStorage.getItem("access_token");
  
      // Find the current quantity of the product in the cart
      const currentProduct = productsInCart.find((product) => product.pizza === productId);
      if (!currentProduct) {
        toast.error("Product not found in cart.");
        return;
      }
  
      // Prevent decrementing quantity below 1
      const newQuantity = currentProduct.quantity + quantityChange;
      if (newQuantity < 1) {
        toast.error("Quantity cannot be less than 1.");
        return;
      }
  
      // Send API request to update quantity
      const response = await axios.post(
        "http://localhost:8000/cart/add/", // Replace with your API endpoint
        {
          pizza: productId,
          quantity: quantityChange,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Update local state after successful update
      const updatedProduct = response.data;
      onQuantityChange(productId, updatedProduct.quantity); // Notify parent if needed
      // toast.success("Quantity updated successfully!");
      fetchCart();
    } catch (error) {
      console.error("Error updating quantity:", error);
      toast.error("Failed to update quantity. Please try again.");
    } 
  };
  
  

  return (
    <>
      {loading && <Loading />}
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
              {productsInCart.map((product) => {

                const pizza = pizzaDetails[product.pizza];
                // console.log(pizza)
                return(  
                <tbody key={product.id}>
                  <tr>
                    <th scope="row" className="d-flex align-items-center gap-2">
                      <img
                        // src={product.image}
                        src={`http://localhost:8000${pizza?.image}` || "/placeholder.png"} alt={pizza?.name || "Pizza"}
                        width="10px"
                        className="prod-image"
                        loading="lazy"
                      />
                      <small>{pizza?.name}</small>
                    </th>
                    <td style={{ verticalAlign: "middle" }}>
                      ${product.total_price}
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      {/* <select
                      className="count"
                      value={product.quantity}
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
                    </select> */}
                      <div className="quan border d-flex align-items-center">
                        <button onClick={() => handleQuantityChange(product.pizza, -1)} className="bg-danger text-white ">-</button>
                        <p className="m-0 text-center c-quan">
                          {product.quantity}
                        </p>
                        <button onClick={() => handleQuantityChange(product.pizza, 1)} className="bg-dark text-white ">+</button>
                      </div>
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <button onClick={() => handleDeleteItem(product.pizza)} >
                        <RiDeleteBinLine size={14} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              )})}
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
                  <input
                    className="mt-0 border rounded"
                    placeholder="Coupon Code"
                    type="text"
                  />
                  <button className="main-btn w-100 rounded">
                    Apply Coupon
                  </button>
                </form>
              </div>
              <motion.div
                className="cart-card d-flex flex-column gap-3 border p-3"
                variants={fadeUp(0.8)} // Delay for the cart total card
              >
                <p className="fw-bold">Cart Total</p>
                <div className="d-flex align-items-center justify-content-between">
                  <small className="fw-bold">Subtotal</small>
                  <small>${calculateSubtotal(productsInCart)}</small>
                </div>
                <hr className="m-0" />
                <div className="d-flex align-items-center justify-content-between">
                  <small className="fw-bold">Shipping</small>
                  <small>Free</small>
                </div>
                <hr className="m-0" />
                <div className="d-flex align-items-center justify-content-between">
                  <small className="fw-bold">Total</small>
                  <small>${calculateSubtotal(productsInCart)}</small>
                </div>
                <Link
                  className="nav-link text-white button2 rounded text-center main-btn"
                  onClick={goToPay}
                >
                  Proceed to checkout
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      <Toaster />
    </>
  );
};

export default Cart;
