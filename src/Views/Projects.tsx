import React from "react";
import ProjectLists from "../Components/ProjectLists";

const Projects = () => {
  const title = "HELLO WORLD";
  const img = "ANY";
  const content = "HELLO CEBU";

  return (
    <>
      <div>
        <ProjectLists title={title} img={img} content={content} />
      </div>
      <div>
        <ProjectLists title={title} img={img} content={content} />
      </div>
    </>
  );
};

export default Projects;
