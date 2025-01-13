import React from "react";
import { useNilaiData } from "../../services/PelatihanKetService";
import LoadingSpinner from "../../components/reusable/LoadingSpinner";
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const DetailScore: React.FC = () => {
  const { subjectId } = useParams<{
    subjectId: string;
  }>();

  const {
    data: nilaiData,
    isLoading: isNilaiLoading,
    isError: isNilaiError,
  } = useNilaiData(subjectId);

  if (isNilaiLoading) {
    return <LoadingSpinner text="Loading..." />;
  }

  if (isNilaiError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error fetching nilai Data.
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
      path: "/score",
    },
    {
      label: "Nilai",
    },
  ];

  // Mengakses sessions dari dalam properti data
  const sessions = nilaiData?.sessions ?? [];
  console.log(subjectId);

  return (
    <div className="flex flex-col md:pt-36 pt-24 md:px-24 px-4 bg-gray-100">
      <Breadcrumb items={breadcrumbItems} />
      <div className="bg-white w-full h-14 flex items-center justify-between p-9 mt-5 rounded-xl">
        <h1 className=" md:text-lg text-sm font-semibold">
          Nilai
        </h1>
      </div>
      <div className="bg-white w-full h-full items-center justify-between p-9 mt-5 rounded-xl mb-4">
        <h1 className="text-base md:text-xl font-semibold mb-4">
          Pelatihan Keterampilan Komunikasi
        </h1>
        <div className="overflow-x-auto border rounded-xl shadow-md">
          <table className="min-w-full bg-white border border-gray-300 text-sm">
            <thead>
              <tr className="h-14 px-4 py-4 border-b-2 border-gray-200 md:text-lg text-base  text-center bg-blue-500 text-white">
                <th className="py-2 px-4 border font-normal">Judul</th>
                <th className="py-2 px-6 border font-normal">Modul</th>
                <th className="py-2 px-6 border font-normal">Quiz</th>
                <th className="py-2 px-6 border font-normal">Penugasan</th>
                <th className="py-2 px-6 border font-normal">Rata-rata</th>
                <th className="py-2 px-6 border font-normal">Nilai</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session.id} className="text-center font-medium">
                  <td className="md:p-8 p-4 md:text-base text-xs border-b-2 border-gray-200 text-left">
                    {session.title}
                  </td>
                  <td className="md:p-8 p-4 md:text-base text-xs border">
                    {session.module_score}
                  </td>
                  <td className="md:p-8 p-4 md:text-base text-xs border">
                    {session.quiz_score}
                  </td>
                  <td className="md:p-8 p-4 md:text-base text-xs border">
                    {session.assignment_score}
                  </td>
                  <td className="md:p-8 p-4 md:text-base text-xs border">
                    {session.average_score}
                  </td>
                  <td className="md:p-8 p-4 md:text-base text-xs border">
                    {session.average_score_letter}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link
          to={`/score`}
          className="flex items-center gap-2 p-5 pt-8 underline justify-start text-blue-500"
        >
          <FaArrowLeft />
          Kembali
        </Link>
      </div>
    </div>
  );
};
