import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer"

import gsap from "gsap";

const ProjectIntro = () => {
  let tl = gsap.timeline();

  return (
    <div class='some-page-wrapper'>
      <div class='row'>
        <div class='column'>
          <div class="intro-section">
            <div class='intro-section-heading'>
              What we did
            </div>
            <div class='intro-section-description'>
              I worked as a UX Designer
            </div>
          </div>
          <div class="intro-section">
            <div class='intro-section-heading'>
              Years
            </div>
            <div class='intro-section-description'>
              2016
            </div>
          </div>
          <div class="intro-section">
            <div class='intro-section-heading'>
              Company
            </div>
            <div class='intro-section-description'>
              Collab
            </div>
          </div>
        </div>
        <div class='double-column'>
          <div class='brief-column'>
          Bed all in the expecting alphabet the time. Brothers withdraw at is to best date to on does ocean. Deceleration rippedup, I box it her, war, I there odd live any many she impasse. The still city feedback project finds links accompany said beginning produce phase to must few can two phase and the admittance.
        </div>
          <div class='brief-column'>
            <div class='brief-column-heading'>
              The Brief
            </div>
Bed all in the expecting alphabet the time. Brothers withdraw at is to best date to on does ocean. Deceleration rippedup, I box it her, war, I there odd live any many she impasse. The still city feedback project finds links accompany said beginning produce phase to must few can two phase and the admittance.
        </div>
        </div>


      </div>
    </div>

  );
};

export default ProjectIntro;
