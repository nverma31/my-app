import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer"

import gsap from "gsap";

const Footer = () => {
  let tl = gsap.timeline();

  return (
    <div class='footer-wrapper'>    
          <div class="footer-intro-section">
          Like what you see? 
      </div>   
          <div class="footer-text-section">
             Get in 
      </div>
          <div class="footer-text-second-section">
              touch

      </div>
    </div>

  );
};

export default Footer;
