import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { UserContext } from "../../UserContext";

const AdminDashboard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div>
      {user ? (
        <div className="dashboard py-3">
          <div className="container p-0">
            <div className=" row m-0">
              <Sidebar />

              <main className="main-content col-md-9">
                <header className="d-flex align-items-center justify-content-between p-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="search-bar"
                  />
                  <div className="profile">Admin</div>
                </header>
                <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-0 my-2">
                  <div className="card1">
                    <p>Total Orders: 120</p>
                  </div>
                  <div className="card1">
                    <p>Pending: 10</p>
                  </div>
                  <div className="card1">
                    <p>Delivered: 100</p>
                  </div>
                </section>
                <section className="orders">
                  <h5 className="fw-bold">Recent Orders</h5>
                  <table className="dash-table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#1001</td>
                        <td>John Doe</td>
                        <td>Pending</td>
                        <td>
                          <button>View/Edit</button>
                        </td>
                      </tr>
                      <tr>
                        <td>#1002</td>
                        <td>Sarah Smith</td>
                        <td>Delivered</td>
                        <td>
                          <button>View/Edit</button>
                        </td>
                      </tr>
                      <tr>
                        <td>#1003</td>
                        <td>Alice Jones</td>
                        <td>In Progress</td>
                        <td>
                          <button>View/Edit</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </main>
            </div>
          </div>
        </div>
      ) : (
        navigate("/login")
      )}
    </div>
  );
};

export default AdminDashboard;
