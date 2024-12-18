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

        <Route path="signup" element={<Signup />} />
        
        <Route path="login" element={<Login />} />

        <Route path="*" element={<ErrorPage />} />

        <Route path="contact" element={<Contact />} />

        <Route path="about" element={<About />} />

       

       


       
          
      </Route>
    )
  );

  return <RouterProvider router={main} />;
}

export default App;
