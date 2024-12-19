import React from 'react'
import Data from '../data'

const Menu = () => {
  return (
    <div className='py-4'>
        <div className="container p-0">
            <h2 className='text-center menu fw-bold'>Our Menu</h2>
            <div className='row row-cols-1 row-cols-sm-2 m-0'>

              { 
                Data.map(item=> 
                  (
                    <div className="d-flex mb-3 align-items-center gap-3">
                    <div className="item-image d-flex align-items-center justify-content-center">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="item-details">
                      <h5 className="fw-bold">{item.name}</h5>
                      <p className="desc">{item.description}</p>
    
                      <form action="" className='mb-2'>
                        <select name="" id="">
                          <option value="Medium">Medium</option>
                          <option value="Large">Large</option>
                          <option value="XLarge">XLarge</option>
                        </select>
                      </form>
                      <button className="button2 text-white">Add To cart NGN 14,000.00</button>
                    </div>
                  </div>
                ))
              }
                
                
                
                
                
            </div>

        </div>
    </div>
  )
}

export default Menu