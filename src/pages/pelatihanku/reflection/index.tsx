import { Link, useNavigate, useParams } from "react-router-dom";
import { useReflectionData } from "../../../hooks/pelatihanku/useReflection";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import LoadingSpinner from "../../../components/reusable/LoadingSpinner";
import { BackLink } from "../../../components/reusable/BackLink";
import PageInfo from "../../../components/reusable/PageInfo";

export const Reflection = () => {
  const { subjectId, sessionId } = useParams<{
    subjectId: string;
    sessionId: string;
  }>();

  const { data, isLoading, error } = useReflectionData(sessionId);
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingSpinner text="Loading..." />;
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
      label: "Refleksi Eksplorasi",
    },
  ];

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-4 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      <PageInfo
        title="Refleksi Eksplorasi"
        subtitle={`Pertemuan ${data?.data.session_no}`}
      />      
      {/* Content */}
      <div className="p-8 my-8 bg-white">
        <div className="flex md:flex-row flex-col items-center pb-3">
          <div className="md:w-1/2 flex items-center justify-center">
            <img src="/pelatihanku/quiz-left.png" alt="" />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center md:pr-10">
            <h1 className="text-lg md:text-2xl font-semibold">Deskripsi</h1>
            <p className="text-sm md:text-lg text-justify py-4 text-gray-500">
              Refleksi Eksplorasi dilakukan dengan tujuan untuk meningkatkan
              pemahaman diri, memperkuat koneksi antara teori dan praktik, serta
              merancang strategi perbaikan atau pengembangan diri ke depannya.
              Dengan refleksi, pengguna dapat mengidentifikasi pencapaian,
              tantangan, dan area yang perlu diperbaiki, menciptakan lingkungan
              pembelajaran yang lebih efektif dan memastikan pertumbuhan yang
              berkelanjutan.
            </p>
            <div className="flex gap-8 pt-4 w-full text-xs md:text-base">
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
                      state: { reflectionData: data },
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
        <BackLink to={`/pelatihanku/${subjectId}`} />
      </div>
    </div>
  );
};
