import HeroImg2 from "./HeroImg2";
import Work from "./Work";

import React from "react";

export default function Projects() {
  const textProjects = (
    <p>
      Some of my most recent works made mainly with React <br />
      but also with JavaScript, TypeScript and Next.js
      <br />
      <br />
      Here is also one fullstack project using Next.js and MongoDB
    </p>
  );

  return (
    <>
      <HeroImg2 heading="PROJECTS" text={textProjects} />
      <Work />
    </>
  );
}
