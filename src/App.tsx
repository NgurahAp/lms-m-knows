import {
  fiturCards,
  programPelatihanCards,
  inHouseCards,
  pelatihanPubliCards,
  sekilasIlmuCards,
} from "./assets/landingData";
import Navbar from "./components/Navbar";
import OurClients from "./components/ourClients";

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
      <OurClients />
      {/* InHouse Training */}
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
      <footer className="h-[65vh] px-16 md:pt-32 pt-14 relative">
        <img
          src="/assets/home/navbar-logo.png"
          alt="M-Knows Logo"
          width={126}
          height={32}
          className="rounded-3xl"
        />
        <div className="flex md:flex-row flex-col justify-between">
          <div className="flex-1 p-4">
            <h2 className="text-lg">Contact Us</h2>
            <div className="w-20 h-1 bg-[#626262] mt-1 mb-2"></div>
            <p className="text-[#868A92] text-lg">
              Inhouse Training: 021-720 9729
            </p>
            <p className="text-[#868A92] text-lg">
              Public Training: 021-726 5274
            </p>
            <p className="text-[#868A92] text-lg">WhatsApp: 0812-1046-8281</p>
            <p className="text-[#868A92] text-lg">
              Email: learning@m-knowsconsulting.com
            </p>
          </div>
          <div className="flex-1 p-4">
            <h2 className="text-lg">Surabaya Branch Office</h2>
            <div className="w-20 h-1 bg-[#626262] mt-1 mb-2"></div>
            <p className="text-[#868A92] text-lg">
              Jl. Raya Darmo Permai III Surabaya
            </p>
            <p className="text-[#868A92] text-lg">Telp: 031-8570-5277</p>
            <p className="text-[#868A92] text-lg">
              Email: surabaya@m-knowsconsulting.com
            </p>
          </div>
          <div className="flex-1 p-4">
            <h2 className="text-lg">Alamat Utama</h2>
            <div className="w-20 h-1 bg-[#626262] mt-1 mb-2"></div>
            <p className="text-[#868A92] text-lg">
              Jl. Radio IV No.8B Barito Kebayoran Baru, Jakarta Selatan
            </p>
          </div>
          <div className="flex-1 p-4">
            <h2 className="text-lg">Alamat Produksi</h2>
            <div className="w-20 h-1 bg-[#626262] mt-1 mb-2"></div>
            <p className="text-[#868A92] text-lg">
              Jl. Cirendeu Raya No. 61 Ciputat, Tangerang Sealatan 15419
            </p>
          </div>
        </div>
        <div className="w-full h-1 bg-[#BCBEC3] mt-12 mb-2"></div>
        <div className="flex md:flex-row flex-col items-center ">
          <div className="flex pt-5">
            <img
              src="/assets/home/linkedin-icon.png"
              alt="Linked In"
              width={50}
              height={50}
              className="rounded-2xl mr-6"
            />
            <img
              src="/assets/home/fb-icon.png"
              alt="Facebook"
              width={50}
              height={50}
              className="rounded-2xl mr-6"
            />
            <img
              src="/assets/home/ig-icon.png"
              alt="Instagram"
              width={50}
              height={50}
              className="rounded-2xl mr-6"
            />
            <img
              src="/assets/home/yt-icon.png"
              alt="YouTube"
              width={50}
              height={50}
              className="rounded-2xl mr-6"
            />
          </div>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 md:pt-4 pt-28 md:text-lg text-md text-center text-[#868A92]">
            2024 - www.Mknowsconsulting - Hak Cipta Dilindungi.
          </h1>
        </div>
      </footer>
    </>
  );
}
