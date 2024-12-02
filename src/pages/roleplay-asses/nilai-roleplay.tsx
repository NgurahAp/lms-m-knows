import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

 const data = [
   {
     id: 1,
     kompetensi:
       "Kemampuan untuk mendengarkan dengan cermat dan menunjukkan pemahaman melalui umpan balik non-verbal dan verbal.",
     bobot: "30%",
     deskripsi: [
       { range: [1, 2], text: "Tidak mendengarkan" },
       { range: [3, 4], text: "Mendengarkan sebagian kecil waktu" },
       { range: [5, 6], text: "Mendengarkan sebagian besar waktu" },
       { range: [7, 8], text: "Mendengarkan sepenuhnya" },
     ],
   },
   {
     id: 2,
     kompetensi:
       "Kemampuan untuk mengajukan pertanyaan yang mendalam dan relevan yang mendorong diskusi lebih lanjut.",
     bobot: "10%",
     deskripsi: [
       { range: [1, 2], text: "Tidak mengajukan pertanyaan" },
       { range: [3, 4], text: "Mengajukan pertanyaan tidak relevan" },
       { range: [5, 6], text: "Mengajukan pertanyaan relevan" },
       {
         range: [7, 8],
         text: "Mengajukan pertanyaan yang mendalam dan relevan",
       },
     ],
   },
   {
     id: 3,
     kompetensi:
       "Kemampuan untuk memotivasi dan mendukung coachee dalam mencapai tujuannya.",
     bobot: "10%",
     deskripsi: [
       { range: [1, 2], text: "Tidak memberdayakan" },
       { range: [3, 4], text: "Memberdayakan sebagian kecil waktu" },
       { range: [5, 6], text: "Memberdayakan sebagian besar waktu" },
       { range: [7, 8], text: "Memberdayakan sepenuhnya" },
     ],
   },
 ];
 
export const NilaiRoleplay: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState<Record<number, number>>({});

  const handleSelect = (rowId: number, value: number) => {
    setSelectedValues({ ...selectedValues, [rowId]: value });
  };

  return (
    <div className="w-screen flex flex-col md:pt-44 pt-24 md:pb-4 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
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
          Roleplay Kewirausahaan
        </span>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-[#9CA3AF] md:text-base text-sm font-semibold">
          Pilih Rekan
        </span>
      </div>

      {/* Header */}
      <div className="bg-white w-full h-72 items-center justify-between p-9 mt-5 rounded-xl mb-4">
        <h1 className="md:text-lg text-sm font-semibold">
          Roleplay Kewirausahaan
        </h1>
        <div className="mt-5">
          <p className="text-lg mt-2">
            Kompetensi : Komunikasi Menggali detil dan lengkap, tanpa Kesimpulan
            Dini
          </p>
          <p className="text-lg mt-2">ID Kompetensi : KGRPOB1212</p>
          <p className="text-lg mt-2">Petunjuk Penilaian : </p>
          <p className="text-lg mt-2">
            Klik tombol yang berisikan indikator perilaku rekan roleplay yang
            paling sesuai menurut anda
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg w-full md:pb-10 flex flex-col p-6">
        <h1 className="md:text-lg text-sm font-semibold mt-2 ml-4">
          Penilaian Rekan
        </h1>
        <div className="mt-5 ml-4">
          <p className="text-lg mt-2">
            Kompetensi : Komunikasi Menggali detil dan lengkap, tanpa Kesimpulan
            Dini
          </p>
          <p className="text-lg mt-2">ID Kompetensi : KGRPOB1212</p>
          <p className="text-lg mt-2">Petunjuk Penilaian : </p>
          <p className="text-lg mt-2">
            Klik tombol yang berisikan indikator perilaku rekan roleplay yang
            paling sesuai menurut anda
          </p>
          <p className="text-lg mt-6 mb-10 text-red-600">
            *Geser Kekanan dan Klik Angka pada tabel untuk menilai rekan anda
          </p>
        </div>
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">Berikan Nilai Teman Anda!</h1>
          <div
            className="flex items-center p-2 border rounded-lg text-center"> 
              <FaUsers className="mr-4 items-center text-lg text-gray-500" />
            <span>Rizki Prarara</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-200">
                <th className="p-2 border border-gray-300">Kompetensi</th>
                <th className="p-2 border border-gray-300 text-center">
                  Bobot
                </th>
                <th className="p-2 border border-gray-300 text-center">
                  Penilaian (1-4)
                </th>
                {/* {Array.from({ length: 8 }, (_, i) => (
                  <th
                    key={i}
                    className="p-2 border border-gray-300 text-center"
                  >
                    {i + 1}
                  </th>
                ))} */}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="bg-white hover:bg-gray-100">
                  <td className="p-2 border border-gray-300">
                    {row.kompetensi}
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    {row.bobot}
                  </td>
                  <td className=" border border-gray-300 text-center">
                    <tr>
                      {Array.from({ length: 8 }, (_, i) => (
                        <td
                          key={i}
                          className="p-2 border border-gray-300 text-center"
                        >
                          {i + 1}
                        </td>
                      ))}
                    </tr>
                    {Array.from({ length: 8 }, (_, i) => {
                      const description = row.deskripsi.find(
                        (d) => d.range[0] === i + 1
                      );
                      if (description) {
                        return (
                          <td
                            key={i}
                            colSpan={
                              description.range[1] - description.range[0] + 1
                            }
                            className="p-2 border border-gray-300 text-center bg-gray-100"
                          >
                            <span className="text-sm text-gray-600">
                              {description.text}
                            </span>
                          </td>
                        );
                      } else if (
                        !row.deskripsi.some((d) => d.range.includes(i + 1))
                      ) {
                        return (
                          <td
                            key={i}
                            className="p-2 border border-gray-300 text-center"
                          >
                            <button
                              className={`px-2 py-1 rounded ${
                                selectedValues[row.id] === i + 1
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200"
                              }`}
                              onClick={() => handleSelect(row.id, i + 1)}
                            >
                              {i + 1}
                            </button>
                          </td>
                        );
                      }
                      return null; // Skip cells that fall within a merged range
                    })}
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
