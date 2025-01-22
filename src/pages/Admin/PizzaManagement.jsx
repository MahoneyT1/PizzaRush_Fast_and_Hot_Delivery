// MenuManagement.js
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import axios from "axios";

const PizzaManagement = () => {
  const [menuItems, setMenuItems] = useState([ ]);

  console.log(menuItems)



  const pizzas = async() => {
    
    const token = localStorage.getItem("access_token");

    try {
      const response = await axios.get(
        `http://localhost:8000/pizzas/`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

     setMenuItems(response.data);
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

  useEffect(() => {
    pizzas();
  }, []);

  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && <Modal setModal={setModal} />}

      <div className="dashboard py-4">
        <div className="container">
          <div className=" row m-0">
            <Sidebar />

            <div className=" col col-md-9">
              <h2>Menu Management</h2>
              <button
                className="button2 text-white "
                onClick={() => {
                  setModal(true);
                }}
              >
                Add Item
              </button>
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
                      <td>{item.description_type}</td>
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
    </>
  );
};

export default PizzaManagement;
