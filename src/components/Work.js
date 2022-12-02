import WorkCard from "./WorkCard";
import "./WorkCard.css";
import WorkCardData from "./WorkCardData";

import React from "react";

export default function Work() {
  return (
    <div className="project-container">
      {WorkCardData.map((val, ind) => {
        return (
          <WorkCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            source={val.source}
            technologies={val.technologies}
          />
        );
      })}
    </div>
  );
}
