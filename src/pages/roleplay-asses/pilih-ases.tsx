import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTag } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { useAssessmentsData } from "../../services/AsesmenService";
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";
import { EmptyState } from "../../components/reusable/EmptyState";

export const PilihAses: React.FC = () => {
  const {
    data: assessmentsData,
    isLoading: isAssessmentsLoading,
    isError: isAssessmentsError,
  } = useAssessmentsData();

  const [activeTab, setActiveTab] = useState<
    "daftar" | "terjadwal" | "penilaian" | "selesai"
  >("daftar");
  const [isModalOpen, setModalOpen] = useState(false); // State for the first modal

  const [selectedOption, setSelectedOption] = useState<
    "self" | "others" | null
  >(null); // State for selection
  const [isConfirmationOpen, setConfirmationOpen] = useState(false); // State for confirmation modal
  const [isConfirmationOpen2, setConfirmationOpen2] = useState(false); // State for confirmation modal
  const [selectedAssessmentId, setSelectedAssessmentId] = useState<
    string | null
  >(null);

  if (isAssessmentsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isAssessmentsError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error fetching assessments data.
      </div>
    );
  }

  const breadcrumbItems = [
    {
      label: "Beranda",
      path: "/dashboard",
    },
    {
      label: "Nilai & Sertifikat",
    },
  ];

  const assessmentss = assessmentsData?.assessments ?? [];
  console.log();

  return (
    <div className="w-screen flex flex-col md:pt-44 pt-24 md:pb-4 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg w-full md:pb-10 mt-5">
        <div className="p-6">
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-white">
            {["daftar", "terjadwal", "penilaian", "selesai"].map((tab) => (
              <button
                key={tab}
                className={`py-4 px-10 md:text-xl text-lg font-semibold border-1 whitespace-nowrap ${
                  activeTab === tab
                    ? "text-blue-500 border-b-4 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab as typeof activeTab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-6">
          {activeTab === "daftar" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {assessmentss.map((assessments) => (
                <div
                  key={assessments.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative">
                    {/* Gambar Thumbnail */}
                    <img
                      src={assessments.thumbnail || "/default-image.jpg"}
                      alt="assessments Image"
                      className="w-full h-48 object-cover"
                      onError={(e) =>
                        (e.currentTarget.src = "/default-image.jpg")
                      }
                    />
                    {/* Badge */}
                    <span className="absolute top-2 right-2 bg-lime-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Asesmen
                    </span>
                  </div>

                  {/* Konten */}
                  <div className="p-4">
                    {/* Judul */}
                    <h3 className="text-base font-semibold text-gray-800 mb-1">
                      {assessments.subject_name}
                    </h3>
                    {/* Subjudul */}
                    <p className="text-gray-500 text-sm mb-4">
                      {assessments.description}
                    </p>
                    {/* Tombol */}
                    <div className="flex justify-center mt-4">
                      <button className="px-6 py-2 mr-6 text-sm text-gray-700 border border-gray-300 rounded-lg">
                        Lihat Detail
                      </button>
                      <button
                        className="px-10 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
                        onClick={() => {
                          setSelectedAssessmentId(assessments.id);
                          setModalOpen(true);
                        }}
                      >
                        Daftar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "terjadwal" && (
            <div className="flex justify-center">
              <EmptyState message="Kosong" />
            </div>
          )}

          {activeTab === "penilaian" && (
            <div className="flex justify-center">
              <EmptyState message="Kosong" />
            </div>
          )}

          {activeTab === "selesai" && (
            <div className="flex justify-center">
              <EmptyState message="Kosong" />
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Pilih Penilaian</h2>
            <p className="mb-4 text-sm text-gray-500">
              Atur jadwal konsultasi Anda dengan konselor
            </p>
            <div className="space-y-4">
              <button
                className={`w-full px-4 py-2 rounded-lg flex items-center ${
                  selectedOption === "self" ? "bg-blue-100" : "bg-gray-100"
                }`}
                onClick={() => setSelectedOption("self")}
              >
                <FaTag className="text-lg text-green-700 mt-1 ml-2 mr-2" />
                Menilai diri sendiri
              </button>
              <button
                className={`w-full px-4 py-2 rounded-lg flex items-center ${
                  selectedOption === "others" ? "bg-blue-100" : "bg-gray-100"
                }`}
                onClick={() => setSelectedOption("others")}
              >
                <FaDollarSign className="text-lg text-yellow-600 mt-1 ml-2 mr-2" />
                Menilai orang lain
              </button>
            </div>
            <button
              className={`mt-6 w-full px-4 py-2 rounded-lg ${
                selectedOption
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              onClick={() => {
                if (selectedOption) {
                  setModalOpen(false);
                  setConfirmationOpen(true);
                }
              }}
              disabled={!selectedOption}
            >
              Lanjut
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {isConfirmationOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Konfirmasi</h2>
            <p className="mb-4 text-sm text-gray-500">
              Apakah Anda yakin ingin melakukan assessments{" "}
              {selectedOption === "self" ? "diri sendiri" : "orang lain"}? Nilai
              akan keluar berdasarkan{" "}
              {selectedOption === "self"
                ? "penilaian diri sendiri"
                : "penilaian oleh asesor"}
              .
            </p>
            <div className="flex justify-between">
              <button
                className="px-4 py-2 text-gray-500 border border-gray-300 rounded-lg"
                onClick={() => {
                  setModalOpen(true);
                  setConfirmationOpen(false);
                }}
              >
                Kembali
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={() => {
                  setModalOpen(false);
                  setConfirmationOpen(false);
                  setConfirmationOpen2(true);
                }}
              >
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pop-up Baru */}
      {isConfirmationOpen2 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">
              Akuntansi dan Laporan Keuangan
            </h2>
            <p className="text-sm mb-4">Pilih Jadwal</p>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">Tanggal</p>
              <input
                type="date"
                placeholder="dd/mm/yyyy"
                className="w-full px-4 py-2 border rounded-lg text-gray-700"
              />
              <p className="text-sm text-gray-500">Waktu</p>
              <input
                type="time"
                placeholder="--:--"
                className="w-full px-4 py-2 border rounded-lg text-gray-700"
              />
              <p className="text-sm text-gray-500">Pilih Pengajar</p>
              <select className="w-full px-2 py-2 border rounded-lg text-gray-700">
                <option value="Rizki Pratama">Rizki Pratama</option>
              </select>
            </div>
            <div className="flex justify-between mt-6">
              <button
                className="px-4 py-2 text-gray-500 border border-gray-300 rounded-lg"
                onClick={() => {
                  setModalOpen(false);
                  setConfirmationOpen(true); // Kembali ke pop-up sebelumnya
                }}
              >
                Kembali
              </button>
              <Link
                to={`/konfir-ases/${selectedAssessmentId}`}
                className="px-10 pt-2 text-sm text-white bg-blue-500 rounded-lg"
              >
                Konfirmasi
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
