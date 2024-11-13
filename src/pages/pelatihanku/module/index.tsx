import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useModuleData } from "../../../services/pelatihanku/ModulService";
import { FaCheckCircle } from "react-icons/fa";
import LoadingSpinner from "../../../components/reusable/LoadingSpinner";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { MdVideoLibrary } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

export const Module = () => {
  const { subjectId, sessionId } = useParams<{
    subjectId: string;
    sessionId: string;
  }>();

  const { data, isLoading, error } = useModuleData(subjectId, sessionId);

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
      label: data?.detail.subject_name,
      path: `/pelatihanku/${subjectId}`,
    },
    {
      label: "Modul",
    },
  ];

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      <div className="bg-white flex flex-col mt-5 px-8  justify-center rounded-lg">
        <h1 className="text-3xl font-semibold pb-1 pt-8">
          {data?.detail.subject_name}
        </h1>
        <p className="text-gray-500 text-lg pb-8">
          Pertemuan {data?.detail.session_no}
        </p>
      </div>
      <div className="bg-white flex flex-col  mt-5 p-8">
        <div className=" w-full  gap-y-8">
          {data?.modules.map((module) => (
            <Link
              key={module.id}
              to={`/detailModule/${subjectId}/${sessionId}/${module.id}`}
              className="flex p-4 rounded-lg shadow-md  mb-4 gap-8"
            >
              <img src="/pelatihanku/modul-books.png" alt="" />
              <div className="flex flex-col justify-center">
                <h1 className="font-semibold pb-2">
                  Modul {data.detail.session_no}
                </h1>
                <h1 className="text-lg font-semibold pb-1">{module.title}</h1>
                <div className="flex items-center text-blue-500 ">
                  <MdVideoLibrary className="mr-2" /> {module.total_videos}{" "}
                  Video
                  <IoDocumentTextOutline className="ml-4 mr-2 text-red-500" />
                  <p className="text-red-500">
                    {" "}
                    {module.total_documents} Dokumen
                  </p>
                </div>
                {module.submitted === true ? (
                  <div className="text-green-500 pt-2 flex items-center">
                    <FaCheckCircle className="mr-2" /> Modul Sudah Selesai
                  </div>
                ) : (
                  <div className="pt-2 text-gray-500 flex items-center">
                    Modul belum dikerjakan.{" "}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
        <Link
          to={`/pelatihanku/${data?.detail.subject_id}`}
          className="flex items-center gap-2 p-5 underline justify-start text-blue-500"
        >
          <FaArrowLeft />
          Kembali
        </Link>
      </div>
    </div>
  );
};
