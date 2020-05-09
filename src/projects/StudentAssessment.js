import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProjectNav from './ProjectNav.js';
import '../App.css';
import '../Responsive.css';
import '../Hamburgers.css';
import img00 from '../img/studentass-img00.png';
import img01 from '../img/studentass-img01.png';
import img02 from '../img/studentass-img02.png';
import img03 from '../img/studentass-img03.gif';
import img04 from '../img/studentass-img04.gif';
import img05 from '../img/studentass-img05.png';

class StudentAssessment extends Component {
  state = {
    logoImage: img00
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleConcepts = (index) => {
    let conceptTitles = document.querySelectorAll(".concept-title");
    let conceptA = document.querySelectorAll(".concept-a");
    let conceptB = document.querySelectorAll(".concept-b");
    let conceptC = document.querySelectorAll(".concept-c");

    for (let title of conceptTitles) {
      title.classList.remove("inactive");
      title.classList.remove("active");
      title.classList.add("inactive");
    }

    conceptTitles[index].classList.add("active");

    if (index === 0) {
      for (let concept of conceptA) {
        concept.classList.add("display");
      }
      for (let concept of conceptB) {
        concept.classList.remove("display");
      }
      for (let concept of conceptC) {
        concept.classList.remove("display");
      }
    } else if (index === 1) {
      for (let concept of conceptA) {
        concept.classList.remove("display");
      }
      for (let concept of conceptB) {
        concept.classList.add("display");
      }
      for (let concept of conceptC) {
        concept.classList.remove("display");
      }
    } else {
      for (let concept of conceptA) {
        concept.classList.remove("display");
      }
      for (let concept of conceptB) {
        concept.classList.remove("display");
      }
      for (let concept of conceptC) {
        concept.classList.add("display");
      }
    }
  }

  toggleSolutions = (index) => {
    let solutionTitles = document.querySelectorAll(".solution-title");
    let solutionA = document.querySelector(".tobe");
    let solutionB = document.querySelector(".asis");

    for (let title of solutionTitles) {
      title.classList.remove("inactive");
      title.classList.remove("active");
    }

    solutionTitles[index].classList.add("active");

    if (index === 0) {
      solutionA.classList.add("display");
      solutionB.classList.remove("display");
    } else {
      solutionA.classList.remove("display");
      solutionB.classList.add("display");
    }
  }

  render() {
    return (
      <section className="project-content studentass">
        <div className="cover">
          <ProjectNav
            logoColor="#E0E0E0"
            menuColor="#E0E0E0"
            logo={this.state.logoImage}
            title={["Codaisseur", <br/>, "Student Assessment"]}
            domain="Web Application"
            roles="UX/UI, Backend: Veronica Hvaal Stigen, Melissa Hart, Adél Tancsik"
            rolesTwo="PostgreSQL, React-Redux, Express, MaterialUI"
            date="2019.12"
            firm="Codaisseur"
          />
          <img src={img01} alt="Cover" className="cover-image"/>
        </div>
        <div className="summary">
          <div className="summary-container">
            <div className="summary-container-left">
              <div className="content-title white">Summary</div>
              <div className="content end white">
                In this project, we were asked to improve, redesign, fix errors and add features to the 
                official Codaisseur student assessment test given to students who apply to the acedemy
                to test their Javascript skills.
              </div>
            </div>
            <div className="summary-container-right">
              <div className="content-title white">Contribution</div>
              <div className="content end white">
                • Created dynamic question difficulty that makes the test harder when the student gets an answer correct, and easier when they get it wrong<br/>
                • Implemented a score system that saves student score after test completion. Higher difficulty questions award more points<br/>
                • Added functionality for the Codaisseur teachers to add, remove and edit questions from the teacher admin page<br/>
                • Added feature for teachers to see how many students are getting a specific question correct, to easier assess which questions are performing well<br/>
                • Reworked the test interface to make it harder for the student to cheat
              </div>
            </div>
          </div>
        </div>
        <div className="background">
          <div className="stage-title stage-gray">ABOUT</div>
          <div className="content-title-second">Codaisseur Dymanic Student Test Client,<br/>A Way to Test Prospective Student's Javascript Skills </div>
          <div className="content end">The Codaisseur Coding Academy has hundreds of applicants every year,
          and only accept around %30. A number of aptitude tests are used to decide which students get to enroll,
          one of them being the Javascript multiple choice test, which tests a students basic understanding of Javascript concepts.</div>
        </div>

        <div className="challenge">
          <div className="content-title white">Design Challenge</div>
          <div className="content end white">Creating a robust, intuitive and flexible interface that can be used both by the students and the teachers.</div>
        </div>
        <div className="effects">
          <div className="stage-title stage-gray">APPROACH</div>
          <div className="content-title-second">Three Part App Design</div>
          <div className="content middle">The basis of the application is a MaterialUI React-Redux based 
          multiple choice game that draws random questions from a PostgreSQL-powered database.</div>
          <div className="content end">To make the interface as safe and easy to use as possible,
          the app features three parts: The student test interface where a student can log in with their credentials, 
          a teacher admin page where teachers can monitor students and questions, and a secure server where the
          test logic happens and the scores and questions are stored.</div>
        </div>
        <div className="concepts">
          <div className="content-title">
            <div className="concept-title active" onClick={()=>this.toggleConcepts(0)}>Student Page</div>
            <div className="concept-title inactive" onClick={()=>this.toggleConcepts(1)}>Admin Page</div>
            <div className="concept-title inactive" onClick={()=>this.toggleConcepts(2)}>Server</div>
          </div>
          <div className="content middle concept-a display">The student can log in with an admin-generated code that
          is unique to their email, and allows them to take the test only once before it expires. The student
          is given a number of multiple choice questions that are randomly picked from a pool, and that
          decrease or increase in difficulty depending on how the student is performing. As the end of the
          test, the test result is saved in a database and the student is asked to contact a teacher to
          let them know they have finished.</div>
          <img src={img03} alt="Student Gif" className="video concept-a"/>

          <div className="content middle concept-b">In the teacher admin page, the teacher can log in with their
          credentials and perform various admin tasks on students and questions. They can select a specific
          student and check their test score, including which questions they got correct and wrong. They can 
          create a new student and generate a test login code for the student.
          <br/><br/>
          They can access the question pool and check how a question is performing by how big of a percentage
          of students are getting the question right. They can add, remove and edit a question and the answers
          associated with the question, along with the difficulty rating of the question.
          </div>
          <img src={img04} alt="Admin Gif" className="video concept-b"/>
          <div className="content middle concept-c">The server handles the routing, test logic and authentication.
          </div>
          <img src={img05} alt="Server Snippet" className="video concept-c"/>
        </div>
        <div className="solution">
          <div className="stage-title stage-white">OUTCOME</div>
          <div className="content-title-second">Elegant, Stable, User Friendly</div>
          <div className="content middle">
            After expanding and improving the student and teacher clients they
            have become feature packed, yet incredibly intutitive and fun to use.<br/><br/>
          </div>
          <img src={img02} alt="Finished Page" className="image"/>
          <div className="content middle">
            <span className="bullet"></span><br/>
            <span className="bullet"></span>
          </div>
        </div>

        <div className="bottom-navigation">
          <Link to="/memory" className="link link-inactive">Memory Multiplayer Game</Link>
          <Link to="/student-assessment" className="link link-active">Codaisseur Student Assesment</Link>
          <Link to="/ticketswap" className="link link-inactive">Ticketswap</Link>
          <Link to="/where" className="link link-inactive">Where</Link>
        </div>
      </section>
    );
  }
}

export default StudentAssessment;