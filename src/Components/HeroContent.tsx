import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center items-end h-screen pr-20">
      <div className="flex flex-col">
        <div>
          <h1 className="text-white text-6xl pb-3 font-montserrat">
            Jhon Llyod Quizeo
          </h1>
          <h3 className="text-white text-3xl pb-5 text-center font-montserrat">
            <TypeAnimation
              sequence={[
                "A junior web developer",
                2500,
                "A junior mobile developer",
                2500,
              ]}
              repeat={Infinity}
            />
          </h3>
        </div>
        <div className="text-center">
          <Link to="/Projects">
            <button className="border-b-4 border-sky-500 font-montserrat hover:border-sky-700 ease-out duration-150">
              <p className="text-2xl text-white hover:opacity-70 ease-out duration-150">
                View Projects
              </p>
            </button>
          </Link>
          <div className="mx-auto flex items-center justify-center mt-5">
            <BsFacebook className="text-white text-4xl cursor-pointer mx-2 hover:text-blue-600 ease-in duration-150" />
            <BsGithub className="text-white text-4xl cursor-pointer mx-2 hover:text-zinc-500 ease-in duration-150" />
            <BsInstagram className="text-white text-4xl cursor-pointer mx-2 hover:text-rose-400 ease-in duration-150" />
          </div>
          {/* Let's Chat button here */}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
