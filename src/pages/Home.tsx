import {
  fiturCards,
  programPelatihanCards,
  inHouseCards,
  pelatihanPubliCards,
  sekilasIlmuCards,
  trainingCategories,
} from "../assets/landingData";
import OurClients from "../components/OurClients";

export default function Home() {
  return (
    <>
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
          <section className="pb-16 pt-7">
            <div className="container">
              <div className="flex flex-wrap justify-center -mx-10">
                {trainingCategories.map((category, index) => (
                  <a href="#" key={index}>
                    <div className="md:w-80 w-80 m-10 cursor-pointer">
                      <div className="relative h-28 rounded-2xl overflow-hidden">
                        <img
                          src={category.imageSrc}
                          alt={category.title}
                          style={{ objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] to-transparent"></div>
                        <div className="flex absolute bottom-0 left-0 px-4 py-6">
                          <h3 className="font-semibold underline text-white text-base w-56 -mt-10">
                            {category.title}
                          </h3>
                          <a
                            href="#"
                            className="-mt-10 h-8 items-center px-3 pt-1 text- font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      <section className="bg-blue-700 text-white py-12 px-6 md:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-yellow-400 text-3xl font-bold mb-4">
              Tentang LMS M-Knows
            </h2>
            <p className="mb-4">
              LMS M-Knows adalah sebuah platform LMS (Learning Management
              System) yang dirancang khusus untuk memenuhi kebutuhan perusahaan
              dalam mengelola pembelajaran dan pengembangan karyawan. Platform
              ini menyediakan berbagai fitur yang dapat membantu perusahaan
              dalam menyusun, mengelola, dan menyampaikan materi pembelajaran
              secara efektif.
            </p>
            <p className="mb-4">
              Salah satu fitur utama dari LMS M-Knows adalah kemampuannya untuk
              membuat kursus-kursus yang disesuaikan dengan kebutuhan
              perusahaan. Perusahaan dapat membuat kursus-kursus yang bertujuan
              untuk pengembangan dan pelatihan karyawan, atau pembelajaran
              tertentu untuk meningkatkan keterampilan dan pengetahuan karyawan.
            </p>
            <p className="mb-4">
              Selain itu, LMS M-Knows juga dilengkapi dengan fitur pelacakan
              kemajuan belajar yang memungkinkan perusahaan untuk melihat sejauh
              mana karyawan menyelesaikan materi pembelajaran. Fitur ini
              memungkinkan perusahaan untuk mengidentifikasi karyawan yang
              mungkin memerlukan bantuan tambahan, serta memberikan laporan atas
              pencapaian mereka dalam pembelajaran. Platform ini memberikan
              solusi lengkap untuk mengelola pembelajaran dan pengembangan
              karyawan, sehingga membantu perusahaan tetap kompetitif di pasar
              yang terus berubah.
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <img
              src="/landing/bootcamp/aboutUs.png"
              alt="Person holding a laptop"
              className="w-full h-auto max-w-xs mx-auto"
            />
          </div>
        </div>
      </section>
      <OurClients />
      {/* Sekilas Ilmu */}
      <section className="w-11/12  mx-auto py-14 ">
        <h1 className="text-5xl  px-8 font-bold pb-14 text-center">
          Sekilas Ilmu
        </h1>
        <div className="container mx-auto flex flex-col items-center justify-center">
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
          </div>
          <button className="bg-[#106FA4] w-1/6 text-white font-bold py-4 px-16 mt-10 rounded-lg">
            Lihat semua
          </button>
        </div>
      </section>
    </>
  );
}
