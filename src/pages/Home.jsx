import React from 'react'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import ShopComponent from '../components/ShopComponent'
import Featured from '../components/Featured'

const Home = () => {
  return (
    <div>
        <Hero />
        {/* <Menu /> */}
        <ShopComponent />
        <Featured />
        <Testimonials />
    </div>
  )
}

export default Home