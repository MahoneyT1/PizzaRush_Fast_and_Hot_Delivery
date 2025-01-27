import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout.jsx";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Signup from "./pages/Signup.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import MapLocator from "./pages/Map.jsx";
import YourPizza from "./pages/YourPizza.jsx";
import Base from "./pages/Base.jsx";
import Toppings from "./pages/Toppings.jsx";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import Orders from "./pages/Admin/Orders.jsx";
import UserManagement from "./pages/Admin/UserManagement.jsx";
import PizzaManagement from "./pages/Admin/PizzaManagement.jsx";
import AdminLayout from "./components/AdminLayout.jsx";
import Reports from "./pages/Admin/Reports.jsx";
import User from "./pages/User.jsx";
import { UserProvider } from "./UserContext";
import ScrollToTop from "./ScrollToTop.js";
import PriveteRoute from "./PrivateRoutes";
import PrivateRoute from "./PrivateRoutes";
import axios from "axios";
// import Loading from "./pages/Loading.jsx";
import { AnimatePresence } from "framer-motion";
import Modal from "./pages/Admin/Modal.jsx";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );

  const [pizzas, setPizzas] = useState([])
  // const token = localStorage.getItem("access_token");

  // console.log(pizzas)


  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  
  const fetchCart = async() => {
    
    const token = localStorage.getItem("access_token");
    try {
      const response = await axios.get(`http://localhost:8000/cart/`,{
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      // console.log(response.data)
      setProducts(response.data.items)
      
    } catch (error) {
      console.log(error.message)
      
    }
  }

  useEffect(()=>{
    fetchCart();
  },[])
  
  const addProductToCart = async (product) => {

    const token = localStorage.getItem("access_token");
    
   
      

    
    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevProducts.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevProducts, { ...product, count: 1 }];
      }
    });


    


    const { id, quantity } = product;

    try {
      const response = await axios.post(
        `http://localhost:8000/cart/add/`,{ pizza: id, quantity },{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data;

        console.log(errors);
        console.log(error.response);
      } else {
        console.error("Unknown error:", error);
      }
    }
  };

  
  
  // const onProductRemove = async (id) => {
  //   const token = localStorage.getItem("access_token"); 

  //   try {
  //     const response = await axios.post(
  //       `http://localhost:8000/cart/delete/${id}`,
  //       {
  //         headers: {
  //           "Authorization": `Bearer ${token}`, 
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(response.data); // Handle the response after deletion
  //     toast.success(response.data)
  //     setProducts((oldState) =>
  //       oldState.filter((item) => item.id !== id)
  //     );
  //   } catch (error) {
  //     console.error("There was an error deleting the item from the cart:", error);
  //     toast.error(error.message)
  //   }

  // };

  // Function to remove a product from the cart
  const onProductRemove = (productId) => {
    const updatedCart = productsInCart.filter((product) => product.pizza !== productId);
    setProducts(updatedCart); // Update the state
  };

  const handleDeleteItem = async (productId) => {
    // setLoading(true);
    try {
      const token = localStorage.getItem("access_token");
  
      // Send a POST request to delete the item from the cart
      await axios.post(
        "http://localhost:8000/cart/delete/", // Replace with your endpoint
        { pizza: productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Update the local state after deletion
      const updatedCart = productsInCart.filter((product) => product.pizza !== productId);
      onProductRemove(productId); // Notify parent to update the cart
      toast.success("Item removed from cart.");
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Failed to remove item. Please try again.");
    }
  };
  

  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };










  // Fetch pizzas with Authorization header
  const fetchPizzas = async () => {
    try {
      const response = await axios.get("http://localhost:8000/pizzas/");
      // Save data to localStorage
      localStorage.setItem("pizzas", JSON.stringify(response.data));
      setPizzas(response.data); // Update state with the fetched data
    } catch (error) {
      console.error("Error fetching pizzas:", error);
      toast.error("Failed to load pizzas. Please check your connection or login again.");
    }
  };

  useEffect(() => {
    const storedPizzas = localStorage.getItem("pizzas");
    if (storedPizzas) {
      setPizzas(JSON.parse(storedPizzas)); // Use stored data if it exists
    } else {
      fetchPizzas(); // Fetch data from API if no data in localStorage
    }
  }, []);



  return (
    <UserProvider>
      <Toaster />
      <AnimatePresence mode="wait">
        <Router>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <SharedLayout
                  addProductToCart={addProductToCart}
                  prodLength={productsInCart.length}
                  fetchPizzas={fetchPizzas}
                  fetchCart={fetchCart}
                />
              }
            >
              <Route
                index
                element={
                  <Home
                    addProductToCart={addProductToCart}
                    prodLength={productsInCart.length}
                  />
                }
              />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login setProducts={setProducts} fetchCart={fetchCart} />} />
              <Route path="load" element={<Modal />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
              <Route
                path="menu"
                element={<MenuPage addProductToCart={addProductToCart}  fetchPizzas={fetchPizzas} pizzas={pizzas}/>}
              />
              <Route path="map" element={<MapLocator />} />
              <Route path="pizza" element={<YourPizza />} />
              <Route path="base" element={<Base />} />
              <Route path="toppings" element={<Toppings />} />

              <Route element={<PriveteRoute />}>
                <Route
                  path="cart"
                  element={
                    <Cart
                      productsInCart={productsInCart}
                      handleDeleteItem={handleDeleteItem}
                      prodLength={productsInCart.length}
                      onQuantityChange={onQuantityChange}
                      fetchCart={fetchCart}
                    />
                  }
                />
              </Route>

              <Route element={<PriveteRoute />}>
                <Route path="profile" element={<User />} />
              </Route>

              <Route element={<PrivateRoute isAdminRoute={true} />}>
                <Route path="admin" element={<AdminLayout />}>
                  <Route index element={<AdminDashboard />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="users" element={<UserManagement />} />
                  <Route path="shop" element={<PizzaManagement />} />
                  <Route path="report" element={<Reports />} />
                </Route>
              </Route>

              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </Router>
      </AnimatePresence>
    </UserProvider>
  );
}

export default App;
