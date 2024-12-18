import React from 'react'

const Hero = () => {
  return (
    <section className="main">
    <div className="container p-0">
      <div className="d-flex flex-column-reverse align-items-center flex-lg-row hero m-0">
        <div className="col-lg-6 d-flex text-center text-lg-start justify-content-center align-items-lg-start align-items-center flex-column gap-2 p-4 p-lg-0">
          <h1 className="hero-header">The Tastiest & The Best <span className='colorr'>PIZZA</span> In Nigeria</h1>

          <p className="text-muted para my-2">Fresh, hot, and loaded with flavor—your perfect pizza is just a click away. Order now and we’ll deliver it right to your door! </p>

          <div className='action d-flex align-items-center gap-2'>
            <button className="d-inline-block text-white button">Order Now</button>
            <button className="d-inline-block text-white button2">See Menu</button>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          
          <img
            src="../../Images/pizz.png"
            className="img-fluid intro-image"
            alt="hero_image"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero