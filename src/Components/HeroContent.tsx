import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center items-end h-screen pr-20">
      <div className="flex flex-col">
        <div>
          <h1 className="text-white text-7xl pb-3">Jhon Llyod Quizeo</h1>
          <h3 className="text-white text-4xl pb-5 text-center">
            A junior web / mobile developer
          </h3>
        </div>
        <div className="text-center">
          <Link to="/Projects">
            <button className="text-white text-2xl border-b-2 border-sky-500">
              View Projects
            </button>
          </Link>
          <div className="mx-auto flex items-center justify-center mt-5">
            <BsFacebook className="text-white text-4xl cursor-pointer mx-2" />
            <BsGithub className="text-white text-4xl cursor-pointer mx-2" />
            <BsInstagram className="text-white text-4xl cursor-pointer mx-2" />
          </div>
          {/* Let's Chat button here */}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
