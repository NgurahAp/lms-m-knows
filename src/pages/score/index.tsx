import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Sertifikat } from "./popup";
import LoadingSpinner from "../../components/reusable/LoadingSpinner";
import { useCertificateResponse, useScoreResponse } from "../../hooks/useScore";
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";
import { EmptyState } from "../../components/reusable/EmptyState";

export const Score: React.FC = () => {
  const {
    data: scoreData,
    isLoading: isScoreLoading,
    isError: isScoreError,
  } = useScoreResponse();

  const {
    data: certificateData,
    isLoading: isCertificateLoading,
    isError: isCertificateError,
  } = useCertificateResponse();

  const [activeTab, setActiveTab] = useState<"nilai" | "sertifikat">("nilai");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const isLoading = isScoreLoading || isCertificateLoading;
  const isError = isScoreError || isCertificateError;

  const handleDownload = () => {
    alert("Certificate Downloaded!");
  };

  if (isLoading) {
    return <LoadingSpinner text="Loading..." />;
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error fetching nilai response.
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

  // Mengakses subjects dari dalam properti data
  const subjects = scoreData?.data.subjects ?? [];
  const certificate = certificateData?.data.subjects ?? [];

  return (
    <div className="w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100 md:pb-4">
      <Breadcrumb items={breadcrumbItems} />
      {/* <PageInfo title="Nilai dan Sertifikat" className="text-sm" /> */}
      <div className="bg-white w-full h-14 flex items-center justify-between p-9 mt-5 rounded-xl">
        <h1 className=" md:text-lg text-sm font-semibold">Nilai dan Sertifikat</h1>
      </div>
      {/* Main Content Card */}
      <div className="px-5 mt-5 bg-white rounded-lg shadow-lg w-full ">
        <div>
          {/* Tabs */}
          <div className="p-8">
            <div className="flex flex-wrap justify-center md:justify-normal border-b border-white">
              <button
                className={`md:py-4 py-2 md:px-10 px-5 md:text-lg text-base font-semibold border-1  ${
                  activeTab === "nilai"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("nilai")}
              >
                Nilai
              </button>
              <button
                className={`md:py-4 py-2 px-10 md:text-lg text-base font-semibold border-1  ${
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
        <div className="px-6 pb-8">
          {/* Content */}
          <div className="md:px-6 px-2 pb-8">
            {activeTab === "nilai" && (
              <>
                {subjects.length === 0 ? (
                  <EmptyState message="Tidak ada data nilai yang tersedia" />
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {subjects.map((subject) => (
                      <div
                        key={subject.id}
                        className="w-96 bg-white border rounded-lg md:p-6 p-4 shadow-sm"
                      >
                        <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4 line-clamp-2">
                          {subject.name}
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-xs md:text-sm text-gray-600">
                              Status Perkuliahan
                            </span>
                            <span
                              className={`text-xs md:text-sm font-medium ${
                                subject.status === "BELUM SELESAI"
                                  ? "text-yellow-500"
                                  : "text-green-500"
                              }`}
                            >
                              {subject.status}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs md:text-sm text-gray-600">
                              Nilai
                            </span>
                            <span className="text-xs md:text-sm font-medium">
                              {subject.score} ({subject.score_letter})
                            </span>
                          </div>
                          <div className="pt-2 flex justify-end">
                            <Link
                              to={`/detailScore/${subject.id}`}
                              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-xs md:text-sm"
                            >
                              Lihat Detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {activeTab === "sertifikat" && (
              <>
                {certificate.length === 0 ? (
                  <EmptyState
                    message="Tidak ada sertifikat yang tersedia"
                    width="w-1/6"
                  />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {certificate.map((certificate) => (
                      <div
                        key={certificate.id}
                        className="bg-white border rounded-lg p-4 shadow-sm"
                      >
                        <h3 className="font-medium text-base mb-4 line-clamp-2">
                          {certificate.name}
                        </h3>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm text-gray-600">Status</span>
                          <span
                            className={`text-sm font-medium ${
                              certificate.status === "BELUM SELESAI"
                                ? "text-yellow-500"
                                : "text-green-500"
                            }`}
                          >
                            {certificate.status}
                          </span>
                        </div>
                        <button
                          className={`w-full px-4 py-2 rounded-lg text-white text-sm ${
                            certificate.status === "BELUM SELESAI"
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-blue-500 hover:bg-blue-600"
                          }`}
                          onClick={() =>
                            certificate.status !== "BELUM SELESAI" &&
                            setIsModalOpen(true)
                          }
                          disabled={certificate.status === "BELUM SELESAI"}
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
              </>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
