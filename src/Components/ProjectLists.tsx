import { useState, useEffect, useRef } from "react";

interface ProjectListsProps {
  title: string;
  img: any;
  content: string;
  index: number;
  repo: string;
}

const ProjectLists = ({
  title,
  img,
  content,
  index,
  repo,
}: ProjectListsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Adjust the threshold value as needed
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const flexDirectionClass =
    index % 2 === 0
      ? "xl:flex-row lg:flex-row"
      : "xl:flex-row-reverse lg:flex-row-reverse";
  const paddingX = index % 2 === 0 ? "xl:pr-40 text-xl" : "xl:pl-40 text-xl";

  return (
    <div
      className={`box-border p-0 m-0 h-screen flex flex-col justify-center ${
        isVisible ? "animate-scroll" : ""
      }`}
      ref={componentRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1.25s ease-in-out",
      }}
    >
      <h1 className="pb-10 text-white text-4xl font-bold tracking-tighter text-center">
        {title}
      </h1>
      <div className="flex">
        <div
          className={`flex ${flexDirectionClass} lg:flex-col md:flex-col sm:flex-col`}
        >
          <img src={img} alt={title} />
          <div className={`${paddingX} flex flex-col justify-center`}>
            <p
              className={`text-white lg:px-10 md:px-10 sm:px-5 sm:text-base text-justify`}
            >
              {content}
            </p>
            <div className="flex justify-center mt-8">
              <a
                className="text-black bg-white hover:bg-slate-300 text-lg px-3 py-2 rounded"
                href={repo}
                target="_blank"
              >
                Go to Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLists;
