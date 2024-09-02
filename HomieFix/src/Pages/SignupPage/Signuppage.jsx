import React from "react";
import { SignupNavbar } from "../../Components/SignupNavbar/SignupNavbar";
import { Founder } from "../../Components/Founder/Founder";
import  Footer  from "../../Components/Footer/Footer";
import SignupBody from "../../Components/SignupPageBody/SignupBody";

const SignupPage = () => {
  return (
    <div>
        <SignupNavbar />
        <SignupBody />
        {/* <Founder /> */}
        {/* <Footer /> */}
    </div>
  );
};

export default SignupPage