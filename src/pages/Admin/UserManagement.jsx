// UserManagement.js
import React from "react";
import Sidebar from "./Sidebar";

const UserManagement = () => {
  const users = [
    { id: 1, name: "John Doe", role: "Customer" },
    { id: 2, name: "Sarah Smith", role: "Admin" },
    { id: 3, name: "Alice Johnson", role: "Customer" },
  ];

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
                    <td>{user.name}</td>
                    <td>{user.role}</td>
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
