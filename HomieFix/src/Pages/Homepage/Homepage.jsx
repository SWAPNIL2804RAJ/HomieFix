import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Footer from '../../Components/Footer/Footer'
import Middle from '../../Components/Middle/Middle'
import { Founder } from '../../Components/Founder/Founder'
import MailList from '../../Components/MailList/MailList'
import './homepage.css'

const Homepage = () => {
    return (
    <div>
        <Navbar />
        <Hero />
        <Middle />
        <MailList />
        <Founder />
        <Footer />
    </div>
  )
}

export default Homepage