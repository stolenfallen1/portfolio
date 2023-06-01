import ProjectLists from "../Components/ProjectLists";
import Eventr from "../Assets/Web/Eventr.png";
import DIGIBRI from "../Assets/Web/DIGIBRI.png";
import ToDoApp from "../Assets/Mobile/EXPO_TODO.png";
import WeatherApp from "../Assets/Mobile/EXPO_WEATHER.png";

const Projects = () => {
  const projectDataArray = [
    {
      title: "Eventr",
      img: Eventr,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates ex provident repudiandae. Vel quas eligendi aut inventore veniam labore.",
    },
    {
      title: "DIGIBRI",
      img: DIGIBRI,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates ex provident repudiandae. Vel quas eligendi aut inventore veniam labore.",
    },
    {
      title: "EXPO ToDo App",
      img: ToDoApp,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates ex provident repudiandae. Vel quas eligendi aut inventore veniam labore.",
    },
    {
      title: "EXPO Weather App",
      img: WeatherApp,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates ex provident repudiandae. Vel quas eligendi aut inventore veniam labore.",
    },
  ];

  return (
    <>
      <div className="bg-black">
        {projectDataArray.map((project, index) => (
          <div key={index}>
            <ProjectLists
              title={project.title}
              img={project.img}
              content={project.content}
              index={index}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
