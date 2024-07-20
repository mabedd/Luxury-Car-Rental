import Head from "next/head";

import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import TweetCards from "@/components/TweetCards";
import CardsShowcase from "@/components/CardsShowCase";
import Stats from "@/components/Stats";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="dark bg-black">
      <Head>
        <title>Luxury Car Rentals</title>
        <meta
          name="description"
          content="Luxury Car Rentals - Experience the luxury and comfort of our premium cars"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-20">
        <Hero />
        <Brands />
        <CardsShowcase />
        <Stats />
        <TweetCards />
      </main>
      <Footer />
    </div>
  );
}
