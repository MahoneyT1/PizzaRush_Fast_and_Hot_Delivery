// Orders.js
import React from "react";
import Sidebar from "./Sidebar";

const Orders = () => {
  const orders = [
    { id: 1, customer: "John Doe", status: "Pending", total: "$20" },
    { id: 2, customer: "Sarah Smith", status: "Delivered", total: "$35" },
    { id: 3, customer: "Alice Johnson", status: "In Progress", total: "$15" },
  ];

  return (

    <div className="dashboard py-4">
        <div className="container">


        <div className=" row m-0">
            <Sidebar />






            <div className="dash col col-md-9">
            <h2>Orders</h2>
            <table className="dash-table">
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
                    <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.status}</td>
                    <td>{order.total}</td>
                    <td>
                        <button>View</button>
                        <button>Edit</button>
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

export default Orders;
