import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg from '../Components/HeroImg'
import Footer from '../Components/Footer'
import AboutContent from '../Components/AboutContent'
import WorkCard from '../Components/WorkCard'
import ContactMe from '../Components/ContactMe'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <AboutContent/>
      <WorkCard/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default Home
