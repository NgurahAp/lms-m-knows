import { Link, useParams } from "react-router-dom";
import { useModuleData } from "../../../services/pelatihanku/ModulService";
import { FaCheckCircle } from "react-icons/fa";
import LoadingSpinner from "../../../components/reusable/LoadingSpinner";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { MdVideoLibrary } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BackLink } from "../../../components/reusable/BackLink";
import PageInfo from "../../../components/reusable/PageInfo";

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
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-36 pt-24 md:px-24 px-4 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      <PageInfo
        title={data?.detail.subject_name}
        subtitle={`Pertemuan ${data?.detail.session_no}`}
      />
      <div className="bg-white flex flex-col  mt-5 md:p-8 p-5">
        <div className=" w-full  gap-y-8">
          {data?.modules.map((module) => (
            <Link
              key={module.id}
              to={`/detailModule/${subjectId}/${sessionId}/${module.id}`}
              className="flex rounded-lg shadow-md  mb-4 md:gap-8 gap-4"
            >
              <div
                className={`md:w-2 w-1 rounded-l-lg ${
                  module.submitted ? "bg-green-500" : "bg-blue-500"
                }`}
              ></div>
              <div className="flex flex-col justify-center md:p-2 md:py-5 py-3 ">
                <h1 className="font-light text-sm pb-0 md:pb-1">
                  Modul {data.detail.session_no}
                </h1>
                <h1 className="text-base font-semibold pb-1">
                  {module.title}
                </h1>
                <div className="flex items-center text-sm text-blue-500 ">
                  <MdVideoLibrary className="mr-2" /> {module.total_videos}{" "}
                  Video
                  <IoDocumentTextOutline className="ml-4 mr-2 text-red-500" />
                  <p className="text-red-500">
                    {" "}
                    {module.total_documents} Dokumen
                  </p>
                </div>
                {module.submitted === true ? (
                  <div className="text-green-500 pt-2 text-sm flex items-center">
                    <FaCheckCircle className="mr-2" /> Modul Sudah Selesai
                  </div>
                ) : (
                  <div className="pt-2 text-gray-500 text-sm flex items-center">
                    Modul belum dikerjakan.{" "}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
        <BackLink to={`/pelatihanku/${data?.detail.subject_id}`} />
      </div>
    </div>
  );
};
