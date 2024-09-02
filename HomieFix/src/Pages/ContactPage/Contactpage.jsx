import React from 'react'
import './contactpage.css'
import  Footer  from "../../Components/Footer/Footer";
import { Founder } from '../../Components/Founder/Founder';
import { ContactUs } from '../../Components/ContactUsBody/ContactUs';
import { OtherNavbar } from '../../Components/OtherNavbar/OtherNavbar';

const Contactpage = () => {
  return (
    <div>
      <OtherNavbar />
      <ContactUs />
      <Founder />
      <Footer />
    </div>
    )
}

export default Contactpage