interface ProjectListsProps {
  title: string;
  img: any;
  content: string;
  index: number;
}

const ProjectLists = ({ title, img, content, index }: ProjectListsProps) => {
  const flexDirectionClass = index % 2 === 0 ? "flex-row" : "flex-row-reverse";

  return (
    <div className="box-border p-0 m-0">
      <h1 className="pt-20 pb-10 text-white text-4xl font-bold tracking-tighter text-center">
        {title}
      </h1>
      <div className="flex">
        <div
          className={`flex ${flexDirectionClass} justify-center items-center px-10`}
        >
          <img src={img} alt={title} />
          <p className="text-white">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectLists;
