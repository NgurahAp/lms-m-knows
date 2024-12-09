import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { useRoleplayData } from "../../services/RoleplayService"; // Import the new service
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";

export const DaftarDrill: React.FC = () => {
  const { isLoading: isRoleplayLoading, isError: isRoleplayError } =
    useRoleplayData(); // Use the custom hook to fetch roleplay data

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
      label: "Drill",
      path: "/drill-simulasi",
    },
    {
      label: "Drill Pencegahan & Deteksi Dini",
      path: "/dashboard",
    },
    {
      label: "Detail Drill",
    },
  ];

  return (
    <div className="w-screen flex flex-col md:pt-44 pt-24 md:pb-4 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="bg-white w-full h-6 flex items-center justify-between p-9 mt-5 rounded-xl mb-4">
        <h1 className="md:text-lg text-sm font-semibold">Drill</h1>
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
              <h2 className="text-xl font-semibold">Neneng Rohaye S.Kom</h2>
              <p className="text-gray-500 text-sm">Pengajar</p>
            </div>
          </div>
          <span className="text-blue-500 bg-blue-100 text-sm px-2 h-7 py-1 rounded-lg">
            Belum Dimulai
          </span>
        </div>

        {/* Tanggal dan Judul */}
        <div className="mb-2">
          <p className="text-yellow-500 text-sm flex items-center">
            <span className="material-icons text-yellow-500 mr-2">
              <FaClock className="text-yellow-500" />
            </span>
            15 Desember 2023
          </p>
        </div>

        {/* Deskripsi */}
        <div className="mb-6 border-b">
          <h4 className="text-lg font-medium mb-2 mt-2">Deskripsi</h4>
          <p className="text-gray-700 mb-6">
            1. Latihan Soal Ujian: Peserta diberikan serangkaian soal latihan
            yang mirip dengan format dan tingkat kesulitan ujian yang akan
            datang untuk meningkatkan pemahaman dan kemampuan menyelesaikan
            soal.<br></br>
            2. Simulasi Presentasi Akademis: Latihan presentasi di depan kelas
            atau kelompok kecil untuk mempersiapkan mahasiswa menghadapi
            presentasi akademis atau seminar. <br></br>
            3. Latihan Penulisan Ilmiah: Drill penulisan esai, laporan
            penelitian, atau makalah ilmiah untuk meningkatkan kemampuan menulis
            akademis.
          </p>
          <p className="text-gray-700 mb-2">
            Untuk detailnya klik link pelaksanaan drill
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
          <h4 className="text-lg font-medium mb-2">Aturan pelaksanaan drill</h4>
          <ol className="list-decimal list-inside text-gray-700">
            <li className="mt-2">Tugas Drill diunggah dalam bentuk file Pdf</li>
            <li className="mt-2">Perhatikan Deadline pengumpulan tugas</li>
            <li className="mt-2">Cek kembali penamaan file dengan benar</li>
            <li className="mt-2 mb-6">File yang dikumpulkan adalah pdf</li>
          </ol>
        </div>

        {/* Buttons */}
        <div className="flex mt-2">
          <Link
            to="/nilai-roleplay"
            className="px-10 py-2 mr-6 text-sm text-gray-700 border border-gray-300 rounded-lg"
          >
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
};
