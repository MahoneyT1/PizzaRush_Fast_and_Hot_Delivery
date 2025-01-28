import React from 'react'
import Testimonials from '../components/Testimonials'
import ShopComponent from '../components/ShopComponent'
import Featured from '../components/Featured'
import FAQ from '../components/FAQ'
import HeroM from '../components/HeroMotion'
import {motion} from 'framer-motion'

const Home = ({addProductToCart, pizzas}) => {


  return (
    <motion.div >
        <HeroM />
        <ShopComponent
          addProductToCart={addProductToCart} 
          pizzas={pizzas} 
        />
        <Featured />
        <Testimonials />
        <FAQ />
    </motion.div>
  )
}

export default Home