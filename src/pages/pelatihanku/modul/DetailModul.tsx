import { Link, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export const DetailModule = () => {
  const { subjectId, sessionId, moduleId } = useParams<{
    subjectId: string;
    sessionId: string;
    moduleId: string;
  }>();

  console.log("SubjectId: ", subjectId);
  console.log("SessionId: ", sessionId);
  console.log("ModuleId: ", moduleId);

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
        <Link to="">
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            Jduul
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-gray-400 md:text-base text-sm font-semibold">
          Pertemuan
        </span>
      </div>
      <div className="bg-white flex flex-col items-center mt-5 p-8 justify-center">
        <h1 className="font-bold text-4xl mb-5">Modul Pertemuan</h1>
        <div className="flex flex-wrap w-full justify-center gap-x-20 gap-y-8"></div>
      </div>
    </div>
  );
};
