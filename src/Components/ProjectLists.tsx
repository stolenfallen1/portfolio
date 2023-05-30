import React from "react";

interface ProjectListsProps {
  title: string;
  img: any;
  content: string;
}

const ProjectLists = ({ title, img, content }: ProjectListsProps) => {
  return (
    <div>
      <h1 className="text-black">{title}</h1>
      <img src={img} alt={title} />
      <p className="text-black">{content}</p>
    </div>
  );
};

export default ProjectLists;
