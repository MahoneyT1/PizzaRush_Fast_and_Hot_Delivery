import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="sidebar col-md-3">
        <h2 className="logo">Pizza Admin</h2>
        <nav>
          <ul className="d-flex flex-column gap-2 m-0 p-0">
            <Link className="nav-link ad-link" to="/admin">Dashboard</Link>
            <Link className="nav-link ad-link" to="/admin/orders">Orders</Link>
            <Link className="nav-link ad-link" to="/admin/shop">Menu Management</Link>
            <Link className="nav-link ad-link" to="/admin/users">User Management</Link>
            <Link className="nav-link ad-link" to="/admin/report">Reports</Link>
            <Link className="nav-link ad-link" to="/admin/logout">Logout</Link>
          </ul>
        </nav>
      </aside>
  )
}

export default Sidebar