import { useState, useEffect, useRef } from "react";

interface ProjectListsProps {
  title: string;
  img: any;
  content: string;
  index: number;
}

const ProjectLists = ({ title, img, content, index }: ProjectListsProps) => {
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
          className={`flex ${flexDirectionClass} justify-center items-center lg:flex-col md:flex-col sm:flex-col`}
        >
          <img src={img} alt={title} />
          <div className="">
            <p
              className={`text-white ${paddingX} lg:px-10 md:px-10 sm:px-5 sm:text-base text-justify`}
            >
              {content}
            </p>
            <button className="text-white text-lg border-white border-2 px-3 py-2 mt-4 rounded">
              Go to Repo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLists;
