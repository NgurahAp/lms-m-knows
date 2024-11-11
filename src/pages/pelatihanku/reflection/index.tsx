import { Link, useNavigate, useParams } from "react-router-dom";
import { useReflectionData } from "../../../hooks/pelatihanku/useReflection";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { FaArrowLeft } from "react-icons/fa6";

export const Reflection = () => {
  const { subjectId, sessionId } = useParams<{
    subjectId: string;
    sessionId: string;
  }>();

  const { data, isLoading, error } = useReflectionData(sessionId);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="min-h-[85vh] w-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="text-gray-600">Memuat data...</p>
        </div>
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
        <div className="flex items-center">
          <div className="w-1/2 flex items-center justify-center">
            <img src="/pelatihanku/quiz-left.png" alt="" />
          </div>
          <div className="w-1/2 flex flex-col justify-center pr-10">
            <h1 className="text-2xl font-semibold">Deskripsi</h1>
            <p className="text-lg text-justify py-4 text-gray-500">
              Refleksi Eksplorasi dilakukan dengan tujuan untuk meningkatkan
              pemahaman diri, memperkuat koneksi antara teori dan praktik, serta
              merancang strategi perbaikan atau pengembangan diri ke depannya.
              Dengan refleksi, pengguna dapat mengidentifikasi pencapaian,
              tantangan, dan area yang perlu diperbaiki, menciptakan lingkungan
              pembelajaran yang lebih efektif dan memastikan pertumbuhan yang
              berkelanjutan.
            </p>
            <div className="flex gap-8 pt-4 w-full">
              <Link
                to={`/historyReflection/${subjectId}/${sessionId}`}
                className="border text-center rounded-lg text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white py-3 w-full"
              >
                Riwayat Refleksi Eksplorasi
              </Link>
              {data?.data.is_eligible ? (
                <button
                  onClick={() =>
                    navigate(`/submitReflection/${subjectId}/${sessionId}`, {
                      state: { reflectionData: data?.data },
                    })
                  }
                  className="border text-center bg-blue-500 rounded-lg text-white py-3 w-full hover:bg-blue-600"
                >
                  Mulai
                </button>
              ) : (
                <button
                  disabled
                  className="border text-center bg-gray-400 rounded-lg text-white py-3 w-full cursor-not-allowed"
                  title="Anda sudah mengisi refleksi"
                >
                  Anda Sudah Mengisi Refleksi
                </button>
              )}
            </div>
          </div>
        </div>
        <Link
          to={`/pelatihanku/${subjectId}`}
          className="flex items-center gap-2 p-5 underline justify-start text-blue-500"
        >
          <FaArrowLeft />
          Kembali
        </Link>
      </div>
    </div>
  );
};
