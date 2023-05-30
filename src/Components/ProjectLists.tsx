interface ProjectListsProps {
  title: string;
  img: any;
  content: string;
}

const ProjectLists = ({ title, img, content }: ProjectListsProps) => {
  return (
    <div className="box-border p-0 m-0">
      <h1 className="text-white text-4xl font-bold tracking-tighter text-center">
        {title}
      </h1>
      <div className="flex justify-center items-center">
        <img src={img} alt={title} />
        <p className="text-white">{content}</p>
      </div>
    </div>
  );
};

export default ProjectLists;
