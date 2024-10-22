import { useState } from "react";
import DownloadButton from "./components/downloadButton";
import Dropdown from "./components/dropdown";
import { useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa"; // Import icon chevron
import { Link } from "react-router-dom"; // Untuk navigasi

export const PelatihankuDetail = () => {
  const { pelatihankuId } = useParams<{ pelatihankuId: string }>();

  // const [isPlaying, setIsPlaying] = useState(false); // State to track video play status
  console.log(pelatihankuId);
  return (
    <div className="bg-gray-50 md:p-48 px-8 py-28">
      {/* Header */}
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <Link to="/dashboard" className="flex items-center">
          <img
            src="/pelatihanku/home.png"
            className="md:w-6 w-5 -mt-1 "
            alt="Home"
          />
          <span className="md:pl-5 pl-3 text-blue-500 md:text-base text-sm font-semibold">
            Beranda
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-[#9CA3AF] md:text-base text-sm font-semibold">
          Pelatihan-ku
        </span>
      </div>

      {/* Main Content */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold pb-5">Pendahuluan</h1>
        <div className="flex flex-col lg:flex-row">
          {/* Video Section */}
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <div className="relative">
              {/* Video Element */}
              <video
                className="w-full h-auto rounded-lg"
                poster="/path-to-thumbnail.jpg"
                controls
              >
                <source src="/pelatihanku/live-testing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Duration */}
              <p className="text-sm text-gray-600 mt-2">6 Menit</p>
            </div>
          </div>

          {/* Description Section */}
          <div className="lg:w-2/3 lg:pl-6">
            <h2 className="text-xl font-semibold mb-4">
              Pelatihan Keterampilan Komunikasi
            </h2>
            <h3 className="text-base font-semibold mb-4">Deskripsi</h3>
            <p className="text-base text-gray-500 mb-6 text-justify">
              Pengantar Industri dan Bisnis Keberlanjutan adalah mata kuliah
              yang akan memperkenalkan tentang prinsip-prinsip dasar industri
              dan bisnis berkelanjutan, yang berfokus pada pilar-pilar
              keberlanjutan yaitu ekonomi, lingkungan, dan sosial. Serta, pada
              mata kuliah ini akan dijelaskan bagaimana pentingnya integrasi
              aspek keberlanjutan dalam pengambilan keputusan bisnis, dan juga
              dampaknya terhadap lingkungan dan masyarakat.
            </p>

            {/* Documents Section */}
            <h2 className="text-xl font-semibold mb-4">Dokumen</h2>
            <div className="flex items-center justify-between p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
              <div className="flex items-center w-full">
                <img src="/pelatihanku/pdf.png" className="mr-2" alt="" />
                <div className="flex ml-4 justify-between w-full">
                  <p className="text-gray-700 font-semibold mt-1">
                    Materi Pendahuluan
                  </p>
                  <DownloadButton />
                </div>
              </div>
              <button className="text-green-500 hover:text-green-700"></button>
            </div>
          </div>
        </div>
      </div>

      {/* Pertemuan Section */}
      <div className="mt-6">
        <Dropdown />

        <div className="bg-white w-full h-14 flex items-center justify-between px-5 rounded-xl mb-4">
          <h1 className=" text-[#9CA3AF] md:text-base text-sm font-semibold">
            Pertemuan 2
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V7.875A4.875 4.875 0 007.5 7.875V10.5M7.5 10.5h9a2.25 2.25 0 012.25 2.25v6.75A2.25 2.25 0 0116.5 21H7.5a2.25 2.25 0 01-2.25-2.25v-6.75A2.25 2.25 0 017.5 10.5z"
            />
          </svg>
        </div>

        <div className="bg-white w-full h-14 flex items-center justify-between px-5 rounded-xl mb-4">
          <h1 className=" text-[#9CA3AF] md:text-base text-sm font-semibold">
            Pertemuan 3
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V7.875A4.875 4.875 0 007.5 7.875V10.5M7.5 10.5h9a2.25 2.25 0 012.25 2.25v6.75A2.25 2.25 0 0116.5 21H7.5a2.25 2.25 0 01-2.25-2.25v-6.75A2.25 2.25 0 017.5 10.5z"
            />
          </svg>
        </div>

        <div className="bg-white w-full h-14 flex items-center justify-between px-5 rounded-xl mb-4">
          <h1 className=" text-[#9CA3AF] md:text-base text-sm font-semibold">
            Pertemuan 4
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V7.875A4.875 4.875 0 007.5 7.875V10.5M7.5 10.5h9a2.25 2.25 0 012.25 2.25v6.75A2.25 2.25 0 0116.5 21H7.5a2.25 2.25 0 01-2.25-2.25v-6.75A2.25 2.25 0 017.5 10.5z"
            />
          </svg>
        </div>

        <div className="bg-white w-full h-14 flex items-center justify-between px-5 rounded-xl mb-4">
          <h1 className=" text-[#9CA3AF] md:text-base text-sm font-semibold">
            Pertemuan 5
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V7.875A4.875 4.875 0 007.5 7.875V10.5M7.5 10.5h9a2.25 2.25 0 012.25 2.25v6.75A2.25 2.25 0 0116.5 21H7.5a2.25 2.25 0 01-2.25-2.25v-6.75A2.25 2.25 0 017.5 10.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
