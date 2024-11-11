import { Link, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export const Reflection = () => {
  const { subjectId, sessionId } = useParams<{
    sessionId: string;
  }>();

  // const { data, isLoading, error } = useAssignmentData(subjectId, sessionId);
  // if (isLoading) {
  //   return (
  //     <div className="min-h-[85vh] w-screen flex items-center justify-center">
  //       Loading...
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="min-h-[85vh] w-screen flex items-center justify-center">
  //       Error loading data
  //     </div>
  //   );
  // }

  // console.log(data);

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
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
            data?.data.detail.subject_name
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-gray-400 md:text-base text-sm font-semibold">
          Pertemuan data?.data.detail.session_no
        </span>
      </div>
      {/* Info */}
      <div className="bg-white flex flex-col mt-5 px-8 h-36 justify-center rounded-lg">
        <h1 className="text-3xl font-semibold pb-3">
          data?.data.detail.subject_name
        </h1>
        <p className="text-lg">Pertemuan Refleksi data?.data.detail.session_no</p>
      </div>
      {/* Content */}
      
    </div>
  );
};
