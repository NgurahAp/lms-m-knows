// import DownloadButton from "./components/downloadButton";
import { useParams } from "react-router-dom";
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa"; // Import icon chevron
import { Link } from "react-router-dom"; // Untuk navigasi
import { useSubjectData } from "../../services/MyStudyService";
import { useState } from "react";

export const PelatihankuDetail = () => {
  const { pelatihankuId } = useParams<{ pelatihankuId: string }>();

  const { data, isLoading, error } = useSubjectData(pelatihankuId || ""); // Berikan default empty string
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (!pelatihankuId) {
    return (
      <div className="h-screen flex items-center justify-center">
        ID Pelatihan tidak ditemukan
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        Error fetching dashboard data or banner
      </div>
    );
  }

  // const [isPlaying, setIsPlaying] = useState(false); // State to track video play status
  console.log(data);
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
              <img src={data?.subject.thumbnail} alt="" />
            </div>
          </div>

          {/* Description Section */}
          <div className="lg:w-2/3 lg:pl-14">
            <h2 className="text-xl font-semibold mb-4">{data?.subject.name}</h2>
            <h3 className="text-base font-semibold mb-4">Deskripsi</h3>
            <p className="text-base text-gray-500 mb-6 text-justify">
              {data?.subject.description}
            </p>

            {/* Documents Section
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
            </div> */}
          </div>
        </div>
      </div>

      {/* Pertemuan Section */}
      <div className="mt-6">
        {data?.sessions.map((session, index) => (
          <div key={session.id} className="mb-4">
            {index === 0 ? (
              // Dropdown untuk pertemuan pertama
              <div className="mx-auto my-4 bg-white rounded-lg shadow">
                <button
                  onClick={toggleDropdown}
                  className="w-full flex justify-between h-14 items-center bg-blue-500 text-white px-4 py-2 rounded-t-lg"
                >
                  <span>
                    Pertemuan {index + 1}: {session.title}
                  </span>
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {isOpen && (
                  <div className="bg-gray-50">
                    <ul>
                      <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
                        <img
                          src="/pelatihanku/modul.png"
                          className="mr-2"
                          alt=""
                        />
                        Modul
                      </li>
                      <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
                        <img
                          src="/pelatihanku/quiz.png"
                          className="mr-2"
                          alt=""
                        />
                        Quiz
                      </li>
                      <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
                        <img
                          src="/pelatihanku/tugas.png"
                          className="mr-2"
                          alt=""
                        />
                        Tugas
                      </li>
                      <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
                        <img
                          src="/pelatihanku/diskusi.png"
                          className="mr-2"
                          alt=""
                        />
                        Diskusi
                      </li>
                      <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
                        <img
                          src="/pelatihanku/live.png"
                          className="mr-2"
                          alt=""
                        />
                        Live Mentoring
                      </li>
                      <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
                        <img
                          src="/pelatihanku/eksplorasi.png"
                          className="mr-2"
                          alt=""
                        />
                        Refleksi Eksplorasi
                      </li>
                      <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
                        <img
                          src="/pelatihanku/kualitas.png"
                          className="mr-2"
                          alt=""
                        />
                        Kualitas Pengajar & Materi Ajar
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              // Pertemuan yang terkunci/tidak terkunci
              <div
                className={`bg-white w-full h-14 flex items-center justify-between px-5 rounded-xl ${
                  session.is_locked
                    ? "cursor-not-allowed opacity-75"
                    : "cursor-pointer"
                }`}
              >
                <h1 className="text-gray-700 md:text-base text-sm font-semibold">
                  Pertemuan {index + 1}: {session.title}
                </h1>
                {session.is_locked ? (
                  // Icon gembok untuk sesi yang terkunci
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V7.875A4.875 4.875 0 007.5 7.875V10.5M7.5 10.5h9a2.25 2.25 0 012.25 2.25v6.75A2.25 2.25 0 0116.5 21H7.5a2.25 2.25 0 01-2.25-2.25v-6.75A2.25 2.25 0 017.5 10.5z"
                    />
                  </svg>
                ) : (
                  // Icon atau elemen lain untuk sesi yang tidak terkunci
                  <FaChevronRight className="text-gray-400" />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
