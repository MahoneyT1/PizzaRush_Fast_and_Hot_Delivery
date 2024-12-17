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

function App() {
  const main = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <Home />
          }
        />

        {/* <Route path="*" element={<ErrorPage />} /> */}

        {/* <Route
          path="cart"
          element={<Cart liked={liked} setLiked={setLiked} />}
        /> */}

        {/* <Route
          path="wishlist"
          element={
            <WishList />
          }
        /> */}

        {/* <Route path="product-detail" element={<ProductDetail />} />

        <Route path="checkout" element={<Checkout />} />

        <Route path="contact" element={<Contact />} />

        <Route path="user" element={<User />} />

        <Route path="about" element={<About />} /> */}

        {/* <Route
          path="shop"
          element={
            <Posts
              liked={liked}
              setLiked={setLiked}
              trending={trending}
              mCloth={mCloth}
              wCloth={wCloth}
            />
          }
        /> */}

        {/* <Route path="signup" element={<Signup />} />

        <Route path="login" element={<Login />} />

        <Route path="shop" element={<ShopLayout />}>
          <Route
            index
            element={
              <Posts
                liked={liked}
                setLiked={setLiked}
                trending={trending}
                mCloth={mCloth}
                wCloth={wCloth}
              />
            }
          /> */}
          {/* <Route
            path=":name"
            element={<ProductDetail liked={liked} setLiked={setLiked} />}
          />
        </Route> */}
      </Route>
    )
  );

  return <RouterProvider router={main} />;
}

export default App;
