import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { FaArrowLeft } from "react-icons/fa6";

export const Assesment = () => {
  const { subjectId, sessionId, subjectName } = useParams<{
    subjectId: string;
    sessionId: string;
    subjectName: string;
  }>();

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
      label: subjectName,
      path: `/pelatihanku/${subjectId}`,
    },
    {
      label: "Penilaian Pengajar",
    },
  ];

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      {/* Info */}
      <div className="bg-white flex flex-col mt-5 px-8 h-28 justify-center rounded-lg">
        <h1 className="text-3xl font-semibold pb-3">Penilaian Pengajar</h1>
      </div>
      <div className="bg-blue-100 flex flex-col mt-5 px-8 h-24 justify-center rounded-lg">
        <h1 className=" text-blue-700 pb-1">
          Pilihlah keterangan nilai yang paling mewakili penilaian Anda terhadap
          instruktur.
        </h1>
        <h1 className=" text-blue-700">
          Keterangan : Sangat Setuju, Setuju, Tidak Setuju dan Sangat Tidak
          Setuju
        </h1>
      </div>
      {/* Content */}
      <div className=" my-8 py-16 px-8 bg-white flex flex-col items-center justify-center">
        <img src="/pelatihanku/empty-state.png" className="w-1/4" alt="" />
        <Link to={`/attemptAssesment/${subjectId}/${sessionId}/${subjectName}`} className="bg-blue-500 text-center text-white py-2 rounded-lg my-4 w-1/4">
          Mulai
        </Link>
        <Link
          to={`/pelatihanku/${subjectId}`}
          className="flex items-center gap-2 px-5 pt-4 underline justify-start text-left w-full text-blue-500"
        >
          <FaArrowLeft />
          Kembali
        </Link>
      </div>
    </div>
  );
};
