import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () =>{
     return(

     <>
     <footer className="bg-light text-center text-lg-start">

  <p className="text-center p-3 " >
    © 2020 Copyright |
    <NavLink className="text-dark" to="/about">   Designed by Munsif Powered by XCL</NavLink>
  </p>
 
</footer>
     </>


     );
}

export default Footer;