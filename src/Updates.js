import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import Article from './Article.js';
import articleone from './img/article-tn-01.png';
import articletwo from './img/article-tn-02.png';
import articlethree from './img/article-tn-03.png';
import articlefour from './img/article-tn-04.png';
import articlefive from './img/article-tn-05.jpeg';
import updatesix from './img/article-tn-06.png';

class Updates extends Component {
  state = {
    articleOneImage: articleone,
    articleTwoImage: articletwo,
    articleThreeImage: articlethree,
    articleFourImage: articlefour,
    articleFiveImage: articlefive,
    articleSixImage: updatesix,
    hamburgerState: "off"
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleMenu = () => {
    let hamburger = document.querySelector(".hamburger");
    let overlay = document.querySelector(".overlay");
    if (this.state.hamburgerState === "off") {
      hamburger.classList.add("is-active");
      overlay.classList.remove("hide");
      overlay.classList.add("show");
      this.setState({hamburgerState: "on"})
    } else {
      hamburger.classList.remove("is-active");
      overlay.classList.remove("show");
      overlay.classList.add("hide");
      this.setState({hamburgerState: "off"})
    }
  }

  render() {
    return (
      <div className="body">
        <section className="header">
        <div className="navigation">
          <div className="veronica"><Link to="/" className="active">Veronica Hvaal Stigen</Link></div>
          <button className="hamburger hamburger--spin mobile" type="button" onClick={this.toggleMenu}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <div className="overlay mobile">
            <div className="submenus">
              <div className="work-mobile"><Link to="/">Work</Link></div>
              <div className="updates-mobile"><Link to="/updates" className="active">Updates</Link></div>
              <div className="about-mobile"><Link to="/about">About</Link></div>
            </div>
          </div>
          <div className="navigation-sub">
            <div className="work"><Link to="/">Work</Link></div>
            <div className="updates"><Link to="/updates" className="active">Updates</Link></div>
            <div className="about"><Link to="/about">About</Link></div>
          </div>
        </div>
          <div className="designer">
            Software Developer
          </div>
          <div className="speciality">
          Full-Stack / Front-End Development
          </div>
        </section>
        <section className="updates">
          {window.innerWidth<=1009 ?
            <div className="left">
              <p className="updates-intro">
                Here I will share various events that matter to me. There are <span className="bold">so many</span> exciting things happening in the
                developer community, and I love an opportunity to <span className="bold">learn</span> from those more experienced than me, and <span className="bold">teach</span> those
                who started after me.
              </p>
              <Article
                aos=""
                link="https://www.linkedin.com/feed/update/urn:li:activity:6631107528199593984/"
                class="article-default"
                image={this.state.articleTwoImage}
                title={["A Taste of Code", <br/>, "At Codaisseur"]}
                subtitle="Teaching the next generation of developers"
                date="February 1st, 2020"
                dateClass="article-date two-line"
                index="0"
              />
              <Article
                aos="fade-up"
                link="https://www.udemy.com/course/vuejs-2-the-complete-guide/"
                class="article-default"
                image={this.state.articleFourImage}
                title="VUE Course Graduate"
                subtitle="Learning the basics"
                date="January 20th, 2020"
                dateClass="article-date one-line"
                index="1"
              />
              <Article
                aos="fade-up"
                link="https://codaisseur.com/"
                class="article-default"
                image={this.state.articleThreeImage}
                title="First Day of School"
                subtitle="Learning Software Development"
                date="October 7th, 2019"
                dateClass="article-date one-line"
                index="2"
              />
            </div> :
            <div className="left">
              <p className="updates-intro">
                Here I will share various events that matter to me. There are <span className="bold">so many</span> exciting things happening in the
                developer community, and I love an opportunity to learn from those more experienced than me, and teach those
                who started after me.
              </p>
              <Article
                aos=""
                link="https://www.linkedin.com/feed/update/urn:li:activity:6631107528199593984/"
                class="article-default"
                image={this.state.articleTwoImage}
                title={["A Taste of Code", <br/>, "At Codaisseur"]}
                subtitle="Teaching the next generation of developers"
                date="February 1st, 2020"
                dateClass="article-date two-line"
                index="0"
              />
              <Article
                aos=""
                link="https://www.udemy.com/course/vuejs-2-the-complete-guide/"
                class="article-default"
                image={this.state.articleFourImage}
                title="VUE Course Graduate"
                subtitle="Learning the basics"
                date="January 20th, 2020"
                dateClass="article-date one-line"
                index="1"
              />
              <Article
                aos=""
                link="https://codaisseur.com/"
                class="article-default"
                image={this.state.articleThreeImage}
                title="First Day of School"
                subtitle="Learning Software Development"
                date="October 7th, 2019"
                dateClass="article-date one-line"
                index="2"
              />
            </div>
          }
          {window.innerWidth<=1009 ?
            <div className="right">
              <Article
                aos="fade-up"
                link="https://github.com/vhs2708"
                class="article-default mobile"
                image={this.state.articleFiveImage}
                title={["Micro Frontends", <br/>, "Meetup"]}
                subtitle="Software Development at Xebia"
                date="February 12th, 2020"
                dateClass="article-date two-line"
                index="3"
              />
              <Article
                aos="fade-up"
                link="https://www.linkedin.com/feed/update/urn:li:activity:6627537894586359808/"
                class="article-default"
                image={this.state.articleOneImage}
                title="Started Java Course"
                subtitle="Getting serious"
                date="January 16th, 2020"               
                dateClass="article-date two-line"
                index="4"
              />
              <Article
                aos="fade-up"
                link="https://www.linkedin.com/posts/activity-6613131004309839872-Kb3-"
                class="article-last"
                image={this.state.articleSixImage}
                title={["YES! I'm Officially", <br/>, "a Full-Stack Developer"]}
                subtitle="Graduating from Codaisseur"
                date="December 20th, 2019"
                dateClass="article-date two-line"
                index="5"
              />
            </div> :
            <div className="right">
              <Article
                aos=""
                link="https://github.com/vhs2708"
                class="article-default"
                image={this.state.articleFiveImage}
                title={["Micro Frontends", <br/>, "Meetup"]}
                subtitle="Software Development at Xebia"
                date="February 12th, 2020"
                dateClass="article-date two-line"
                index="3"
              />
              <Article
                aos=""
                link="https://github.com/vhs2708"
                class="article-default"
                image={this.state.articleOneImage}
                title="Started Java Course"
                subtitle="Getting serious"
                date="January 16th, 2020"
                dateClass="article-date two-line"
                index="4"
              />
              <Article
                aos=""
                link="https://www.linkedin.com/posts/activity-6613131004309839872-Kb3-"
                class="article-last"
                image={this.state.articleSixImage}
                title={["YES! I'm Officially", <br/>, "a Full-Stack Developer"]}
                subtitle="Graduating from Codaisseur"
                date="December 20th, 2019"
                dateClass="article-date two-line"
                index="5"
              />
            </div>
          }
        </section>
      </div>
    );
  }
}

export default Updates;