import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Nilai = () => {
  const [activeTab, setActiveTab] = useState<"nilai" | "sertifikat">("nilai");

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
          Nilai
        </h1>
      </div>
      </div>
  );
};
