interface ProjectListsProps {
  title: string;
  img: any;
  content: string;
  index: number;
}

const ProjectLists = ({ title, img, content, index }: ProjectListsProps) => {
  const flexDirectionClass =
    index % 2 === 0
      ? "xl:flex-row lg:flex-row"
      : "xl:flex-row-reverse lg:flex-row-reverse";
  const paddingX = index % 2 === 0 ? "xl:pr-40 text-xl" : "xl:pl-40 text-xl";

  return (
    <div className="box-border p-0 m-0 h-screen flex flex-col justify-center">
      <h1 className="pb-10 text-white text-4xl font-bold tracking-tighter text-center">
        {title}
      </h1>
      <div className="flex">
        <div
          className={`flex ${flexDirectionClass} justify-center items-center lg:flex-col md:flex-col sm:flex-col`}
        >
          <img src={img} alt={title} />
          <p
            className={`text-white ${paddingX} lg:px-10 md:px-10 sm:px-5 sm:text-base text-justify`}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectLists;
