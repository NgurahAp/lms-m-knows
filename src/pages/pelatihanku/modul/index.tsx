import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";
import { useModuleData } from "../../../services/pelatihanku/ModulService";
import { FaCheck } from "react-icons/fa";
import LoadingSpinner from "../../../components/reusable/LoadingSpinner";

export const Modul = () => {
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

  // console.log("SubjectId: ", data);

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <Link to="/dashboard" className="flex items-center">
          <img
            src="/pelatihanku/home.png"
            className="md:w-6 w-5 -mt-1"
            alt="Home"
          />
          <span className="md:pl-5 pl-3 text-blue-500 md:text-base text-sm font-semibold">
            Beranda
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to="/pelatihanku">
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            Pelatihan-ku
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to={`/pelatihanku/${data?.detail.subject_id}`}>
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            {data?.detail.subject_name}
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-gray-400 md:text-base text-sm font-semibold">
          Pertemuan {data?.detail.session_no}
        </span>
      </div>
      <div className="bg-white flex flex-col  mt-5 p-8">
        <h1 className="font-bold text-4xl mb-5 flex justify-center">
          Modul Pertemuan {data?.detail.session_no}
        </h1>
        <div className="flex flex-wrap w-full justify-center gap-x-20 gap-y-8">
          {data?.modules.map((module) => (
            <Link
              key={module.id}
              to={`/detailModul/${subjectId}/${sessionId}/${module.id}`}
              className={`flex p-4 ${
                module.submitted ? "bg-green-100" : "bg-gray-100"
              } rounded-lg shadow-md w-5/12 mb-4`}
            >
              <div
                className={`flex flex-col gap-2 p-4 ${
                  module.submitted ? "bg-green-200" : "bg-gray-200"
                } rounded-lg`}
              >
                <div className="flex items-center justify-center">
                  {module.submitted && (
                    <div className="bg-green-600 rounded-full">
                      <FaCheck className="text-white p-1 text-xl" />
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-1 items-center h-12 w-32 p-2 bg-[#333d79] text-white text-sm rounded-lg">
                    <FaPlayCircle className="rounded-full text-4xl" />
                    {module.total_videos} Vidio
                  </div>
                  <div className="flex gap-1 items-center h-12 w-32 p-2 bg-[#f2aa4c] text-white text-sm rounded-lg">
                    <div className="bg-white rounded-full p-1">
                      <IoDocumentText className="text-3xl text-[#f2aa4c]" />
                    </div>
                    {module.total_documents} Dokumen
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-1 items-center h-12 w-32 p-2 bg-[#a4193d] text-white text-sm rounded-lg">
                    <div className="bg-white rounded-full p-1">
                      <FaBookOpen className="text-3xl text-[#a4193d]" />
                    </div>
                    {module.total_journals} Jurnal
                  </div>
                  <div className="flex gap-1 items-center h-12 w-32 p-2 bg-[#2bae66] text-white text-sm rounded-lg">
                    <div className="bg-white rounded-full p-2">
                      <IoBookmarksSharp className="text-2xl text-[#2bae66]" />
                    </div>
                    {module.total_articles} Artikel
                  </div>
                </div>
              </div>
              <div className="ml-4 flex flex-col justify-center">
                <h3 className="text-lg font-semibold">{module.title}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
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
