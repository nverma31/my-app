import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineLite } from 'gsap';


const SocialLinks = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  height: 100vh;
  position: relative;
  z-index: 10;

  .footer-intro-section{
    padding-top: 25vh;
    padding-bottom: 5vh;
    font-size: 1.5vw;
    width:25vw;
    line-height: 2vw;
    padding-bottom: 8vh;
    padding-left: 42vw;
    font-family: "TT Commons regular";
  }
  .footer-text-section{
    padding-left: 32vw;
    font-family: "TT Commons DemiBold";
    font-size: 8vw;
    line-height: 3.5vw;
  }
  .footer-text-second-section{
    padding-left: 42vw;
    font-family: "TT Commons DemiBold";
    font-size: 8vw;
  }
  @media (max-width: 600px) {
    padding-left: 5%;
  }
  ul {
    margin: 0;
    padding-left:5vw;
    padding-bottom:5vh;

    display: flex;
    flex-direction: row;
    li {
      list-style: none;
      margin-right: 25px;
      a {
        text-decoration: none;
        font-weight: 300;
        color: #000;
        text-transform: capitalize;
        svg {
          font-size: 1.5vw;
        }
        &:hover {
          color: #979797;
        }
      }
    }
  }
`


class SocialIcons extends Component {
  constructor(props) {
    super(props)
    this.socials = []
    // reference to the animation
    this.myTween = null
  }
  componentDidMount() {
    this.myTween = new TimelineLite()
    this.myTween.staggerFrom(
      this.socials,
      0.2,
      { delay: 1, scale: 0, autoAlpha: 0 },
      0.1
    ) //animate
  }
  render() {
    return (
      <SocialLinks>
    <div class='footer-wrapper'>    
          <div class="footer-intro-section">
          Like what you see? 
      </div>   
          <div class="footer-text-section">
             Let's talk.
      </div>
          {/* <div class="footer-text-second-section">
              touch

      </div> */}
    </div>
    <div class="nav">
      <ul>
        <li class="home"><a href="#">Linkedin</a></li>
        <li class="tutorials"><a class="active" href="#">Xing</a></li>
        <li class="about"><a href="#">Github</a></li>
        <li class="news"><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
      </SocialLinks>
    )
  }
}

export default SocialIcons
