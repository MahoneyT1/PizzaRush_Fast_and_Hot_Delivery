// Reports.js
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from "chart.js";
// import { Bar, Pie } from "react-chartjs-2";
import Sidebar from "./Sidebar";

const Reports = () => {
  const barData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Orders Per Day",
        data: [30, 45, 40, 60, 75, 80, 90],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };


  ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

  const pieData = {
    labels: ["Margherita", "Pepperoni", "Veggie", "BBQ Chicken"],
    datasets: [
      {
        data: [200, 150, 100, 120],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const tableData = [
    { id: 1, pizza: "Margherita", sold: 200, revenue: "$2000" },
    { id: 2, pizza: "Pepperoni", sold: 150, revenue: "$1800" },
    { id: 3, pizza: "Veggie", sold: 100, revenue: "$1200" },
    { id: 4, pizza: "BBQ Chicken", sold: 120, revenue: "$1500" },
  ];

  return (
    <div className="dashboard py-4">
      <div className="container">
        <div className=" row m-0">
          <Sidebar />

          <div className="col col-md-9">
            <div className="">
              <h4>Reports</h4>

              {/* Metrics Overview */}
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-0 my-2 mb-3">
                <div>
                    <div className="metric-card">
                      <h6>Total Orders</h6>
                      <p>450</p>
                    </div>
                </div>
                <div>
                    <div className="metric-card">
                      <h6>Total Revenue</h6>
                      <p>$15,000</p>
                    </div>
                </div>
                <div>
                    <div className="metric-card">
                      <h6>Top-Selling Pizza</h6>
                      <p>Margherita</p>
                    </div>
                </div>
              </div>

              {/* Charts */}
              <div className="row m-0 ">
                <div className="col-lg-6 mb-3">
                    <div className="chart">
                      <h3>Orders Per Day</h3>
                      <Bar data={barData} />
                    </div>
                </div>
                <div className="col-lg-6 mb-3">
                    <div className="chart">
                      <h3>Pizza Sales Distribution</h3>
                      <Pie data={pieData} />
                    </div>
                </div>
              </div>

              {/* Detailed Table */}
              <div className="report-table">
                <h3>Detailed Sales Report</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Pizza</th>
                      <th>Sold</th>
                      <th>Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row) => (
                      <tr key={row.id}>
                        <td>{row.pizza}</td>
                        <td>{row.sold}</td>
                        <td>{row.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
