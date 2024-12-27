import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";

 const data = [
   {
     id: 1,
     kompetensi:
       "Kemampuan untuk mendengarkan dengan cermat dan menunjukkan pemahaman melalui umpan balik non-verbal dan verbal.",
     bobot: "30%",
     deskripsi: [
       { range: [1, 2], text: "Tidak mendengarkan" },
       { range: [3, 4], text: "Mendengarkan hanya sebagian kecil waktu" },
       { range: [5, 6], text: "Mendengarkan sebagian besar waktu" },
       { range: [7, 8], text: "Mendengarkan hampir semua waktu" },
       { range: [9, 10], text: "Mendengarkan hingga sepenuhnya" },
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
       { range: [5, 6], text: "Mengajukan pertanyaan cukup relevan" },
       {
         range: [7, 8],
         text: "Mengajukan pertanyaan yang relevan",
       },
       {
         range: [9, 10],
         text: "Mengajukan pertanyaan sangat relevan",
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
       { range: [7, 8], text: "Memberdayakan hampir semua waktu" },
       { range: [9, 10], text: "Memberdayakan hingga sepenuhnya" },
     ],
   },
   {
     id: 4,
     kompetensi: "Tingkat pemahaman terhadap materi yang disampaikan.",
     bobot: "20%",
     deskripsi: [
       { range: [1, 2], text: "Tidak memahami materi" },
       { range: [3, 4], text: "Memahami sebagian kecil materi" },
       { range: [5, 6], text: "Memahami sebagian besar materi" },
       { range: [7, 8], text: "Memahami hampir semua bagian materi" },
       { range: [9, 10], text: "Memahami seluruh materi yang disampaikan" },
     ],
   },
   {
     id: 5,
     kompetensi: "Kejelasan, volume, intonasi, dan tata bahasa saat berbicara.",
     bobot: "30%",
     deskripsi: [
       { range: [1, 2], text: "Tidak jelas berbicara" },
       { range: [3, 4], text: "Memperjelas sebagian kecil bicara" },
       { range: [5, 6], text: "Memperjelas sebagian besar bicara" },
       { range: [7, 8], text: "Memperjelas hampir semua bicara" },
       { range: [9, 10], text: "Berbicara dengan intonasi sangat jelas" },
     ],
   },
 ];
 
export const NilaiRoleplay: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState<Record<number, number>>({});

  const handleSelect = (rowId: number, value: number) => {
    setSelectedValues({ ...selectedValues, [rowId]: value });
  };

  const breadcrumbItems = [
    {
      label: "Beranda",
      path: "/dashboard",
    },
    {
      label: "Roleplay dan Assessmen",
    },
  ];

  return (
    <div className="w-screen flex flex-col md:pt-44 pt-24 md:pb-4 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="bg-white w-full md:h-72 h-96 items-center justify-between p-9 mt-5 rounded-xl mb-4">
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
          <div className="flex items-center p-2 border rounded-lg text-center">
            <FaUsers className="mr-4 items-center text-lg text-gray-500" />
            <span>Rizki Prarara</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-max border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-200">
                <th className="p-2 border border-gray-300 w-72 bg-blue-500 text-white">
                  Kompetensi
                </th>
                <th className="p-2 border border-gray-300 text-center w-72 bg-blue-500 text-white">
                  Bobot
                </th>
                <th className="p-2 border border-gray-300 text-center bg-blue-500 text-white">
                  Kurang (1-4)
                </th>
                <th className="p-2 border border-gray-300 text-center bg-blue-500 text-white">
                  Cukup (5-6)
                </th>
                <th className="p-2 border border-gray-300 text-center bg-blue-500 text-white">
                  Baik (7-8)
                </th>
                <th className=" p-2 border border-gray-300 text-center bg-blue-500 text-white">
                  Sangat Baik<br></br> (9-10)
                </th>
                <th className="w-10 p-2 border border-gray-300 text-center bg-blue-500 text-white">
                  Alasan Nilai
                </th>
                <th className="w-10 p-2 border border-gray-300 text-center bg-blue-500 text-white">
                  Agar mendapat nilai sempurna, apa yang harus diperbaiki?
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="bg-white">
                  <td className="p-2 border border-gray-300 text-center">
                    {row.kompetensi}
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    {row.bobot}
                  </td>
                  {/* kurang 1 - 4 */}
                  <td className="w-1/6 border border-gray-300 text-center">
                    <tr>
                      {Array.from({ length: 4 }, (_, i) => (
                        <td
                          key={i}
                          className={`w-1/6 p-2 border-r border-b text-center cursor-pointer ${
                            selectedValues[row.id] === i + 1
                              ? "bg-blue-500 text-white"
                              : "hover:bg-gray-200"
                          }`}
                          onClick={() => handleSelect(row.id, i + 1)}
                        >
                          {i + 1}
                        </td>
                      ))}
                    </tr>
                    {Array.from({ length: 4 }, (_, i) => {
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
                            className="p-2 border-r text-center"
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
                  {/* cukup 5 - 6*/}
                  <td className="w-10 border border-gray-300 text-center">
                    <tr>
                      {Array.from({ length: 2 }, (_, i) => (
                        <td
                          key={5}
                          className={`w-20 p-2 border-r border-b text-center cursor-pointer ${
                            selectedValues[row.id] === i + 5
                              ? "bg-blue-500 text-white"
                              : "hover:bg-gray-200"
                          }`}
                          onClick={() => handleSelect(row.id, i + 5)}
                        >
                          {i + 5}
                        </td>
                      ))}
                    </tr>
                    {Array.from({ length: 2 }, (_, i) => {
                      const description = row.deskripsi.find(
                        (d) => d.range[0] === i + 5
                      );
                      if (description) {
                        return (
                          <td
                            key={5}
                            colSpan={
                              description.range[1] - description.range[0] + 1
                            }
                            className="p-2 border-r  text-cente"
                          >
                            <span className="text-sm text-gray-600">
                              {description.text}
                            </span>
                          </td>
                        );
                      } else if (
                        !row.deskripsi.some((d) => d.range.includes(i + 5))
                      ) {
                        return (
                          <td
                            key={5}
                            className="p-2 border border-gray-300 text-center"
                          >
                            <button
                              className={`px-2 py-1 rounded ${
                                selectedValues[row.id] === i + 5
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200"
                              }`}
                              onClick={() => handleSelect(row.id, i + 5)}
                            >
                              {i + 5}
                            </button>
                          </td>
                        );
                      }
                      return null; // Skip cells that fall within a merged range
                    })}
                  </td>
                  {/* baik 7 - 8*/}
                  <td className="w-20 border border-gray-300 text-center">
                    <tr>
                      {Array.from({ length: 2 }, (_, i) => (
                        <td
                          key={7}
                          className={`w-20 p-2 border-r border-b text-center cursor-pointer ${
                            selectedValues[row.id] === i + 7
                              ? "bg-blue-500 text-white"
                              : "hover:bg-gray-200"
                          }`}
                          onClick={() => handleSelect(row.id, i + 7)}
                        >
                          {i + 7}
                        </td>
                      ))}
                    </tr>
                    {Array.from({ length: 2 }, (_, i) => {
                      const description = row.deskripsi.find(
                        (d) => d.range[0] === i + 7
                      );
                      if (description) {
                        return (
                          <td
                            key={5}
                            colSpan={
                              description.range[1] - description.range[0] + 1
                            }
                            className="p-2 border-r  text-cente"
                          >
                            <span className="text-sm text-gray-600">
                              {description.text}
                            </span>
                          </td>
                        );
                      } else if (
                        !row.deskripsi.some((d) => d.range.includes(i + 7))
                      ) {
                        return (
                          <td
                            key={7}
                            className="p-2 border border-gray-300 text-center"
                          >
                            <button
                              className={`px-2 py-1 rounded ${
                                selectedValues[row.id] === i + 7
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200"
                              }`}
                              onClick={() => handleSelect(row.id, i + 7)}
                            >
                              {i + 7}
                            </button>
                          </td>
                        );
                      }
                      return null; // Skip cells that fall within a merged range
                    })}
                  </td>
                  {/* sangat baik 9 - 10*/}
                  <td className="w-32 border border-gray-300 text-center">
                    <tr>
                      {Array.from({ length: 2 }, (_, i) => (
                        <td
                          key={9}
                          className={`w-20 p-2 border-r border-b text-center cursor-pointer ${
                            selectedValues[row.id] === i + 9
                              ? "bg-blue-500 text-white"
                              : "hover:bg-gray-200"
                          }`}
                          onClick={() => handleSelect(row.id, i + 9)}
                        >
                          {i + 9}
                        </td>
                      ))}
                    </tr>
                    {Array.from({ length: 2 }, (_, i) => {
                      const description = row.deskripsi.find(
                        (d) => d.range[0] === i + 9
                      );
                      if (description) {
                        return (
                          <td
                            key={9}
                            colSpan={
                              description.range[1] - description.range[0] + 1
                            }
                            className="p-2 border-r  text-cente"
                          >
                            <span className="text-sm text-gray-600">
                              {description.text}
                            </span>
                          </td>
                        );
                      } else if (
                        !row.deskripsi.some((d) => d.range.includes(i + 9))
                      ) {
                        return (
                          <td
                            key={9}
                            className="p-2 border border-gray-300 text-center"
                          >
                            <button
                              className={`px-2 py-1 rounded ${
                                selectedValues[row.id] === i + 9
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200"
                              }`}
                              onClick={() => handleSelect(row.id, i + 9)}
                            >
                              {i + 9}
                            </button>
                          </td>
                        );
                      }
                      return null; // Skip cells that fall within a merged range
                    })}
                  </td>
                  <td className="w-40 border border-gray-300 text-center">
                    <input
                      type="text"
                      placeholder="Ketik disini"
                      className="text-center w-full rounded p-2 focus:outline-none"
                    />
                  </td>
                  <td className="w-60 border border-gray-300 text-center">
                    <input
                      type="text"
                      placeholder="Ketik disini"
                      className="text-center w-full rounded p-2 focus:outline-none"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end">
          <Link
            to="/submit-roleplay"
            className="px-10 py-2 text-sm text-white bg-blue-500 rounded-lg"
          >
            Kumpulkan
          </Link>
        </div>
      </div>
    </div>
  );
};
