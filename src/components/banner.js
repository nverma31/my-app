import React from "react";
import { ReactComponent as RightArrow } from "../assets/right-arrow.svg";
import styled from 'styled-components';


const Gradient = styled.span`
  background: linear-gradient(
    270deg,
    #ff5f6d,
    #ffc371,
    #c34dbf,
    #ff4b1f,
    #ff9068,
    #16bffd,
    #a84dc3,
    #cb3066,
    #4ca1af,
    #c4e0e5
  );
  background-size: 2000% 2000%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 14%;
    }
    50% {
      background-position: 100% 87%;
    }
    100% {
      background-position: 0% 14%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 14%;
    }
    50% {
      background-position: 100% 87%;
    }
    100% {
      background-position: 0% 14%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 14%;
    }
    50% {
      background-position: 100% 87%;
    }
    100% {
      background-position: 0% 14%;
    }
  }

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>Hi, I'm a senior product designer based in Munich, currently</span>
            </div>
            <div className='line'>
              <span> working at&nbsp;<a href="https://www.sixt.com/betahome/#/"><Gradient>SIXT.</Gradient></a></span>
            </div>
            <div className='line'>
              <span> </span>
            </div>
            <div className='line'>
              <span>I bridge the gap between  product design and tangible  </span>
            </div>
            <div className='line'>
              <span> business outcomes to create meaningful experiences </span>
            </div>
            <div className='line'>
              <span> that enrich people's lives. </span>
            </div>
          </h2>
          <div className='hello-btn'>
          <a href="https://drive.google.com/file/d/175BR-KYdM6q_lGjCnxNIqBzjSgiioKJ7/view?usp=sharing" target="_blank">
              Resume
            </a>
          </div>
          <div className='Scroll-link'>
          <a href='/'>
              Case studies <RightArrow />
            </a>
                      </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
