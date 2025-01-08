import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./UserContext";

// Private Route component to protect certain routes
const PrivateRoute = ({ isAdminRoute = false }) => {

    const {user} = useContext(UserContext)

  // Check if the user is logged in (has an access token)
  const token = localStorage.getItem("access_token");
  
  // Check if the user is a superuser (only for admin routes)
//   const isSuperUser = localStorage.getItem("is_superuser") === "true";
  const isSuperUser = user.is_superuser;
  
  // If no token and trying to access any route, redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If an admin route and the user is not a superuser, redirect to home or other page
  if (isAdminRoute && !isSuperUser) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;