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
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import Orders from "./pages/Admin/Orders.jsx";
import UserManagement from "./pages/Admin/UserManagement.jsx";
import PizzaManagement from "./pages/Admin/PizzaManagement.jsx";
import AdminLayout from "./components/AdminLayout.jsx";
import Reports from "./pages/Admin/Reports.jsx";
import User from "./pages/User.jsx";

function App() {


  const [productsInCart, setProducts] =useState(
		JSON.parse(
			localStorage.getItem(
				"shopping-cart"
			)
		) || []
	);

  const prodLength = productsInCart.length

  // console.log(prodLength)
  // console.log(productsInCart)

  useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);


  const addProductToCart = (product) => {
    console.log("clicked");
    setProducts((prevProducts) => {
        const existingProduct = prevProducts.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            return prevProducts.map((item) =>
                item.id === product.id
                    ? { ...item, count: item.count + 1 }
                    : item
            );
        } else {
            return [...prevProducts, { ...product, count: 1 }];
        }
    });
};



  const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};


  const onQuantityChange = (productId,count) => {
		setProducts((oldState) => {
			const productsIndex =oldState.findIndex((item) =>item.id === productId);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};





  const main = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SharedLayout addProductToCart={addProductToCart} prodLength={prodLength} />}>
        <Route
          index
          element={
            <Home 
              addProductToCart={addProductToCart}
              prodLength={prodLength}
            />
          }
        />

        <Route path="signup" element={<Signup />} />
        
        <Route path="login" element={<Login />} />

        <Route path="*" element={<ErrorPage />} />

        <Route path="contact" element={<Contact />} />

        <Route path="profile" element={<User />} />


        {/* <Route path="admin" element={<AdminDashboard />} /> */}

        <Route path="about" element={<About />} />

        <Route path="menu" element={<MenuPage addProductToCart={addProductToCart} />} />

        <Route path="map" element={<MapLocator />} />

        <Route path="pizza" element={<YourPizza />} />

        <Route path="base" element={<Base />} />

        <Route path="toppings" element={<Toppings />} />

        <Route path="cart" element={<Cart    
              productsInCart={productsInCart}
              onProductRemove={onProductRemove}
              prodLength={prodLength}
              onQuantityChange={onQuantityChange}
        />} />


          
       




        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          {/* <Route path=":name" element={<ProductDetail />} /> */}

              
          <Route path="orders" element={<Orders />} />

          <Route path="users" element={<UserManagement />} />

          <Route path="shop" element={<PizzaManagement />} />

          <Route path="report" element={<Reports />} />
        </Route>

       


       
          
      </Route>
    )
  );

  return <RouterProvider router={main} />;
}

export default App;
