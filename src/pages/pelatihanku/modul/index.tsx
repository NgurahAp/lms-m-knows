import { Link, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { Module } from "../../../types/pelatihanku/modul";
import { FaPlayCircle } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";

const modulesData: Module[] = [
  {
    id: "72ae4f34-130b-4a40-8460-7487166e5170",
    total_videos: "0",
    total_documents: "1",
    total_journals: "0",
    total_articles: "0",
    is_all_video_seen: true,
    title: "Modul Pertama",
    description: "-",
    submitted: true,
  },
  {
    id: "b19e7e34-1458-4a8f-ae87-849a82dc13f1",
    total_videos: "2",
    total_documents: "3",
    total_journals: "1",
    total_articles: "0",
    is_all_video_seen: false,
    title: "Modul Kedua",
    description: "Deskripsi untuk modul kedua.",
    submitted: false,
  },
  {
    id: "b19e7e34-1458-4a8f-ae87-849a82dc13f1",
    total_videos: "2",
    total_documents: "3",
    total_journals: "1",
    total_articles: "0",
    is_all_video_seen: false,
    title: "Modul Ketiga",
    description: "Deskripsi untuk modul kedua.",
    submitted: false,
  },
];

export const Modul = () => {
  const { subjectId, sessionId } = useParams<{
    subjectId: string;
    sessionId: string;
  }>();

  console.log("SubjectId: ", subjectId);
  console.log("SessionId: ", sessionId);

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
        <span className="text-blue-500 md:text-base text-sm font-semibold">
          Pelatihan-ku
        </span>
      </div>
      <div className="bg-white flex flex-col items-center mt-5 p-8 justify-center">
        <h1 className="font-bold text-4xl mb-5">Modul Pertemuan 1</h1>
        <div className="flex flex-wrap w-full justify-center gap-x-20 gap-y-8">
          {modulesData.map((module) => (
            <div
              key={module.id}
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
                    <span className="text-green-700 font-semibold text-center">
                      ✔
                    </span>
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
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{module.title}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
