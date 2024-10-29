import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Sertifikat } from "./popup";
import { useNilaiResponse } from "../../services/NilaiService";

export const Nilai: React.FC = () => {
  const {
    data: nilaiResponse,
    isLoading: isNilaiLoading,
    isError: isNilaiError,
  } = useNilaiResponse();

  const [activeTab, setActiveTab] = useState<"nilai" | "sertifikat">("nilai");
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

  const subjects = nilaiResponse?.data?.subjects ?? [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Breadcrumb */}
      <div className="flex items-center mb-4">
        <Link
          to="/dashboard"
          className="text-blue-500 hover:underline flex items-center"
        >
          <img src="/pelatihanku/home.png" className="w-5 h-5" alt="Home" />
          <span className="ml-2">Beranda</span>
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-400">Nilai & Sertifikat</span>
      </div>

      {/* Title Card */}
      <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <h1 className="text-lg font-semibold">Nilai dan Sertifikat</h1>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-lg shadow-sm">
        {/* Tabs */}
        <div className="border-b">
          <div className="flex">
            <button
              className={`px-8 py-4 text-lg font-semibold ${
                activeTab === "nilai"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("nilai")}
            >
              Nilai
            </button>
            <button
              className={`px-8 py-4 text-lg font-semibold ${
                activeTab === "sertifikat"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("sertifikat")}
            >
              Sertifikat
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === "nilai" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  className="bg-white border rounded-lg p-4 shadow-sm"
                >
                  <h3 className="font-medium text-base mb-4 line-clamp-2">
                    {subject.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Status Perkuliahan
                      </span>
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
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Nilai</span>
                      <span className="text-sm font-medium">
                        {subject.score} ({subject.score_letter})
                      </span>
                    </div>
                    <div className="pt-2">
                      <Link
                        to="/pelatihan-keterampilan"
                        className="inline-block w-full text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                      >
                        Lihat Detail
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "sertifikat" && (
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
              <Sertifikat
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onDownload={handleDownload}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
