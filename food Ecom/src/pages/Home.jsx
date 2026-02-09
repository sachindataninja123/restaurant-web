import React from 'react'
import Navbar from '../components/Navbar'
import FiltersItem from '../components/FiltersItem'
import Card from '../components/Card'

const Home = () => {
  return (
    <div>
      <Navbar />
      <FiltersItem />
     <div className='flex items-center justify-center flex-wrap gap-7 mt-5'>
       <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
     </div>
    </div>
  )
}

export default Home
