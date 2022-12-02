import "./HeroImg.css";
import React from "react";
import { Link } from "react-router-dom";
import photo from "../assets/photo.jpg";

export default function HeroImg() {
  return (
    <div className="hero">
      <div className="mask"></div>
      <div className="content">
        <div className="left">
          <p className="jobTitile">FRONTEND DEVELOPER</p>
          <h1>Katarzyna Bedlińska </h1>

          <p className="aboutMe">
            Hello! I am an aspiring frontend developer. <br /> I started
            learning app programming about 2 years ago,
            <br />
            and I quickly realized that this is a passion,
            <br /> which I would like to turn into a profession.
            <br />
            <br />I work mainly in React and Javascript
            <br /> but I'm interested in acquiring the further competencies
            <br />
            in area of frontend.
          </p>
          <div className="linksFirsPage">
            <Link to="/projects">
              <button className="btn">Projects</button>
            </Link>
            <Link to="/contact">
              <button className="btn btn-light">Contact</button>
            </Link>
          </div>
        </div>

        <div className="right">
          <div>
            <div className="image">
              <img src={photo} alt="Photo of myself" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
