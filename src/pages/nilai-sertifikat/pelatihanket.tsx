import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNilaiData } from "../../services/PelatihanKetService";
import LoadingSpinner from "../../components/reusable/LoadingSpinner";

export const PelatihanKet: React.FC = () => {
  const {
    data: nilaiData,
    isLoading: isNilaiLoading,
    isError: isNilaiError,
  } = useNilaiData();

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

  // Mengakses sessions dari dalam properti data
  const sessions = nilaiData?.sessions ?? [];
  console.log(sessions);

  return (
    <div className="flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
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
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-[#9CA3AF] md:text-base text-sm font-semibold">
          Pelatihan Keterampilan Komunikasi
        </span>
      </div>

      <div className="bg-white w-full h-14 flex items-center justify-between p-9 mt-5 rounded-xl mb-4">
        <h1 className="md:text-lg text-sm font-semibold">Nilai</h1>
      </div>
      <div className="bg-white w-full h-full items-center justify-between p-9 mt-5 rounded-xl mb-4">
        <h1 className="text-xl font-semibold mb-4">
          Pelatihan Keterampilan Komunikasi
        </h1>
        <div className="overflow-x-auto border rounded-xl shadow-md">
          <table className="min-w-full bg-white border border-gray-300 text-sm">
            <thead>
              <tr className="h-14 px-4 py-4 border-b-2 border-gray-200 text-center bg-blue-500 text-white">
                <th className="py-2 px-4 border">Judul</th>
                <th className="py-2 px-4 border">Modul</th>
                <th className="py-2 px-4 border">Quiz</th>
                <th className="py-2 px-4 border">Penugasan</th>
                <th className="py-2 px-4 border">Rata-rata</th>
                <th className="py-2 px-4 border">Nilai</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session.id} className="text-center">
                  <td className="py-2 px-4 border-b-2 border-gray-200 text-left">
                    {session.title}
                  </td>
                  <td className="py-2 px-4 border">{session.module_score}</td>
                  <td className="py-2 px-4 border">{session.quiz_score}</td>
                  <td className="py-2 px-4 border">
                    {session.assignment_score}
                  </td>
                  <td className="py-2 px-4 border">{session.average_score}</td>
                  <td className="py-2 px-4 border">
                    {session.average_score_letter}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
