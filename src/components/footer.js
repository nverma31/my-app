import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer"

import gsap from "gsap";

const Footer = () => {
  let tl = gsap.timeline();

  return (
    <div class='footer-wrapper'>
        
      
      <div class='row'>
        <div class='column'>
          <div class="footer-intro-section">
              Like what you see
          </div>
        </div>
      </div>
      <div class='row'>
        <div class='column'>
          <div class="footer-text-section">
             Get in 
          </div>
        </div>
      </div>
      <div class='row'>
        <div class='column'>
          <div class="footer-text-second-section">
              Touch
          </div>
        </div>
      </div>
      <div class='row'>
        <div class='column'>
          <div class="footer-mail-section">
              mail @nverma31@gmail.com
          </div>
        </div>
      </div>

      <div class='row'>
        <div class='column'>
          <div class="footer-copyright-section">
          &copy;neeraj verma 2020
          </div>
        </div>
        <div class='double-column'>
            <div class='footer-social-section'>
              Linkedin Github
            </div>
        </div>
      </div>

    </div>

  );
};

export default Footer;
