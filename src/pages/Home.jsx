import React from 'react'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import ShopComponent from '../components/ShopComponent'
import Featured from '../components/Featured'
import FAQ from '../components/FAQ'
import HeroM from '../components/HeroMotion'

const Home = ({addProductToCart}) => {
  return (
    <div>
        <HeroM />
        {/* <Menu /> */}
        <ShopComponent
          addProductToCart={addProductToCart}  
        />
        <Featured />
        <Testimonials />
        <FAQ />
    </div>
  )
}

export default Home