import React from 'react'

const Toppings = () => {
  return (
    <div className='py-4 pizza'>
        <div className="container">
            <div className="create-container d-flex align-items-center justify-content-center flex-column py-4">
                    <div>
                        <h5 className='fw-bold text-center'>Create Your Own <span className='colorr'>Pizza</span></h5>
                        <p className='border-bottom'>Step 2 : Choose Toppings</p>
                        <div className='d-flex mb-3 flex-column gap-2'>
                            <small className='lead'>Mushrooms</small>
                            <small className='lead'>Peppers</small>
                            <small className='lead'>Onions</small>
                            <small className='lead'>Olives</small>
                            <small className='lead'>Tomatoes</small>
                            <small className='lead'>Extra Cheese</small>
                        </div>
                        <button className="button3">Order</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Toppings