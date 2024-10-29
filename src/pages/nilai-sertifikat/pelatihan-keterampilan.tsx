import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export const PelatihanKet = () => {
  const [activeTab, setActiveTab] = useState<"beranda" | "nilai" | "pelatihan">("nilai");

  const tabs = [
    { id: "nilai", label: "Nilai" },
    { id: "sertifikat", label: "Sertifikat" },
  ];

   const data = [
     {
       title: "Peran dan Kompetensi Anti Fraud",
       module: 100,
       quiz: 100,
       assignment: 100,
       average: 100,
       grade: "A",
     },
     {
       title: "Pola Komunikasi Antar Budaya dan Meningkatkan Kepercayaan Diri",
       module: 100,
       quiz: 100,
       assignment: 100,
       average: 100,
       grade: "A",
     },
     {
       title:
         "Pengelolaan Bahasa Tubuh dan Nada Suara untuk Deteksi Dini Potensi Fraud",
       module: 100,
       quiz: 100,
       assignment: 100,
       average: 100,
       grade: "A",
     },
     {
       title:
         "Penggalian Informasi, Meningkatkan Kepercayaan Diri, Membaca Tulisan dan Tanda Tangan",
       module: 100,
       quiz: 100,
       assignment: 100,
       average: 100,
       grade: "A",
     },
     {
       title:
         "Teknik Membaur Diterima Seluruh Karyawan, serta Teknik Komunikasi Bawah Sadar Melalui Cerita",
       module: 100,
       quiz: 100,
       assignment: 100,
       average: 100,
       grade: "A",
     },
     {
       title:
         "Teknik Komunikasi Situasi Konflik dan Berhadapan Dengan Informan",
       module: 100,
       quiz: 100,
       assignment: 100,
       average: 100,
       grade: "A",
     },
     {
       title: "Praktek, Role Play dan Games",
       module: 100,
       quiz: 100,
       assignment: 100,
       average: 100,
       grade: "A",
     },
     {
       title: "Praktek, Role Play dan Games & Post-Test",
       module: 100,
       quiz: 100,
       assignment: 100,
       average: 100,
       grade: "A",
     },
   ];

  return (
    <div className=" flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
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
        <h1 className=" md:text-lg text-sm font-semibold">Nilai</h1>
      </div>
      <div className=" bg-white w-full h-full items-center justify-between p-9 mt-5 rounded-xl mb-4">
        <h1 className="text-xl font-semibold mb-4">
          Pelatihan Keterampilan Komunikasi
        </h1>
        <div className="overflow-x-auto border rounded-xl shadow-md">
          <table className="min-w-full bg-white border border-gray-300">
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
              {data.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="flex h-14 px-4 py-4 border-b-2 border-gray-200 text-left">
                    {item.title}
                  </td>
                  <td className="py-2 px-4 border">{item.module}</td>
                  <td className="py-2 px-4 border">{item.quiz}</td>
                  <td className="py-2 px-4 border">{item.assignment}</td>
                  <td className="py-2 px-4 border">{item.average}</td>
                  <td className="py-2 px-4 border">{item.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
