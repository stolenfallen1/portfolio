import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import Resume from "../Assets/Hero/CV_QUIZEO.pdf";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-end lg:mr-20 min-h-screen">
      <div className="flex flex-col">
        <div>
          <h1 className="text-white font-bold tracking-tigher text-3xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl pb-3 font-montserrat">
            Jhon Llyod Quizeo
          </h1>
          <h3 className="text-white italic text-2xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl pb-5 text-center font-montserrat">
            <TypeAnimation
              sequence={["A junior web dev", 2500, "A junior mobile dev", 2500]}
              repeat={Infinity}
            />
          </h3>
        </div>
        <div className="text-center">
          <Link to="/Projects">
            <button className="border-b-4 border-sky-500 font-montserrat hover:border-sky-700 ease-out duration-150">
              <p className="text-lg xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-white hover:opacity-70 ease-out duration-150">
                View Projects
              </p>
            </button>
          </Link>
          <div>
            <a href={Resume}>Download Resume</a>
          </div>
          <div className="mx-auto flex items-center justify-center mt-5">
            <a href="https://github.com/stolenfallen1" target="_blank">
              <BsGithub className="text-white text-4xl cursor-pointer mx-2 hover:text-zinc-500 ease-in duration-150" />
            </a>
            <a href="https://www.facebook.com/stolenfallen1/" target="_blank">
              <BsFacebook className="text-white text-4xl cursor-pointer mx-2 hover:text-blue-600 ease-in duration-150" />
            </a>
            <a href="https://www.instagram.com/llyd_qzo/" target="_blank">
              <BsInstagram className="text-white text-4xl cursor-pointer mx-2 hover:text-rose-400 ease-in duration-150" />
            </a>
          </div>
          {/* Let's Chat button here */}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
