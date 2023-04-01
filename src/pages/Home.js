import React from 'react'
import Category from '../components/Category'
import Festival from '../components/Festival'
import Navbar2 from '../components/Navbar2'
import NewArrival from '../components/NewArrival'
import ProductSlider from '../components/ProductSlider'

const Home = () => {
  return (
    <div>
      <Navbar2/>
      <Category/>
      <Festival/>
      <ProductSlider/>
      <NewArrival/>
    </div>
  )
}

export default Home