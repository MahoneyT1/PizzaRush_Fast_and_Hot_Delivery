// MenuManagement.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const PizzaManagement = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Margherita", price: "$10" },
    { id: 2, name: "Pepperoni", price: "$12" },
    { id: 3, name: "Veggie Delight", price: "$11" },
  ]);

  return (

    <div className="dashboard py-4">
        <div className="container">


        <div className=" row m-0">
            <Sidebar />






                <div className=" col col-md-9">
                        <h2>Menu Management</h2>
                        <button className="button2 text-white">Add Item</button>
                        <table className="mt-3 dash-table">
                            <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Desc</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {menuItems.map((item) => (
                                <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.name}</td>
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

export default PizzaManagement;
