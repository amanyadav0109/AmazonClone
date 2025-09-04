import React from 'react'
import'./HomeScreen.css'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeDetails from './HomeDetails/HomeDetails'
import Footer from '../../components/footer/Footer'
const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <HomeBanner/>
      <HomeDetails/>
      
    </div>
  )
}

export default HomeScreen
