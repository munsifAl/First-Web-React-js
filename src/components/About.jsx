import React from "react";
import Common from "./Common";
import web from "../images/about.svg";

const About = () => {
     return(
          <>
           <Common 
                 name="welcome To About "
                 imgsrc={web}
                 visit="/contact"
                 btname="Contact us"
           />
          </>

     );
}

export default About;