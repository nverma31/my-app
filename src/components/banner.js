import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>Hi. I'm a product designer</span>
            </div>
            <div className='line'>
              <span>based in Hamburg.</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='/'>
              Scroll Down
              <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
