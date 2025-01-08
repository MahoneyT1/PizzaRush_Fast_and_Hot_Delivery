import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
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
import PriveteRoute from './PrivateRoutes'
import PrivateRoute from "./PrivateRoutes";

function App() {
    const [productsInCart, setProducts] = useState(
        JSON.parse(localStorage.getItem("shopping-cart")) || []
    );

    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
    }, [productsInCart]);

    const addProductToCart = (product) => {
        setProducts((prevProducts) => {
            const existingProduct = prevProducts.find((item) => item.id === product.id);

            if (existingProduct) {
                return prevProducts.map((item) =>
                    item.id === product.id ? { ...item, count: item.count + 1 } : item
                );
            } else {
                return [...prevProducts, { ...product, count: 1 }];
            }
        });
    };

    const onProductRemove = (product) => {
        setProducts((oldState) => 
            oldState.filter((item) => item.id !== product.id)
        );
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

    return (
        <UserProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<SharedLayout addProductToCart={addProductToCart} prodLength={productsInCart.length} />}>
                        <Route index element={<Home addProductToCart={addProductToCart} prodLength={productsInCart.length} />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="login" element={<Login />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="about" element={<About />} />
                        <Route path="menu" element={<MenuPage addProductToCart={addProductToCart} />} />
                        <Route path="map" element={<MapLocator />} />
                        <Route path="pizza" element={<YourPizza />} />
                        <Route path="base" element={<Base />} />
                        <Route path="toppings" element={<Toppings />} />
                        <Route path="cart" element={
                            <Cart
                                productsInCart={productsInCart}
                                onProductRemove={onProductRemove}
                                prodLength={productsInCart.length}
                                onQuantityChange={onQuantityChange}
                            />
                        } />

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
        </UserProvider>
    );
}

export default App;
