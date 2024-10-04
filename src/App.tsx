import { fiturCards, programPelatihanCards, inHouseCards } from "./assets/landingData";
import Navbar from "./components/Navbar";

export default function App() {
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
              {fiturCards.map((card) => (
                <div className="bg-white flex-col justify-center w-72 h-32 p-4 rounded-lg shadow-md flex items-center">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-12 h-12 "
                  />
                  <div>
                    <h2 className="text-base pt-2 text-center font-bold">
                      {card.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Program pelatihan & LMS M-Knows */}
      <section className="w-11/12  mx-auto py-14 bg-slate-300">
        <h1 className="text-5xl text-[#106FA4] px-8 font-bold pb-14">
          Program Pelatihan dan
          <span className="text-[#FAB317]"> LMS M-Knows</span>
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-auto justify-center gap-5">
            {programPelatihanCards.map((card) => (
              <div className="w-96 bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#">
                  <img className="rounded-t-lg w-full" src={card.icon} alt="" />
                </a>
                <div className="px-5 py-10">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      {card.title}
                    </h5>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* InHouse Training */}
      <section className="w-11/12  mx-auto py-14 bg-slate-300">
        <h1 className="text-5xl text-[#106FA4] px-8 font-bold pb-14">
          In House Training
          <span className="text-[#FAB317]"> LMS M-Knows</span>
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-auto justify-center gap-5">
            {inHouseCards.map((card) => (
              <div className="w-96 bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#">
                  <img className="rounded-t-lg w-full h-60" src={card.image} alt="" />
                </a>
                <div className="px-5 py-5 flex items-end ">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold  tracking-tight text-gray-900 ">
                      {card.title}
                    </h5>
                    <p className="text-lg">{card.pt}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
