import HeroContent from "../Components/HeroContent";
import HeroImage from "../Assets/Hero/bg-image.jpeg";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src={HeroImage}
        alt="Hero background"
        className="object-cover w-full h-screen"
      />
      <div className="h-screen absolute inset-0 bg-gradient-to-t from-black/90 to-black/40 z-999">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
