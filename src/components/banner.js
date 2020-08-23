import React from "react";
import { ReactComponent as RightArrow } from "../assets/right-arrow.svg";
import styled from 'styled-components'


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
              <span>Hi, I'm a product designer based in Hamburg, currently</span>
            </div>
            <div className='line'>
              <span> Working at&nbsp;<a href="https://sinnerschrader.com/"><Gradient>SinnerSchrader.</Gradient></a></span>
            </div>
            <div className='line'>
              <span> </span>
            </div>
            <div className='line'>
              <span>I bridge  gap between behavioural science, product </span>
            </div>
            <div className='line'>
              <span>  design and tangible business outcomes to create</span>
            </div>
            <div className='line'>
              <span>  meaningful human Experiences. </span>
            </div>
          </h2>
          <div className='hello-btn'>
          <a href="mailto:nverma31@gmail.com">
              Say Hello
            </a>
          </div>
          <div className='Scroll-link'>
          <a href='/'>
              Scroll <RightArrow />
            </a>
                      </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
