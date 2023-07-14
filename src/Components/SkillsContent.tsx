import FIGMA from "../Assets/SkillsLogo/figma.png";
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
import MONGO from "../Assets/SkillsLogo/mongoDB.png";
import FIREBASE from "../Assets/SkillsLogo/firebase.webp";
import MYSQL from "../Assets/SkillsLogo/mysql.png";
import POSTMAN from "../Assets/SkillsLogo/postman.svg";
import VITE from "../Assets/SkillsLogo/vite.png";
import GIT from "../Assets/SkillsLogo/git.png";

const SkillsContent = () => {
  return (
    <div className="mt-20 px-20 pb-10">
      <h1 className="text-white text-4xl font-bold tracking-tighter text-center">
        SKILLS
      </h1>
      <div className="grid lg:grid-cols-9 md:grid-cols-6 sm:grid-cols-3 lg:gap-10 md:gap-4 sm:gap-2 items-center mt-16">
        <img src={FIGMA} alt="HTML" style={{ width: "60px" }} />
        <img src={HTML} alt="HTML" style={{ width: "85px" }} />
        <img src={CSS} alt="HTML" style={{ width: "76px" }} />
        <img src={JS} alt="HTML" style={{ width: "100px" }} />
        <img src={TS} alt="HTML" style={{ width: "75px" }} />
        <img src={PHP} alt="HTML" style={{ width: "110px" }} />
        <img src={TAILWIND} alt="HTML" style={{ width: "110px" }} />
        <img src={BOOTSTRAP} alt="HTML" style={{ width: "100px" }} />
        <img src={REACT} alt="HTML" style={{ width: "85px" }} />
        <img src={EXPO} alt="HTML" style={{ width: "95px" }} />
        <img src={NODE} alt="HTML" style={{ width: "110px" }} />
        <img src={EXPRESS} alt="HTML" style={{ width: "110px" }} />
        <img src={MONGO} alt="HTML" style={{ width: "130px" }} />
        <img src={FIREBASE} alt="HTML" style={{ width: "130px" }} />
        <img src={MYSQL} alt="HTML" style={{ width: "130px" }} />
        <img src={POSTMAN} alt="HTML" style={{ width: "90px" }} />
        <img src={VITE} alt="HTML" style={{ width: "75px" }} />
        <img src={GIT} alt="HTML" style={{ width: "75px" }} />
      </div>
    </div>
  );
};

export default SkillsContent;
