import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const SocialIcons = ({path}) => {
   
    return (
      <>
  <section id="contacts">
          <div class="contact-details">
              <p>Like what you see?</p>
              <a href="mailto:nverma31@gmail.com"> 
                  <div class="footer-text-section">
             Let's talk.
                </div>
              </a>  
          </div>
           
          </section>
<div class="nav-wrapper">
      <div class="nav">
      <ul>
        <li class="home"><a href="https://www.linkedin.com/in/neeraj-verma-2753a519/" target="_blank">Linkedin</a></li>
        <li class="tutorials"><a class="active" href="https://www.xing.com/profile/Neeraj_Verma3/" target="_blank">Xing</a></li>
        <li class="about"><a href="https://github.com/nverma31" target="_blank">Github</a></li>
        <li class="news"><a href="#">Privacy Policy</a></li>
      </ul>
    </div> 
    </div>
      </>
    );
  };
  export default SocialIcons;
  