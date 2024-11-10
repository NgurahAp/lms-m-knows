import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNilaiResponse } from "../../services/NilaiService";
import { FaChevronRight } from "react-icons/fa";

export const PilihRoleplay: React.FC = () => {
  const {
    data: nilaiResponse,
    isLoading: isNilaiLoading,
    isError: isNilaiError,
  } = useNilaiResponse();

  const [activeTab, setActiveTab] = useState<"daftar" | "terjadwal" | "selesai">("daftar");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDownload = () => {
    alert("Certificate Downloaded!");
  };

  if (isNilaiLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isNilaiError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error fetching nilai response.
      </div>
    );
  }

  // Mengakses subjects dari dalam properti data
  const subjects = nilaiResponse?.subjects ?? [];
  console.log(subjects);

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
          Roleplay
        </span>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-[#9CA3AF] md:text-base text-sm font-semibold">
          Pilih Roleplay
        </span>
      </div>

      <div className="bg-white w-full h-14 flex items-center justify-between p-9 mt-5 rounded-xl mb-4">
        <h1 className=" md:text-lg text-sm font-semibold">Roleplay</h1>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-lg shadow-lg w-full">
        {/* Tabs */}
        <div className="p-8">
          <div className="flex flex-wrap border-b border-white">
            <button
              className={`py-4 px-10 md:text-xl text-lg font-semibold border-1 whitespace-nowrap ${
                activeTab === "daftar"
                  ? "text-blue-500 border-b-4 border-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("daftar")}
            >
              Daftar
            </button>
            <button
              className={`py-4 px-10 md:text-xl text-lg font-semibold border-1 whitespace-nowrap ${
                activeTab === "terjadwal"
                  ? "text-blue-500 border-b-4 border-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("terjadwal")}
            >
              Terjadwal
            </button>
            <button
              className={`py-4 px-10 md:text-xl text-lg font-semibold border-1 whitespace-nowrap ${
                activeTab === "selesai"
                  ? "text-blue-500 border-b-4 border-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("selesai")}
            >
              Selesai
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === "daftar" && (
            <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
              {/* Label */}
              <span className="absolute top-2 right-2 bg-blue-200 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                Roleplay
              </span>

              {/* Image */}
              <img
                src="/roleplay/daftar-roleplay-1.png"
                alt="Roleplay Image"
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Roleplay Kewirausahaan
                </h3>
                <p className="text-gray-500 text-sm mt-2">Rizki Pratama</p>

                {/* Buttons */}
                <div className="flex justify-center mt-4">
                  <button className="px-6 py-2 mr-6 text-sm text-gray-700 border border-gray-300 rounded-lg">
                    Lihat Detail
                  </button>
                  <button className="px-10 py-2 text-sm text-white bg-blue-500 rounded-lg">
                    Daftar
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "terjadwal" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  className="bg-white border rounded-lg p-4 shadow-sm"
                >
                  <h3 className="font-medium text-base mb-4 line-clamp-2">
                    {subject.name}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">Status</span>
                    <span
                      className={`text-sm font-medium ${
                        subject.status === "BELUM SELESAI"
                          ? "text-yellow-500"
                          : "text-green-500"
                      }`}
                    >
                      {subject.status}
                    </span>
                  </div>
                  <button
                    className={`w-full px-4 py-2 rounded-lg text-white text-sm ${
                      subject.status === "BELUM SELESAI"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                    }`}
                    onClick={() =>
                      subject.status !== "BELUM SELESAI" && setIsModalOpen(true)
                    }
                    disabled={subject.status === "BELUM SELESAI"}
                  >
                    Lihat Sertifikat
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === "selesai" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  className="bg-white border rounded-lg p-4 shadow-sm"
                >
                  <h3 className="font-medium text-base mb-4 line-clamp-2">
                    {subject.name}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">Status</span>
                    <span
                      className={`text-sm font-medium ${
                        subject.status === "BELUM SELESAI"
                          ? "text-yellow-500"
                          : "text-green-500"
                      }`}
                    >
                      {subject.status}
                    </span>
                  </div>
                  <button
                    className={`w-full px-4 py-2 rounded-lg text-white text-sm ${
                      subject.status === "BELUM SELESAI"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                    }`}
                    onClick={() =>
                      subject.status !== "BELUM SELESAI" && setIsModalOpen(true)
                    }
                    disabled={subject.status === "BELUM SELESAI"}
                  >
                    Lihat Sertifikat
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
