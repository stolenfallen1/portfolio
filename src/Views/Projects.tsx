/* IMPORT PROJECTS ASSETS / IMAGES */
import ProjectLists from "../Components/ProjectLists";
import Eventr from "../Assets/Web/Eventr.png";
import DIGIBRI from "../Assets/Web/DIGIBRI.png";
import StrawHats from "../Assets/Web/StrawHats.png";
import ToDoApp from "../Assets/Mobile/EXPO_TODO.png";
import WeatherApp from "../Assets/Mobile/EXPO_WEATHER.png";
import MotivationalApp from "../Assets/Mobile/MotivationalApp.png";
import SkillsContent from "../Components/SkillsContent";
/* IMPORT SKILLS IMAGES / LOGO */
import HTML from "../Assets/SkillsLogo/html.png";
import CSS from "../Assets/SkillsLogo/css.png";
import JS from "../Assets/SkillsLogo/javascript.png";
import TS from "../Assets/SkillsLogo/typescript.png";
import PHP from "../Assets/SkillsLogo/php.png";
import TAILWIND from "../Assets/SkillsLogo/tailwind.png";
import BOOTSTRAP from "../Assets/SkillsLogo/bootstrap.png";
import REACT from "../Assets/SkillsLogo/react.png";
import EXPO from "../Assets/SkillsLogo/expo.png";
import NODE from "../Assets/SkillsLogo/nodeJS.png";
import EXPRESS from "../Assets/SkillsLogo/express.png";
import FIREBASE from "../Assets/SkillsLogo/firebase.webp";
import MYSQL from "../Assets/SkillsLogo/mysql.png";

const Projects = () => {
  const projectDataArray = [
    {
      title: "StrawHats",
      img: StrawHats,
      content:
        "A web based system for one piece otaku fans. This will serve as a forum or stack exchange website for one piece lovers.",
      repo: "https://github.com/stolenfallen1/StrawHats",
      skills: [REACT, NODE, EXPRESS, TS, FIREBASE, TAILWIND],
    },
    {
      title: "DIGIBRI",
      img: DIGIBRI,
      content:
        "Web based mobile responsive Library management system. This project is specifically tailored only for Lahug Night High School, This was developed as my capstone project.",
      repo: "https://github.com/stolenfallen1/DIGIBRI",
      skills: [PHP, HTML, CSS, BOOTSTRAP, MYSQL],
    },
    {
      title: "Eventr",
      img: Eventr,
      content:
        "A basic web based gaming event information system. This was project was developing during my stay at DNA Micro during my internship.",
      repo: "https://github.com/stolenfallen1/event_system",
      skills: [REACT, NODE, EXPRESS, JS, FIREBASE, CSS],
    },
    {
      title: "EXPO ToDo App",
      img: ToDoApp,
      content:
        "A very common mobile app. The ToDo App. This is one of my personal projects, I decided to develop this app while I was studying mobile development using react native.",
      repo: "https://github.com/stolenfallen1/Expo-ToDoApp",
      skills: [REACT, EXPO, TAILWIND],
    },
    {
      title: "EXPO Weather App",
      img: WeatherApp,
      content:
        "Weather tracking app, Just like Expo ToDo App. This is one of my personal projects. I choose to develop this kind of project in order to improve my skills on using react native and at the same time be able to experience using third party API's",
      repo: "https://github.com/stolenfallen1/ExpoWeatherApp",
      skills: [REACT, EXPO, TAILWIND],
    },
    {
      title: "Motivational App",
      img: MotivationalApp,
      content:
        "A simple motivational app (Quote Generator w/ notification) to keep you going all throughout your day. This is one of my personal projects. I decided to create this app since I easily get demotivated and I want to have a simple app that will can help motivate me.",
      repo: "https://github.com/stolenfallen1/MotivationalApp",
      skills: [REACT, EXPO, TAILWIND],
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
              repo={project.repo}
              skills={project.skills}
            />
          </div>
        ))}
      </div>
      <div className="pt-20 bg-black">
        <SkillsContent />
      </div>
    </>
  );
};

export default Projects;
