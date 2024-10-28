import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { trainingCategories } from "../../assets/landingData";

export const Bootcamp = () => {
  return (
    <div className="h-full w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <Link to="/dashboard" className="flex items-center">
          <img
            src="/pelatihanku/home.png"
            className="md:w-6 w-5 -mt-1"
            alt="Home"
          />
          <span className="md:pl-5 pl-3 text-blue-500 md:text-base text-sm font-semibold">
            Beranda
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-[#9CA3AF] md:text-base text-sm font-semibold">
          Bootcamp
        </span>
      </div>

      <div className="bg-white py-10 mt-6">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl text-[#106FA4] font-bold pb-8">
            Program Bootcamp
          </h1>
          <h2 className="text-3xl font-bold">Selamat datang di LMS M-Knows!</h2>
          <p className="text-[#6B7280] text-xl px-56 text-center pt-3">
            Dengan bangga mempersembahkan bootcamp unggulan kami yang dirancang
            khusus untuk membantu mengembangkan keterampilan dan pengetahuan
            Anda, dalam berbagai bidang. Bootcamp kami, menawarkan pelatihan
            intensif dengan para mentor yang ahli dan berpengalaman dalam
            beragam industri, Mempersiapkan diri Anda untuk sukses di dunia
            kerja yang kompetitif.
          </p>
          <div className="flex space-x-4 pt-5">
            <button className="px-4 py-2 bg-[#d8b388] text-gray-800 font-semibold rounded-md shadow-md hover:bg-[#c69a76] transition duration-300">
              Informasi Lanjut
            </button>
            <button className="px-4 py-2 bg-[#1d71b8] text-white font-semibold rounded-md shadow-md hover:bg-[#155a8a] transition duration-300">
              Daftar Sekarang
            </button>
          </div>
          <h1 className="text-3xl text-[#106FA4] font-bold pt-12">
            Daftar Bootcamp
          </h1>
          <p className="text-[#6B7280] text-xl px-56 text-center py-3">
            Temukan Bootcamp yang sesuai dengan minat dan kebutuhan anda!
          </p>
          <div className="flex flex-wrap justify-center gap-10 pt-5">
            {trainingCategories.map((category, index) => (
              <div
                className="w-96 h-40 relative overflow-hidden rounded-lg shadow-2xl" // Menambahkan shadow-2xl
                key={index}
              >
                {/* Background Image */}
                <img
                  src={category.imageSrc}
                  alt="background"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Semi-transparent overlay untuk memastikan teks tetap terbaca */}
                <div className="absolute inset-0 bg-black/50" />{" "}
                {/* Menambah kegelapan overlay */}
                {/* Container untuk text dengan flex untuk vertical centering */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <h3 className="text-white font-medium text-xl px-6">
                    {category.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
