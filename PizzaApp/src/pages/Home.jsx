import React from 'react'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import ShopComponent from '../components/ShopComponent'

const Home = () => {
  return (
    <div>
        <Hero />
        {/* <Menu /> */}
        <ShopComponent />
        <Testimonials />
    </div>
  )
}

export default Home