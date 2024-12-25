import React from 'react'
import { Link } from 'react-router-dom'

const Base = () => {
  return (
    <div className='py-4 pizza'>
        <div className="container">
            <div className="create-container d-flex align-items-center justify-content-center flex-column py-4">
                    <div>
                        <h5 className='fw-bold text-center'>Create Your Own <span className='colorr'>Pizza</span></h5>
                        <p className='border-bottom'>Step 1 : Choose Your Base</p>
                        <div className='d-flex mb-3 flex-column gap-2'>
                            <small className='lead'>Classic</small>
                            <small className='lead'>Thin & Crispy</small>
                            <small className='lead'>Thick Crust</small>
                        </div>
                        <Link to="/toppings" className="nav-link cus-btn">Next</Link>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Base