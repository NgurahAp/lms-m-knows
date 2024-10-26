import Clients from "../components/Clients";
import { AboutUs } from "../components/Landing/AboutUs";
import { Article } from "../components/Landing/Article";
import { Bootcamp } from "../components/Landing/Bootcamp";
import { Fiture } from "../components/Landing/Fiture";
import { Hero } from "../components/Landing/Hero";
import { TrainingProgram } from "../components/Landing/TrainingProgram";

export default function Home() {
  return (
    <>
      <Hero />
      <Fiture />
      <TrainingProgram />
      <Bootcamp />
      <AboutUs />
      <Clients />
      <Article />
    </>
  );
}
