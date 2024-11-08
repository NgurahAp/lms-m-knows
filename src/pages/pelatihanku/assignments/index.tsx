import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
import { useAssignmentData } from "../../../services/pelatihanku/AssignmentService";
import { IoDocumentText } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

const formatTimestamp = (timestamp: string) => {
  if (!timestamp) {
    return "Belum mengerjakan";
  }

  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const [datePart, timePart] = formattedDate.split(" ");
  return `Selesai ${datePart} ${timePart}`;
};

export const Assignment = () => {
  const { subjectId, sessionId } = useParams<{
    subjectId: string;
    sessionId: string;
  }>();

  const { data, isLoading, error } = useAssignmentData(subjectId, sessionId);
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
            {data?.data.detail.subject_name}
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-gray-400 md:text-base text-sm font-semibold">
          Pertemuan {data?.data.detail.session_no}
        </span>
      </div>
      {/* Info */}
      <div className="bg-white flex flex-col mt-5 px-8 h-36 justify-center rounded-lg">
        <h1 className="text-3xl font-semibold pb-3">
          {data?.data.detail.subject_name}
        </h1>
        <p className="text-lg">Pertemuan {data?.data.detail.session_no}</p>
      </div>
      {/* Content */}
      <div className="bg-white flex flex-col mt-5 w-full px-8 h-full justify-center rounded-lg">
        <div className="my-6  w-full">
          {data?.data.assignments.map((assignment) => (
            <Link
              to={`/detailAssignment/${subjectId}/${sessionId}/${assignment.id}`}
              className="flex items-center justify-between p-7 border border-gray-300 rounded-lg shadow-sm w-full"
            >
              <div className="flex items-center space-x-2">
                <IoDocumentText className="text-red-500 text-3xl mr-3" />
                <div>
                  <h2 className="text-lg font-semibold pb-1">
                    Tugas Modul {data.data.detail.session_no}
                  </h2>
                  <p
                    className={
                      assignment.progress.timestamp_submitted
                        ? "text-gray-500"
                        : "text-red-500"
                    }
                  >
                    {formatTimestamp(assignment.progress.timestamp_submitted)}
                  </p>
                </div>
              </div>
              {assignment.progress.status === "FINISHED" && (
                <FaCheckCircle className="text-green-500 text-xl" />
              )}
            </Link>
          ))}
        </div>
        <Link
          to={`/pelatihanku/${subjectId}`}
          className="flex items-center gap-2 p-5 underline justify-start text-blue-500"
        >
          <FaArrowLeft />
          Kembali
        </Link>
      </div>
    </div>
  );
};
