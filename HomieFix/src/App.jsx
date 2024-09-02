import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Homepage from './Pages/Homepage/Homepage'
import Aboutpage from './Pages/AboutPage/Aboutpage';
import Contactpage from './Pages/ContactPage/Contactpage';

import LoginPage from './Pages/LoginPage/Loginpage';
import SignupPage from './Pages/SignupPage/Signuppage';

import CustomerLogin from './Pages/CustomerLogin/CustomerLogin';
import CustomerSignup from './Pages/CustomerSignup/CustomerSignup';
import UserDashboard from './Pages/UserDashboard/UserDashboard';

import AdminSignup from './Pages/AdminSignup/AdminSignup';
import Adminlogin from './Pages/AdminLogin/Adminlogin';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About Us" element={<Aboutpage />} />
        <Route path="/Contact Us" element={<Contactpage />} />
        
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />

        <Route path="/UserLogin" element={<CustomerLogin />} />
        <Route path="/UserSignup" element={<CustomerSignup/>} />
        <Route path="/UserDashboard" element={<UserDashboard/>} />

        <Route path="/AdminSignup" element={<AdminSignup/>} />
        <Route path="/AdminLogin" element={<Adminlogin/>} />
        <Route path="/AdminDashboard" element={<AdminDashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App