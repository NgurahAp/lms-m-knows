import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { useRoleplayData } from "../../services/RoleplayService"; // Import the new service
import { useState } from "react";
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";

export const KonfirRoleplay: React.FC = () => {
  const { isLoading: isRoleplayLoading, isError: isRoleplayError } =
    useRoleplayData(); // Use the custom hook to fetch roleplay data

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
        <h1 className="md:text-lg text-sm font-semibold">Roleplay</h1>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg w-full md:pb-10 flex flex-col p-6">
        <div className="flex justify-between border-b pb-4 mb-6">
          <div className="flex">
            <img
              src="\roleplay\profile.png" // Ganti dengan URL foto pengajar
              alt="Pengajar"
              className="w-12 h-12 rounded-full md:mr-4 mr-2"
            />
            <div>
              <h2 className="md:text-xl text-base font-semibold">
                Neneng Rohaye S.Kom
              </h2>
              <p className="text-gray-500 text-sm">Pengajar</p>
            </div>
          </div>
          <span className="text-blue-500 bg-blue-100 md:text-sm text-xs px-2 md:h-7 h-10 py-1 rounded-lg">
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
          <h3 className="text-lg font-semibold mt-6">Roleplay Kewirausahaan</h3>
        </div>

        {/* Deskripsi */}
        <div className="mb-6 border-b">
          <h4 className="text-lg font-medium mb-2">Deskripsi</h4>
          <p className="text-gray-700 mb-6">
            Resolusi Konflik di Tempat Kerja Dalam tim kerja Anda, terjadi
            konflik antara dua anggota tim, yaitu Alex dan Dana. Alex merasa
            bahwa Dana tidak memberikan kontribusi yang cukup dan merasa
            frustrasi.
          </p>
        </div>

        {/* Aturan Pengumpulan Tugas */}
        <div className="mb-6 border-b">
          <h4 className="text-lg font-medium mb-2">Aturan pengumpulan tugas</h4>
          <ol className="list-decimal list-inside text-gray-700">
            <li className="mt-2">
              Tugas roleplay diunggah dalam bentuk link rekaman di YouTube.
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
          <p className="mb-4">
            <strong>Nama Peserta:</strong> Rizki Pratama
          </p>

          {/* Link Video */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Link Video Roleplay
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
              Upload File (Jika Ada)
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

          {/* Tim Roleplay */}
          <div className="mb-4 border-b">
            <h4 className="text-lg font-medium mb-2">Tim Roleplay:</h4>
            <ol className="list-decimal list-inside text-gray-700">
              <li className="mt-2">Pratama Utama - Role Utama</li>
              <li className="mt-2">Lukas Hotasi - Role Rekan</li>
              <li className="mt-2 mb-6">Rizky Alfatih - Observer</li>
            </ol>
          </div>

          {/* Buttons */}
          <div className="flex mt-6">
            <Link
              to="/nilai-roleplay"
              className="md:px-10 px-6 md:py-2 py-3  mr-6 text-sm text-gray-700 border border-gray-300 rounded-lg"
            >
              Nilai Rekan
            </Link>
            <Link
              to="/submit-roleplay"
              className="px-10 md:py-2 pt-3 text-sm text-white bg-blue-500 rounded-lg"
            >
              Kumpulkan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
