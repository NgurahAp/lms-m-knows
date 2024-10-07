import { fiturCards, CardProps } from "./assets/landingData";
import React from "react";
import Navbar from "./components/Navbar";

const trainingCategories = [
  {
    title: "Backend, Database & API Development: Node.js Ecosystem",
    imageSrc: "/landing/bootcamp/bootcamp (1).png",
    link: "/whatWeDo/training/onlineTraining",
  },
  {
    title: "UI/UX Essentials, Maximizing Web & App Polential",
    imageSrc: "/assets/whatWeDo/training/publicLearning.png",
    link: "/whatWeDo/training/publicLearning",
  },
  {
    title: "Video Editing dan Animation",
    imageSrc: "/assets/whatWeDo/training/inHouseTraining.png",
    link: "/whatWeDo/training/inHouseTraining",
  },
  {
    title: "Unreal Engine 5 Game And Virtual Reality Programming",
    imageSrc: "/assets/whatWeDo/training/onlineLearning.png",
    link: "/whatWeDo/training/onlineTraining",
  },
  {
    title: "Event Management & Sponsorship",
    imageSrc: "/assets/whatWeDo/training/publicLearning.png",
    link: "/whatWeDo/training/publicLearning",
  },
  {
    title: "Project Management Officer",
    imageSrc: "/assets/whatWeDo/training/inHouseTraining.png",
    link: "/whatWeDo/training/inHouseTraining",
  },
  {
    title: "Data Analyst",
    imageSrc: "/assets/whatWeDo/training/onlineLearning.png",
    link: "/whatWeDo/training/onlineTraining",
  },
  {
    title: "Artificial Intelligence",
    imageSrc: "/assets/whatWeDo/training/publicLearning.png",
    link: "/whatWeDo/training/publicLearning",
  },
  {
    title:
      "Data Science Essentials for Banking, Finance, and Fintech Transformation",
    imageSrc: "/assets/whatWeDo/training/inHouseTraining.png",
    link: "/whatWeDo/training/inHouseTraining",
  },
  {
    title: "Digital Marketing, E-Commerce & Social Media Selling",
    imageSrc: "/assets/whatWeDo/training/onlineLearning.png",
    link: "/whatWeDo/training/onlineTraining",
  },
  {
    title: "Scriptwriting and Storyboarding 101 - Video Learning Made Easy",
    imageSrc: "/assets/whatWeDo/training/publicLearning.png",
    link: "/whatWeDo/training/publicLearning",
  },
  {
    title:
      "Web Design Fundamentals - Transforming Lines of Code into Digital Excellence",
    imageSrc: "/assets/whatWeDo/training/inHouseTraining.png",
    link: "/whatWeDo/training/inHouseTraining",
  },
  {
    title: "Complex Game Design & Development (3D & 2D) with Unity",
    imageSrc: "/assets/whatWeDo/training/inHouseTraining.png",
    link: "/whatWeDo/training/inHouseTraining",
  },
  {
    title: "Visual Storytelling Proficiency - Crucial Video Directing Basics",
    imageSrc: "/assets/whatWeDo/training/inHouseTraining.png",
    link: "/whatWeDo/training/inHouseTraining",
  },
  {
    title: "BlenderVerse Explorers Easy 3D Creation Guide",
    imageSrc: "/assets/whatWeDo/training/inHouseTraining.png",
    link: "/whatWeDo/training/inHouseTraining",
  },
  {
    title:
      "Beyond Basics & Advanced Techniques In Mobile Apps Development With Flutter",
    imageSrc: "/assets/whatWeDo/training/inHouseTraining.png",
    link: "/whatWeDo/training/inHouseTraining",
  },
];

export default function App() {
  const Card: React.FC<CardProps> = ({ icon, title }) => (
    <div className="bg-white flex-col justify-center w-72 h-32 p-4 rounded-lg shadow-md flex items-center">
      <img src={icon} alt={title} className="w-12 h-12 " />
      <div>
        <h2 className="text-base pt-2 text-center font-bold">{title}</h2>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />

      <section
        className="h-screen bg-cover bg-no-repeat bg-center max-w-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/landing/hero-bg.png')",
        }}
      >
        <div className="flex w-5/6 h-full">
          <div className="w-11/12 h-full flex flex-col justify-center text-left">
            <h1 className="text-3xl font-light text-gray-600 pb-5">
              Pelatihan
            </h1>
            <h1 className="text-6xl font-bold pb-3">
              Building Confidence & Effective Communication for RBC
            </h1>
            <h1 className="text-2xl font-medium">
              1 - 2 Juli 2024 - Hotel Mercure Cikino, Jakarta
            </h1>
            <img
              src="/landing/logo.png"
              className="w-56 bg-white bg-opacity-20 rounded my-10"
              alt=""
            />
            <div className="flex items-center">
              <button className="w-56 h-14 bg-[#FAB317] text-white font-bold text-xl rounded-lg">
                Klik Disini
              </button>
              <h1 className="text-2xl font-bold pl-5">
                Silahkan login bagi peserta pelatihan.
              </h1>
            </div>
          </div>
          <div className="flex items-center">
            <img src="/landing/hero-right.png" alt="" />
          </div>
        </div>
      </section>
      {/* Fitur LMS */}
      <section className="min-h-screen">
        <div className="w-11/12 mx-auto py-14 ">
          <h1 className="text-5xl text-[#106FA4] text-center font-bold pb-14">
            Fitur <span className="text-[#FAB317]">LMS M-Knows</span>
          </h1>
          <div className="container mx-auto">
            <div className="flex flex-wrap mx-auto justify-center gap-9">
              {fiturCards.map((card, index) => (
                <Card key={index} icon={card.icon} title={card.title} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="w-11/12 mx-auto py-14 ">
          <h1 className="text-5xl text-[#106FA4] text-center font-bold pb-4">
            Bootcamp <span className="text-[#FAB317]">LMS M-Knows</span>
          </h1>
          <h1 className="text-2xl font-light text-center text-gray-600 pb-14">
            Temukan bootcamp yang sesuai dengan minat dan kebutuhan Anda.
          </h1>
          <section className="pb-16 pt-7">
            <div className="container">
              <div className="flex flex-wrap justify-center -mx-10">
                {trainingCategories.map((category, index) => (
                  <a href={category.link} key={index}>
                    <div className="md:w-80 w-80 m-10 cursor-pointer">
                      <div className="relative h-28 rounded-2xl overflow-hidden">
                        <img
                          src={category.imageSrc}
                          alt={category.title}
                          style={{ objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] to-transparent"></div>
                        <div className="flex absolute bottom-0 left-0 p-4">
                          <h3 className="font-semibold underline text-white text-base w-56">
                            {category.title}
                          </h3>
                          <a
                            href={category.link}
                            className="mt-7 h-8 items-center px-3 pt-1 text- font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Basic
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
