import React, { useContext, useState } from "react";
import { LuPizza } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { Link, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { UserContext } from "../UserContext";
import axios from "axios";
import Loading from "./Loading";




const Header = ({productsInCart,prodLength, fetchPizzas, fetchCart}) => {

  const {user, setUser} = useContext(UserContext)
  const [loading, setLoading] = useState(false)

  

  const navigate = useNavigate()

  const logout = async() => {
    setLoading(true)
    try {

        const response = await axios.post('http://localhost:8000/api/logout/')
        
        
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        
        localStorage.removeItem("shopping-cart");
        localStorage.removeItem("pizzas");
        // console.log("user logged out")
        setUser(null)
        navigate('/')
        setLoading(false)
        window.location.reload();
        
        
        // alert('Login successful!');

        
        
        // resetForm({ values: ""})
        // return toast.success("Account Created successfully, You can now login.")
        // console.log("all fine")
        
      } catch (error) {
        if (error.response && error.response.data) {
          const errors = error.response.data;
          // console.log(errors)
          setLoading(false)
          
        }
        
        
        else {
          setLoading(false)
          console.error("Unknown error:", error);
        }
      }

}

  // console.log(user)

  return (
    <>

    {
      loading && <Loading />
    }
    

    <header className="header">
      <div className="container p-0">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-1 border-bottom">
          <a
            href="/"
            className="d-flex col-md-auto gap-2 align-items-center  mb-2 p-0 mb-md-0 text-dark text-decoration-none"
          >
            <LuPizza size={30} />
            <b>Pizza_Rush</b>
          </a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="menu" onClick={()=> fetchPizzas()} className="nav-link ">Menu</Link>
            </li>
            <li>
              <Link to="/pizza" className="nav-link ">Specials</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link ">Contact Us
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link d-none d-sm-flex">About Us</Link>
            </li>
          </ul>

          <div className="col-md-auto d-flex justify-content-end align-items-center gap-3">
            { 
              user && user.is_superuser && <li>
              <Link to="/admin" className="nav-link button2 text-white">Admin</Link>
              </li>
            }



            <li className="cart-container">
              <Link onClick={()=> fetchCart()} to="/cart" className="nav-link  "><AiOutlineShoppingCart size={24} /></Link> 
              { prodLength > 0 && (<span className="product-count">{prodLength} </span>	)}
            </li>

            


            {
              user ? <li className="d-flex align-items-center gap-2">
              <div className="profile-image">
                <img src="../../Images/avatar-shanai.png" alt="" />
              </div>
              <div className="profile-info d-flex flex-column">
                <Link className="nav-link" to='profile'>{user.username}</Link>
                <Link  onClick={logout}>Logout</Link>
              </div>
            </li> : <li>
              <Link to="/signup" className="nav-link button2 text-white">Sign Up</Link>
            </li>
            }
            
            
           
            
          </div>
        </div>
      </div>
    </header>

    </>
  );
};

export default Header;



