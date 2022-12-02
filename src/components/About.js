import "./About.css";
import { FaHtml5, FaReact } from "react-icons/fa";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiTypescript, SiNextdotjs } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import photo from "../assets/photo.jpg";
import React from "react";

export default function About() {
  return (
    <div className="about">
      {/* <h1 className="aboutTitle">ABOUT ME</h1> */}
      <div className="left">
        <div className="imgContainer">
          <div className="image">
            <img src={photo} alt="Photo of myself" />
          </div>
        </div>
        <div>
          <p className="text">
            <span className="boldText">Email:</span> kbedlinska@gmail.com
            <br />
            <span className="boldText">Phone:</span> +48 697 721 147
          </p>
          <h2 className="skillListTitle">Tech Skills</h2>
          <ul className="skillList">
            <li>
              <FaHtml5 style={{ color: "#FF5733", marginRight: "1rem" }} />
              HTML5
            </li>
            <li>
              <DiCss3 style={{ color: "#264de4", marginRight: "1rem" }} />
              CSS3
            </li>
            <li>
              <SiJavascript style={{ color: "#F0DB4F", marginRight: "1rem" }} />
              JavaScript
            </li>
            <li>
              <SiTypescript style={{ color: "#007acc", marginRight: "1rem" }} />
              TypeScript
            </li>
            <li>
              <FaReact style={{ color: "#61DBFB", marginRight: "1rem" }} />
              React / Redux Toolkit
            </li>
            <li>
              <SiNextdotjs style={{ marginRight: "1rem" }} />
              Next.js
            </li>
            <li>
              <AiFillGithub style={{ marginRight: "1rem" }} />
              Git
            </li>
            <li>
              <DiMongodb style={{ color: "#3FA037", marginRight: "1rem" }} />
              MongoDB
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <h1 className="aboutTitle">About Me</h1>
        <p className="mainDescription">
          Hello! I have been studying coding and programming apps for two years.
          I finished the frontend course, I also had little experience with
          backend. I'm interested in Web Development and acquiring the
          competencies and vocational skills in area of frontend. Willing to
          take on new challenges and develop skills.
        </p>
        <h2 className="educationTitle">Education</h2>
        <p className="educationText">
          I learned programming using various sources:
          <br /> bootcamp, online courses and Youtube channels.
        </p>
        <h2 className="educationTitle">Future Collars Course</h2>

        <ul className="courseList">
          <li>HTML 5</li>
          <li>CSS3</li>
          <li>CSS animation basics</li>
          <li>RWD (Fluid layout, @media, mobile first)</li>
          <li>BEM</li>
          <li>
            JAVASCRIPT Next, asynchrony, communication <br />
            with the backend, debugging methods, destructuring, <br />
            scope
          </li>
          <li>
            REACT 18.x, Functional and class components, props, <br /> state,
            routing (SPA), Hooks
          </li>
          <li>
            best coding practices, teamwork strategies, task planning, <br />
            task duration estimation.
          </li>
        </ul>
      </div>
    </div>
  );
}
