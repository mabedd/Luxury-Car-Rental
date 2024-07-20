import Image from "next/image";
import { BorderBeam } from "./ui/border-beam";

interface Car {
  name: string;
  price: string;
  rating: number;
  imageUrl: string;
}

const cars: Car[] = [
  {
    name: "Luxury Sedan",
    price: "$200/day",
    rating: 4.8,
    imageUrl: "/car1.png", // Ensure you have these images in the public folder
  },
  {
    name: "Convertible",
    price: "$250/day",
    rating: 4.9,
    imageUrl: "/car2.png",
  },
  {
    name: "SUV",
    price: "$300/day",
    rating: 4.7,
    imageUrl: "/car3.png",
  },
  {
    name: "Sports Car",
    price: "$400/day",
    rating: 4.9,
    imageUrl: "/car4.png",
  },
];

const CardsShowcase = () => (
  <section className="p-10 bg-black text-white">
    <h2 className="text-3xl font-bold text-center mb-10">Our Fleet</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cars.map((car, index) => (
        <div
          key={index}
          className="relative p-5 bg-gray-900 rounded-lg overflow-hidden shadow-lg"
        >
          <BorderBeam />
          <Image
            src={car.imageUrl}
            alt={car.name}
            width={400}
            height={200}
            className="rounded-lg mb-5"
          />
          <h3 className="text-xl font-bold mb-2 text-white">{car.name}</h3>
          <p className="text-lg mb-2 text-gray-400">{car.price}</p>
          <p className="text-lg mb-2 text-gray-400">Rating: {car.rating}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CardsShowcase;
