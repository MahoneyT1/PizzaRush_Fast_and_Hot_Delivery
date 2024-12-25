import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SharedLayout from "./components/SharedLayout.jsx";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Signup from "./pages/Signup.jsx"
import MenuPage from "./pages/MenuPage.jsx";
import MapLocator from "./pages/Map.jsx";
import YourPizza from "./pages/YourPizza.jsx"
import Base from "./pages/Base.jsx";
import Toppings from "./pages/Toppings.jsx";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart.jsx";

function App() {


  const [productsInCart, setProducts] =useState(
		JSON.parse(
			localStorage.getItem(
				"shopping-cart"
			)
		) || []
	);

  console.log(productsInCart)

  useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);


  const addProductToCart = (product) => {
    console.log("clicked")
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};





  const main = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <Home 
              addProductToCart={addProductToCart}
            />
          }
        />

        <Route path="signup" element={<Signup />} />
        
        <Route path="login" element={<Login />} />

        <Route path="*" element={<ErrorPage />} />

        <Route path="contact" element={<Contact />} />

        <Route path="about" element={<About />} />

        <Route path="menu" element={<MenuPage />} />

        <Route path="map" element={<MapLocator />} />

        <Route path="pizza" element={<YourPizza />} />

        <Route path="base" element={<Base />} />

        <Route path="toppings" element={<Toppings />} />

        <Route path="cart" element={<Cart />} />


          
       

       


       
          
      </Route>
    )
  );

  return <RouterProvider router={main} />;
}

export default App;
