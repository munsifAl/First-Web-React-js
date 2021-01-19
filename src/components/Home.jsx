import React from "react";
import { NavLink } from "react-router-dom";
import web from "../images/img2.svg";

import Common from "./Common";
const Home = () => {
     return (
      <>
      <Common 
      name="Grow Your Business with"
      imgsrc={web}
      visit="/service"
      btname="Get Started"
      />
     
      </>

     );
}

export default Home;