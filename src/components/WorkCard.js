import "./WorkCard.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function WorkCard({
  imgsrc,
  title,
  text,
  technologies,
  view,
  source,
}) {
  return (
    <div className="project-card">
      <img src={imgsrc} alt="image" />
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p>{text}</p>
        <div className="techContainer">
          {technologies.map((val, ind) => {
            return (
              <button key={ind} className="technologies">
                {val}
              </button>
            );
          })}
        </div>
        <div className="pro-btns">
          <a href={view} className="btn">
            View
          </a>
          <a href={source} className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
