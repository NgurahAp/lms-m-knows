import { fiturCards, CardProps } from "./assets/landingData";
import React from "react";
import Navbar from "./components/Navbar";

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
      {/* Hero */}
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
      <section className="h-screen "></section>
    </>
  );
}
