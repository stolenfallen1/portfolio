interface ProjectListsProps {
  title: string;
  img: any;
  content: string;
  index: number;
}

const ProjectLists = ({ title, img, content, index }: ProjectListsProps) => {
  const flexDirectionClass = index % 2 === 0 ? "flex-row" : "flex-row-reverse";
  const paddingX = index % 2 === 0 ? "pr-40" : "pl-40";

  return (
    <div className="box-border p-0 m-0 h-screen flex flex-col justify-center">
      <h1 className="pb-10 text-white text-4xl font-bold tracking-tighter text-center">
        {title}
      </h1>
      <div className="flex">
        <div
          className={`flex ${flexDirectionClass} justify-center items-center`}
        >
          <img src={img} alt={title} />
          <p className={`text-white ${paddingX} text-justify`}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectLists;
