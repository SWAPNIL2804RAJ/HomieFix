import React from "react";
import { LoginNavbar } from "../../Components/LoginNavbar/LoginNavbar";
import { Founder } from "../../Components/Founder/Founder";
import  Footer  from "../../Components/Footer/Footer";
import LoginBody from "../../Components/LoginPageBody/LoginBody";


const LoginPage = () => {
  return (
    <div>
        <LoginNavbar />
        <LoginBody />
        {/* <Founder /> */}
        {/* <Footer /> */}
    </div>
  );
};

export default LoginPage