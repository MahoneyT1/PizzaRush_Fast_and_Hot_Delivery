import React from 'react'
import { Link } from 'react-router-dom'

const YourPizza = () => {
  return (
    <div className='py-4 pizza'>
        <div className="container">
            <div className="create-container d-flex align-items-center justify-content-center flex-column py-4">
                    <div>
                        <Link to="/base" className="nav-link cus-btn">Create Your Pizza</Link>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default YourPizza