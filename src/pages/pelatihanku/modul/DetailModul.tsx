import { Link, useParams } from "react-router-dom";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { useDetailModuleData } from "../../../services/modul/ModulService";
import ModuleCompletionDialog from "./components/Summary";

export const DetailModule = () => {
  const { subjectId, sessionId, moduleId } = useParams<{
    subjectId: string;
    sessionId: string;
    moduleId: string;
  }>();

  const { data, isLoading, error } = useDetailModuleData(
    subjectId,
    sessionId,
    moduleId
  );

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

  console.log(data);

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
        <Link to={`/pelatihanku/${subjectId}`}>
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            {data?.detail.subject_name}
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to={`/modul/${subjectId}/${sessionId}`}>
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            Pertemuan {data?.detail.session_no}
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-gray-400 md:text-base text-sm font-semibold">
          {data?.module.title}
        </span>
      </div>
      <div className="bg-white flex flex-col items-center mt-5 px-8 py-20 justify-center rounded-lg">
        <h1 className="font-bold text-4xl mb-8">{data?.module.title}</h1>
        <div className="flex flex-col md:flex-row justify-center items-start gap-6  bg-white w-full">
          {/* Left Section */}
          <div className="flex flex-col items-center h-[73vh] bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
            <div className="flex flex-col items-center">
              <img
                src="/dashboard/empty-state.png"
                alt="Illustration"
                className="h-96 mb-1"
              />
              <p className="text-gray-500 text-lg">Tidak ada video</p>
            </div>
            <div className="w-full flex flex-col pt-14">
              <hr className="border-t-[1px] border-gray-300 w-full" />
              <p className="text-gray-500 pt-5">
                {data?.module.description && data.module.description !== "-"
                  ? data.module.description
                  : "Tidak ada deskripsi"}
              </p>
            </div>
            <Link
              to={`/modul/${subjectId}/${sessionId}`}
              className="mt-8 flex items-center justify-between w-full text-blue-500"
            >
              <p className="flex items-center gap-2 underline">
                <FaArrowLeft />
                Kembali
              </p>
              <Link
                to={`/quis/${subjectId}/${sessionId}`}
                className=" px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Lanjutkan Ke Kuis
              </Link>
            </Link>
          </div>

          <div className="flex flex-col h-[73vh] justify-between bg-white rounded-lg shadow-md p-8 w-full md:w-1/2 ">
            <div>
              <div className="mb-4">
                <h2 className="text-gray-700 text-xl font-semibold">Video</h2>
                <p className="text-gray-500 py-5">Tidak ada video</p>
                <hr className="border-t-[1px] border-gray-300 w-full" />
              </div>
              <div className="mb-4">
                <h2 className="text-gray-700 font-semibold ">Dokumen</h2>
                {data?.module.documents.map((doc, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(doc.document_file, "_blank")}
                    className="text-gray-500 flex items-center w-full border-[1px] rounded-lg p-4 my-5 gap-3"
                  >
                    <IoDocumentText className="text-3xl text-red-500" />
                    <span>{doc.title || "Document"}</span>
                  </button>
                ))}
                <hr className="border-t-[1px] border-gray-300 w-full" />
              </div>
              <div className="mb-4">
                <h2 className="text-gray-700 text-xl font-semibold">Jurnal</h2>
                <p className="text-gray-500 py-5">Tidak ada Jurnal</p>
                <hr className="border-t-[1px] border-gray-300 w-full" />
              </div>
              <div className="mb-4">
                <h2 className="text-gray-700 text-xl font-semibold">Artikel</h2>
                <p className="text-gray-500 py-5">Tidak ada Artikel</p>
                <hr className="border-t-[1px] border-gray-300 w-full" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-center">
                <ModuleCompletionDialog
                  moduleId={data?.module.id}
                  onComplete={() => {
                    // Tambahkan logika untuk menandai modul sebagai selesai
                    console.log("Modul selesai");
                  }}
                />
                {/* {data?.module.status === "FINISHED" ? (
                  <button className="mt-4 px-20 py-4 flex rounded-lg items-center bg-green-500 text-xl gap-3 text-white hover:bg-green-600">
                    <div className="bg-white rounded-full">
                      <FaCheck className="text-green-600 p-1 text-xl" />
                    </div>
                    Modul Selesai
                  </button>
                ) : (
                  <ModuleCompletionDialog
                    onComplete={() => {
                      // Tambahkan logika untuk menandai modul sebagai selesai
                      console.log("Modul selesai");
                    }}
                  />
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
