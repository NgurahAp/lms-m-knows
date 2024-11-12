import {  useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";

export const Assesment = () => {
  const { subjectId, sessionId } = useParams<{
    subjectId: string;
    sessionId: string;
  }>();

  // const { data, isLoading, error } = useReflectionData(sessionId);
  // const navigate = useNavigate();

  // if (isLoading) {
  //   return <LoadingSpinner text="Loading..." />;
  // }

  // if (error) {
  //   return (
  //     <div className="min-h-[85vh] w-screen flex items-center justify-center">
  //       Error loading data
  //     </div>
  //   );
  // }

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
    },
  ];

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      {/* Info */}
      <div className="bg-white flex flex-col mt-5 px-8 h-36 justify-center rounded-lg">
        <h1 className="text-3xl font-semibold pb-3">Penilaian Pengajar</h1>
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
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
