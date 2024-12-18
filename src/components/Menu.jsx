import React from 'react'

const Menu = () => {
  return (
    <div className='py-4'>
        <div className="container p-0">
            <h2 className='text-center menu fw-bold'>Our Menu</h2>
            <div className='grid1'>

              <div className="d-flex gap-3">
                <div className="item-image"></div>
                <div className="item-details">
                  <h3 className="fw-bold">Item Name</h3>
                  <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officiis ex mollitia voluptatum sequi dignissimos accusantium sunt?</p>
                  <p className="price">200</p>
                </div>
              </div>
              
              <div className=" d-flex gap-3">
                <div className="item-image"></div>
                <div className="item-details">
                  <h3 className="fw-bold">Item Name</h3>
                  <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officiis ex mollitia voluptatum sequi dignissimos accusantium sunt?</p>
                  <p className="price">200</p>
                </div>
              </div>
          
            </div>

        </div>
    </div>
  )
}

export default Menu