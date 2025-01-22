// UserManagement.js
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  console.log(users)

  const allusers = async() => {
    
    const token = localStorage.getItem("access_token");

    try {
      const response = await axios.get(
        `http://localhost:8000/users/`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

     setUsers(response.data.data);
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data;

        console.log(errors);
        console.log(error.response);
      } else {
        console.error("Unknown error:", error);
      }
    }
  }

  useEffect(()=>{
    allusers();
  },[])

  return (
    <div className="dashboard py-4">
      <div className="container">
        <div className=" row m-0">
          <Sidebar />

          <div className="col col-md-9">
            <h2>User Management</h2>
            <table className="dash-table">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.is_superuser ? "Admin" : "Customer"}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
