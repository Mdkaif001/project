import React from "react";
import logo from "./images/logo.png"

const Header =()=>{
    return(
      <>
         <header className="header">
            <img src={logo} alt="Logo" width="50px" height="50px"/>
            <h1>Kaif Keep</h1>
         </header>
      </>
    )
  }
  export default Header;