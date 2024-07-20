import Image from "next/image";
import carImage from "../public/hero.png";
import Meteors from "./ui/meteors";
import GradualSpacing from "./ui/gradual-spacing";
import WordFadeIn from "./ui/word-fadein";
import AnimatedShinyText from "./ui/animated-shiny-text";

const Hero = () => (
  <section className="relative flex items-center justify-between h-screen bg-black text-white overflow-hidden">
    <Meteors />
    <div className="relative z-10 w-1/2 p-10">
      <GradualSpacing
        text="Luxury Car Rentals"
        className="text-5xl font-bold mb-5"
      />
      <WordFadeIn
        words="Experience the luxury and comfort of our premium cars."
        className="text-xl mb-5"
      />
      <AnimatedShinyText shimmerWidth={200} className="text-lg mt-5">
        Discover the finest collection of luxury cars.
      </AnimatedShinyText>
    </div>
    <div className="relative z-10 w-1/2 p-10">
      <Image
        src={carImage}
        alt="Luxury Car"
        layout="responsive"
        width={500}
        height={300}
      />
    </div>
  </section>
);

export default Hero;
