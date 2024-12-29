import React from 'react'
import Testimonials from '../components/Testimonials'
import ShopComponent from '../components/ShopComponent'
import Featured from '../components/Featured'
import FAQ from '../components/FAQ'
import HeroM from '../components/HeroMotion'

const Home = ({addProductToCart}) => {
  return (
    <div>
        <HeroM />
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