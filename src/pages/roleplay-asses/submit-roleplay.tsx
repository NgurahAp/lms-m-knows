import { Link } from "react-router-dom";
import { useRoleplayData } from "../../services/RoleplayService"; // Import the new service
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";

export const SubmitRoleplay: React.FC = () => {
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
      <div className="bg-white rounded-lg shadow-lg w-full md:pb-10 flex flex-col md:p-6 p-2">
        <div className="mb-2">
          <h3 className="text-lg font-semibold mt-6 mb-6 ml-4">
            Status Penyerahan
          </h3>
        </div>
        <table className="table-auto w-full border md:text-base text-xs border-gray-300 md:mx-2">
          <tbody>
            <tr className="border-b">
              <td className="p-4 font-medium border-r border-gray-300 w-1/2">
                Tenggat Waktu
              </td>
              <td className="p-4">Rabu, 15 November 2023, 15:00 WIB</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium border-r border-gray-300">
                Link Rekaman Roleplay
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
                Status Penyerahan
              </td>
              <td className="p-4 bg-green-100">Sudah Mengumpulkan</td>
            </tr>

            <tr className="border-b">
              <td className="p-4 font-medium border-r border-gray-300">
                Nilai Anda (Berdasarkan Penilaian Rekan)
              </td>
              <td className="p-4">85</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium border-r border-gray-300">
                Role Utama
              </td>
              <td className="p-4">Rizki Pratama</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium border-r border-gray-300">
                Role Rekan
              </td>
              <td className="p-4">Theopilus Lukas</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium border-r border-gray-300">
                Role Observer
              </td>
              <td className="p-4">Aryo Bhodro</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium border-r border-gray-300">
                Waktu Tersisa
              </td>
              <td className="p-4">15 hari 22 jam 8 menit</td>
            </tr>

            <tr className="border-b">
              <td className="p-4 font-medium border-r border-gray-300">
                Kode Roleplay
              </td>
              <td className="p-4">KGRPOB1212</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-6 text-right md:mb-0 mb-4">
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
