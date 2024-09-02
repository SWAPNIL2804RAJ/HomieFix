import React from 'react'
import './aboutpage.css'
import AboutBody from '../../Components/AboutPageBody/AboutBody';
import { OtherNavbar } from '../../Components/OtherNavbar/OtherNavbar';
import  Footer  from "../../Components/Footer/Footer";
// import { Founder } from '../../Components/Founder/Founder';


const Aboutpage = () => {

  return (
    <div>
      <OtherNavbar />
      <AboutBody />
      {/* <Founder /> */}
      <Footer />
    </div>
  )
}

export default Aboutpage