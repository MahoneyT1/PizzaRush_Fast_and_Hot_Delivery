import React from 'react'

// import { GrCart } from "react-icons/gr";

const Headings = ({heading}) => {
  return (
    <div className='my-4'>
            <div className="cat">
              <small className="ms-4 fw-bold cat-label">{heading}</small>
            </div>
            
        </div>
  )
}

export default Headings