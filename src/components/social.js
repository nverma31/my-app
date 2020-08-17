import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineLite } from 'gsap'
import {
  faDribbble,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faDribbble, faGithub, faLinkedin, faInstagram)

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

const socialsArray = [
  { url: 'https://dribbble.com/Arxaa', icon: 'dribbble' },
  { url: 'https://github.com/wrongakram', icon: 'github' },
  {
    url: 'https://www.linkedin.com/in/akram-khalid-12b977142/',
    icon: 'linkedin',
  },
  { url: 'https://www.instagram.com/wrongakram', icon: 'instagram' },
]

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
             Get in 
      </div>
          <div class="footer-text-second-section">
              touch

      </div>
    </div>
        <ul>
          {socialsArray.map((social, index) => {
            return (
              <li
                key={`social-${index}`}
                ref={li => (this.socials[index] = li)}
              >
                <a href={social.url}>
                  <FontAwesomeIcon icon={['fab', `${social.icon}`]} />
                </a>
              </li>
            )
          })}
        </ul>
      </SocialLinks>
    )
  }
}

export default SocialIcons
