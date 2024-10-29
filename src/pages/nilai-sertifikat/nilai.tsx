import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Sertifikat } from "./popup";
import { useStudentScores } from "../../services/NilaiService";

export const Nilai: React.FC = () => {
  const { data, isLoading, isError, error } = useStudentScores();
  console.log(data);

  const [activeTab, setActiveTab] = useState<"nilai" | "sertifikat">("nilai");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDownload = () => {
    alert("Certificate Downloaded!");
  };

  const tabs = [
    { id: "nilai", label: "Nilai" },
    { id: "sertifikat", label: "Sertifikat" },
  ];

  const courses = [
    {
      title: "Pelatihan Keterampilan Komunikasi",
      instructor: "Indah Saritem, S.Ak, M.Ak",
      status: "Selesai",
    },
    {
      title: "Pelatihan Keterampilan Komunikasi",
      instructor: "Indah Saritem, S.Ak, M.Ak",
      status: "Selesai",
    },
    {
      title: "Pelatihan Keterampilan Komunikasi",
      instructor: "Indah Saritem, S.Ak, M.Ak",
      status: "Selesai",
    },
    {
      title: "Pelatihan Keterampilan Komunikasi",
      instructor: "Indah Saritem, S.Ak, M.Ak",
      status: "Selesai",
    },
  ];

  return (
    <div className="h-screen w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
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
          Nilai & Sertifikat
        </span>
      </div>

      <div className="bg-white w-full h-14 flex items-center justify-between p-9 mt-5 rounded-xl mb-4">
        <h1 className=" md:text-lg text-sm font-semibold">
          Nilai dan Sertifikat
        </h1>
      </div>

      <div className="bg-white rounded-lg shadow-lg w-full">
        <div className="p-8">
          <div className="flex flex-wrap border-b border-white">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-4 px-10 text-xl font-semibold border-1 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-blue-500 border-b-4 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards Section */}
          {activeTab === "nilai" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white p-4 border rounded-lg shadow-md"
                >
                  <h3 className="font-medium text-lg mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {course.instructor}
                  </p>
                  <div className="justify-between flex">
                    <p className="text-sm  mb-4">Status Perkuliahan</p>
                    <span className="text-green-500 font-medium">
                      {course.status}
                    </span>
                  </div>

                  <div className="flex">
                    <Link to="/pelatihan-keterampilan">
                      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg w-2x1 ml-auto">
                        Lihat Detail
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "sertifikat" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white p-4 border rounded-lg shadow-md"
                >
                  <h3 className="font-medium text-lg mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {course.instructor}
                  </p>

                  <div className="flex">
                    <button
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg w-2x1 ml-auto"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Lihat Sertifikat
                    </button>
                    <Sertifikat
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                      onDownload={handleDownload}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
