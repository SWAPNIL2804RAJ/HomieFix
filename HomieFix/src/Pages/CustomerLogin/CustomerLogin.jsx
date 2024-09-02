import React from 'react'
import { LoginNavbar } from "../../Components/LoginNavbar/LoginNavbar";
import Login from '../../Components/CustLogin/CustLogin';
import CustLogin from '../../Components/CustLogin/CustLogin';

const CustomerLogin = () => {
  return (
    <div>
      <h1>      Login      </h1>
      <LoginNavbar />
      <CustLogin />
    </div>
  )
}

export default CustomerLogin