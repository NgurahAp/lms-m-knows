import {
  fiturCards,
  programPelatihanCards,
  inHouseCards,
  pelatihanPubliCards,
  sekilasIlmuCards,
} from "./assets/landingData";
import Navbar from "./components/Navbar";
import OurClients from "./components/ourClients";

const trainingCategories = [
  {
    title: "Online Learning",
    imageSrc: "/assets/whatWeDo/training/onlineLearning.png",
    link: "/whatWeDo/training/onlineTraining",
  },
  {
    title: "Public Learning",
    imageSrc: "/assets/whatWeDo/training/publicLearning.png",
    link: "/whatWeDo/training/publicLearning",
  },
  {
    title: "In-House Training",
    imageSrc: "/assets/whatWeDo/training/inHouseTraining.png",
    link: "/whatWeDo/training/inHouseTraining",
  },
];

export default function App() {
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
      <section className="w-11/12  mx-auto py-14 ">
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
      <section className="w-11/12  mx-auto py-14 ">
        <h1 className="text-5xl text-[#106FA4] px-8 font-bold pb-14">
          In House Training
          <span className="text-[#FAB317]"> LMS M-Knows</span>
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-auto justify-center gap-5">
            {inHouseCards.map((card) => (
              <div className="w-96 bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-60"
                    src={card.image}
                    alt=""
                  />
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
      {/* Pelatihan Public */}
      <section className="w-11/12  mx-auto py-14 ">
        <h1 className="text-5xl text-[#106FA4] px-8 font-bold pb-14">
          Pelatihan
          <span className="text-[#FAB317]"> Publik</span>
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-auto justify-center gap-5">
            {pelatihanPubliCards.map((card) => (
              <div className="w-96 bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-60"
                    src={card.image}
                    alt=""
                  />
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
       <section className="min-h-screen">
        <div className="w-11/12 mx-auto py-14 ">
          <h1 className="text-5xl text-[#106FA4] text-center font-bold pb-4">
            Bootcamp <span className="text-[#FAB317]">LMS M-Knows</span>
          </h1>
          <h1 className="text-2xl font-light text-center text-gray-600 pb-14">
            Temukan bootcamp yang sesuai dengan minat dan kebutuhan Anda.
          </h1>
          <section className="pb-16 pt-7 min-h-[40vh]">
            <div className="container mx-auto">
              <div className="flex flex-wrap justify-center -mx-10">
                {/* Looping melalui data trainingCategories */}
                {trainingCategories.map((category, index) => (
                  <a href={category.link} key={index}>
                    <div className="md:w-96 w-80 m-10 cursor-pointer">
                      <div className="relative h-56 rounded-3xl overflow-hidden">
                        <img
                          src={category.imageSrc}
                          alt={category.title}
                          style={{ objectFit: "cover" }}
                          className="rounded-[15px]"
                        />
                        <div className="mt-28 absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <h3 className="text-white md:text-2xl text-base">
                            {category.title}
                          </h3>
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
      <OurClients />
      {/* Sekilas Ilmu */}
      <section className="w-11/12  mx-auto py-14 ">
        <h1 className="text-5xl  px-8 font-bold pb-14 text-center">
          Sekilas Ilmu
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-auto justify-center gap-5">
            {sekilasIlmuCards.map((card) => (
              <div className="w-96 bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-60"
                    src={card.image}
                    alt=""
                  />
                </a>
                <div className="px-5 py-5  flex items-end">
                  <a href="#" className="w-full">
                    <div className="flex justify-between pb-3 items-center">
                      <h1 className="text-left font-bold bg-[#E3FBDA] p-1">
                        {card.category}
                      </h1>
                      <h2 className="text-right text-[#737373]">{card.date}</h2>
                    </div>
                    <h5 className="mb-2 text-2xl min-h-14 font-bold tracking-tight ">
                      {card.title}
                    </h5>
                    <p className="text-base text-[#737373]">
                      {card.description}
                    </p>
                    <div className="flex justify-between pb-3 items-center pt-10">
                      <p className="text-base text-[#737373]">{card.views}</p>
                      <img src="/landing/sekilasIlmu/save.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            ))}
            <button className="bg-[#106FA4] text-white font-bold py-4 px-16 mt-10 rounded-lg">
              Lihat semua
            </button>
          </div>
        </div>
      </section>
      <footer className="h-full px-16 py-16 relative bg-[#F5F5F5]">
        <div className="flex md:flex-row flex-col justify-between">
          <div className="flex-1 p-4">
            <img
              src="/landing/footer/logo.png"
              alt="M-Knows Logo"
              className="rounded-3xl w-auto h-16"
            />
            <div className="flex pt-6 pb-4 gap-x-7">
              <img
                src="/landing/footer/fb.png"
                alt="M-Knows Logo"
                className="rounded-3xl w-auto h-6"
              />
              <img
                src="/landing/footer/ig.png"
                alt="M-Knows Logo"
                className="rounded-3xl w-auto h-6"
              />
              <img
                src="/landing/footer/twitter.png"
                alt="M-Knows Logo"
                className="rounded-3xl w-auto h-6"
              />
              <img
                src="/landing/footer/linkedin.png"
                alt="M-Knows Logo"
                className="rounded-3xl w-auto h-6"
              />
            </div>
            <img
              src="/landing/footer/playStore.png"
              alt="M-Knows Logo"
              className="rounded-3xl w-auto h-20"
            />
          </div>
          <div className="flex-1 p-4">
            <h2 className="text-lg font-bold pb-4">Halaman</h2>
            <p className=" py-3 text-lg">Pelatihanku</p>
            <p className=" py-3 text-lg">Penugasan</p>
            <p className=" py-3 text-lg">Asesmen</p>
          </div>
          <div className="flex-1 p-4">
            <h2 className="text-lg font-bold pb-4">Kontak</h2>
            <p className=" py-3 text-lg">+6285183004001</p>
            <p className=" py-3 text-lg">info@kampusgratis.com</p>
          </div>
          <div className="flex-1 p-4">
            <h2 className="text-lg font-bold pb-4">Alamat</h2>
            <p className="text-lg">
              <span className="font-semibold">Utama</span> : Jl. Radio IV No.8B
              Barito Kebayoran Baru, Jakarta Selatan 12130
            </p>
            <p className="text-lg">
              <span className="font-semibold">Produksi</span> : Jl. Raya
              Cirendeu No.61, Tangerang Selatan 15419
            </p>
            <p className="text-lg">
              <span className="font-semibold">Cabang</span> : Jl. Raya Darmo
              Permai III Surabaya. 60119
            </p>
          </div>
        </div>
      </footer>

    </>
  );
}
