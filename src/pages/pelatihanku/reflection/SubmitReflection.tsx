import { Link, useParams } from "react-router-dom";
import { useReflectionData } from "../../../hooks/pelatihanku/useReflection";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { FaArrowLeft } from "react-icons/fa6";

export const SubmitReflection = () => {
  const { subjectId, sessionId } = useParams<{
    subjectId: string;
    sessionId: string;
  }>();

  const { data, isLoading, error } = useReflectionData(sessionId);
  if (isLoading) {
    return (
      <div className="min-h-[85vh] w-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[85vh] w-screen flex items-center justify-center">
        Error loading data
      </div>
    );
  }

  const breadcrumbItems = [
    {
      label: "Beranda",
      path: "/dashboard",
    },
    {
      label: "Pelatihan-ku",
      path: "/pelatihanku",
    },
    {
      label: data?.data.subject_name,
      path: `/pelatihanku/${subjectId}`,
    },
    {
      label: "Refleksi Pembelajaran",
      path: `/reflection/${subjectId}/${sessionId}`,
    },
    {
      label: "Refleksi",
    },
  ];

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      {/* Info */}
      <div className="bg-white flex flex-col mt-5 px-8 h-36 justify-center rounded-lg">
        <h1 className="text-3xl font-semibold pb-3">Refleksi Ekplorasi</h1>
        <p className="text-lg">Pertemuan {data?.data.session_no}</p>
      </div>
      {/* Content */}
      <div className="p-8 my-8 bg-white">
        <div className="border p-5 rounded-lg">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-bold text-gray-800">Andri Hendrawan</p>
              <p className="text-sm text-gray-600">Pengajar</p>
            </div>
          </div>
          <h3 className="text-lg font-semibold pt-5 pb-8">
            Apa pembelajaran dan kesimpulan kamu dari pertemuan ini?
          </h3>
          <textarea
            placeholder="Masukkan jawaban anda..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={8}
          ></textarea>
          <div className="flex justify-end mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Selesai
            </button>
          </div>
        </div>
        <Link
          to={`/reflection/${subjectId}/${sessionId}`}
          className="flex items-center gap-2 p-5 underline justify-start text-blue-500"
        >
          <FaArrowLeft />
          Kembali
        </Link>
      </div>
    </div>
  );
};
