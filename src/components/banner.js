import React from "react";
import { ReactComponent as RightArrow } from "../assets/quinta.png";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>Hi!, I'm a Product designer </span>
            </div>
            <div className='line'>
              <span> creating unique digital experiences.</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='/'>
              {/* More about me <RightArrow /> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
