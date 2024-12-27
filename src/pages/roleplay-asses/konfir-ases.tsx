import { Link, useParams } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { useApiResponse } from "../../services/KonfirAsesService"; // Import the new service
import { useState } from "react";
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

export const KonfirAses: React.FC = () => {  
  
  const [selectedValues, setSelectedValues] = useState<Record<number, number>>({});

  const handleSelect = (rowId: number, value: number) => {
    setSelectedValues({ ...selectedValues, [rowId]: value });
  }

  const [isModalOpen, setModalOpen] = useState(false);

  const { isLoading: isRoleplayLoading, isError: isRoleplayError } =
    useApiResponse(); // Use the custom hook to fetch roleplay data

  const [uploadedFile] = useState("roleplay_tim1.pdf");
  const [linkVideo, setLinkVideo] = useState(
    "https://youtube.com/watch/1shv4rat7b4gtveoq78gtvqo8ee74"
  );

  const handleUpload = () => {
    alert("File berhasil diunggah!");
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
      <div className="bg-white w-full h-6 flex items-center justify-between p-9 mt-5 rounded-xl mb-4">
        <h1 className="md:text-lg text-sm font-semibold">Asesmen</h1>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg w-full md:pb-10 flex flex-col p-6">
        <div className="flex justify-between border-b pb-4 mb-6">
          <div className="flex">
            <img
              src="\roleplay\profile.png" // Ganti dengan URL foto pengajar
              alt="Pengajar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">Bunaiya</h2>
              <p className="text-gray-500 text-sm">Pengajar</p>
            </div>
          </div>
          <span className="text-blue-500 bg-blue-100 text-sm px-2 h-7 py-1 rounded-lg">
            Belum Mengumpulkan
          </span>
        </div>

        {/* Tanggal dan Judul */}
        <div className="mb-2">
          <p className="text-red-500 text-sm flex items-center">
            <span className="material-icons text-red-500 mr-2">
              <FaClock className="text-red-500" />
            </span>
            15 Desember 2023
          </p>
        </div>

        {/* Deskripsi */}
        <div className="mb-6 border-b">
          <h4 className="text-lg font-medium mb-2 mt-2">Deskripsi</h4>
          <p className="text-gray-700 mb-6">
            Resolusi Konflik di Tempat Kerja Dalam tim kerja Anda, terjadi
            konflik antara dua anggota tim, yaitu Alex dan Dana. Alex merasa
            bahwa Dana tidak memberikan kontribusi yang cukup dan merasa
            frustrasii.
          </p>
          <p className="text-gray-700 mb-2">
            Berikut merupakan link pertemuan Asesmen via zoom :
          </p>
          <div className="mb-6">
            <a
              href="https://zoom.com/aiuodwg3t2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              https://zoom.com/aiuodwg3t2
            </a>
          </div>
        </div>

        {/* Aturan Pengumpulan Tugas */}
        <div className="mb-6 border-b">
          <h4 className="text-lg font-medium mb-2">
            Aturan pengumpulan tugas Asesmen
          </h4>
          <ol className="list-decimal list-inside text-gray-700">
            <li className="mt-2">
              Tugas Asesmen diunggah dalam bentuk link rekaman di YouTube.
            </li>
            <li className="mt-2">Perhatikan Deadline pengumpulan tugas.</li>
            <li className="mt-2">
              Cek kembali penamaan file dan link dengan benar.
            </li>
            <li className="mt-2 mb-6">
              Link video yang dikumpulkan adalah video pada saat Anda menjadi
              role utama.
            </li>
          </ol>
        </div>

        {/* Pengumpulan Tugas */}
        <div>
          <h4 className="text-lg font-medium mb-4">Pengumpulan Tugas</h4>
          <p className="mb-4">Nama yang mengumpulkan: John Doe</p>

          {/* Link Video */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Link Video Asesmen
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg text-gray-700"
              value={linkVideo}
              onChange={(e) => setLinkVideo(e.target.value)}
            />
          </div>

          {/* Upload File */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload File Penugasan Asesmen (Jika Ada)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="text"
                className="w-full p-2 border rounded-lg text-gray-700"
                value={uploadedFile}
                disabled
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={handleUpload}
              >
                Upload
              </button>
            </div>
          </div>

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
                                  description.range[1] -
                                  description.range[0] +
                                  1
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
                                  description.range[1] -
                                  description.range[0] +
                                  1
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
                                  description.range[1] -
                                  description.range[0] +
                                  1
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
                                  description.range[1] -
                                  description.range[0] +
                                  1
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
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-2 text-sm text-white bg-blue-500 rounded-lg"
          >
            Kumpulkan
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
              <h2 className="text-lg font-bold mb-4">Konfirmasi</h2>
              <p className="mb-4 text-sm text-gray-500">
                Apakah Anda yakin ingin mengirim jawaban ini?
              </p>
              <div className="flex justify-between">
                <button
                  className="px-4 py-2 text-gray-500 border border-gray-300 rounded-lg"
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  Kembali
                </button>
                <Link
                  to="/nilai-ases"
                  className="px-10 pt-3 text-sm text-white bg-blue-500 rounded-lg"
                >
                  Konfirmasi
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
