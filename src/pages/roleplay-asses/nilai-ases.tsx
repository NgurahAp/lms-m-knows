import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useRoleplayData } from "../../services/RoleplayService"; // Import the new service
import { useState } from "react";

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
      { range: [9, 10], text: "Mendengarkan hingga sepenuhnyaa" },
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

export const NilaiAses: React.FC = () => {
  const { isLoading: isRoleplayLoading, isError: isRoleplayError } =
    useRoleplayData(); // Use the custom hook to fetch roleplay data

    const [selectedValues, setSelectedValues] = useState<Record<number, number>>({});

    const handleSelect = (rowId: number, value: number) => {
      setSelectedValues({ ...selectedValues, [rowId]: value });
    };

  if (isRoleplayLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isRoleplayError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error fetching roleplay data.
      </div>
    );
  }

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
          Asesmen
        </span>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-[#9CA3AF] md:text-base text-sm font-semibold">
          Asesmen Pencegahan & Deteksi Dini
        </span>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-[#9CA3AF] md:text-base text-sm font-semibold">
          Penilaian Asesmen
        </span>
      </div>

      {/* Header */}
      <div className="bg-white w-full h-6 flex items-center justify-between p-9 mt-5 rounded-xl mb-4">
        <h1 className="md:text-lg text-sm font-semibold">Asesmen</h1>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg w-full md:pb-10 flex flex-col p-6">
        <div>
          <h3 className="text-lg font-semibold mt-6 mb-4 ml-4">
            Laporan Asesmen
          </h3>
        </div>
        <div className="mb-2">
          <p className="text-lg mt-6 mb-2 ml-4">Status Penyerahan</p>
        </div>
        <table className="table-auto w-full border md:text-base text-xs border-gray-300 mx-2">
          <tbody>
            <tr className="border-b">
              <td className="p-4 font-medium border-r border-gray-300 w-1/2">
                Tenggat Waktu
              </td>
              <td className="p-4">Rabu, 15 November 2023, 15:00 WIB</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium border-r w-1/4 border-gray-300">
                Status Asesmen
              </td>
              <td className="p-4 bg-green-100">Selesai</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium border-r border-gray-300">
                Link Rekaman Asesmen
              </td>
              <td className="p-4">
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  https://www.youtube.com/watch?v=dQw4w9WgXcQ
                </a>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium border-r w-1/4 border-gray-300">
                Status Penilaian
              </td>
              <td className="p-4 bg-green-100">75</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium border-r border-gray-300">
                Nama Peserta Asesmen
              </td>
              <td className="p-4">Jonathan Falih</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium border-r border-gray-300">
                Sisa Waktu Pengumpulan
              </td>
              <td className="p-4">1 hari, 2 jam, 23 menit</td>
            </tr>

            <tr className="border-b">
              <td className="p-4 font-medium border-r border-gray-300">
                Kode Roleplay
              </td>
              <td className="p-4">KG1ASE</td>
            </tr>
          </tbody>
        </table>

        <div>
          <div className="mt-5">
            <p className="mt-8">Penilaian diri sendiri</p>
            <p className="mt-4 mb-6 text-red-600">
              *Geser Kekanan dan Klik Angka pada tabel untuk menilai Diri anda
            </p>
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
        </div>

        <div className="mt-6 text-right">
          <Link
            to="/pilih-roleplay"
            className="px-10 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
};
