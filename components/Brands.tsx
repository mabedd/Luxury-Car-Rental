import Marquee from "./ui/marquee";
import Image from "next/image";
import brand1 from "../public/audi.png"; // Ensure you have these brand logos in the public folder
import brand2 from "../public/bentley.png";
import brand3 from "../public/ferrari-logo-1.png";
import brand4 from "../public/lamborghini.png";
import brand5 from "../public/maserati.jpg";
import brand6 from "../public/mercedes.png";
import GlowingDivider from "./GlowingDivider";

const Brands = () => (
  <>
    <section className="p-10 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Our Brands
      </h2>
      <Marquee className="text-gray-400">
        <Image src={brand1} alt="Brand 1" className="h-16 w-auto grayscale" />
        <Image src={brand2} alt="Brand 2" className="h-16 w-auto grayscale" />
        <Image src={brand3} alt="Brand 3" className="h-16 w-auto grayscale" />
        <Image src={brand4} alt="Brand 4" className="h-16 w-auto grayscale" />
        <Image src={brand5} alt="Brand 3" className="h-16 w-auto grayscale" />
        <Image src={brand6} alt="Brand 4" className="h-16 w-auto grayscale" />
      </Marquee>
    </section>
  </>
);

export default Brands;
