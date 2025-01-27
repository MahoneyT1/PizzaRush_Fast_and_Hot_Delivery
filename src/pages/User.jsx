import React, { useContext, useState } from "react";
import { SlCallOut } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { VscSend } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";
import Loading from "./Loading";
import EditUser from "./EditUser";

const User = () => {
  const { setUser, user } = useContext(UserContext);
  const [edit, setIsEdit] = useState(false)

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const logout = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/logout/");

      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("shopping-cart");
      localStorage.removeItem("pizzas");
      // console.log("user logged out");
      setUser(null);

      setLoading(false);
      navigate("/");
      window.location.reload();

      // alert('Login successful!');

      // resetForm({ values: ""})
      // return toast.success("Account Created successfully, You can now login.")
      // console.log("all fine")
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data;
        // console.log(errors);
      } else {
        console.error("Unknown error:", error);
      }
    }
  };

  return (
    <>
      {loading && <Loading />}
      {edit && <EditUser setIsEdit={setIsEdit} />}

      <div className="user py-4">
        <div className="container">
          <div className="row m-0 my-4">
            <div className="col-md-4  contact-info p-4  d-flex flex-column gap-2">
              <small className="fw-bold">Manage My Account</small>

              <ul className="d-flex flex-column gap-2">
                <li>
                  <Link className="nav-link text-muted" to="/shop">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link className="nav-link text-muted" to="/shop">
                    Address Book
                  </Link>
                </li>
                <li>
                  <Link className="nav-link text-muted" onClick={()=> setIsEdit(true)}>
                    Edit Profile
                  </Link>
                </li>
                <li>
                  <Link className="nav-link text-muted" onClick={logout}>
                    Logout
                  </Link>
                </li>
              </ul>

              <small className="fw-bold">My Orders</small>
              <ul className="d-flex flex-column gap-2">
                <li>
                  <Link className="nav-link text-muted" to="/shop">
                    My Returns
                  </Link>
                </li>
                <li>
                  <Link className="nav-link text-muted" to="/shop">
                    My Cancellations
                  </Link>
                </li>
              </ul>
              {/* <small className='fw-bold'>My WishList</small> */}
            </div>

            <div className="col-md-8 p-5 shadow-sm bg-white rounded">
                <div className="user-header d-flex align-items-center justify-content-center flex-column gap-1">
                  <div className="user-profile-photo">
                    <img src="../../Images/avatar-shanai.png" width={40} alt="" />
                  </div>
                  <p className="m-0">@{user.username}</p>
                  <p className="m-0">{user.is_superuser ? "Admin" : "Customer"}</p>
                </div>


                <div className="user-details mt-4">
                  <div className="each-detail d-flex align-items-center gap-4">
                    <p className="fw-bolder">First Name : </p>
                    <p>{user.first_name}</p>
                  </div>
                  
                  <div className="each-detail d-flex align-items-center gap-4">
                    <p className="fw-bolder">Last Name : </p>
                    <p>{user.first_name}</p>
                  </div>

                  <div className="each-detail d-flex align-items-center gap-4">
                    <p className="fw-bolder">Username : </p>
                    <p>{user.username}</p>
                  </div>

                  <div className="each-detail d-flex align-items-center gap-4">
                    <p className="fw-bolder">Email Address : </p>
                    <p>{user.email}</p>
                  </div>

                  <div className="each-detail d-flex align-items-center gap-4">
                    <p className="fw-bolder">Address : </p>
                    <p>{user.address}</p>
                  </div>

                  
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
