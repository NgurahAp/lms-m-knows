import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { useReflectionData } from "../../../hooks/pelatihanku/useReflection";

export const HistoryReflection = () => {
  const { subjectId, sessionId } = useParams<{
    subjectId: string;
    sessionId: string;
  }>();

  const { data, isLoading, error } = useReflectionData(sessionId);

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

  console.log(data);

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
      label: "data?.data.subject_name",
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
        <p className="text-lg">Pertemuan data?.data.session_n</p>
      </div>
      {/* Content */}
      <div className="p-8 my-8 bg-white"></div>
    </div>
  );
};
