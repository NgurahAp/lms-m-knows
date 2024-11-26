import { Link, useParams } from "react-router-dom";
import { useAssignmentData } from "../../../services/pelatihanku/AssignmentService";
import { IoDocumentText } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import LoadingSpinner from "../../../components/reusable/LoadingSpinner";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { BackLink } from "../../../components/reusable/BackLink";

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
     label: data?.data.detail.subject_name,
     path: `/pelatihanku/${subjectId}`,
   },
   {
     label: `Pertemuan ${data?.data.detail.session_no}`,
   },
 ];

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-4 bg-gray-100">
      <Breadcrumb items={breadcrumbItems} />
      {/* Info */}
      <div className="bg-white flex flex-col mt-5 p-5 md:p-8 justify-center rounded-lg">
        <h1 className="text-base md:text-3xl font-semibold pb-1 md:pb-3">
          {data?.data.detail.subject_name}
        </h1>
        <p className="text-sm md:text-lg">
          Pertemuan {data?.data.detail.session_no}
        </p>
      </div>
      {/* Content */}
      <div className="bg-white flex flex-col mt-5 w-full p-5 md:px-8 pb-4 h-full justify-center rounded-lg">
        <div className="my-2 md:my-6  w-full">
          {data?.data.assignments.map((assignment) => (
            <Link
              to={`/detailAssignment/${subjectId}/${sessionId}/${assignment.id}`}
              className="flex items-center justify-between p-3 md:p-7 border border-gray-300 rounded-lg shadow-sm w-full"
            >
              <div className="flex items-center space-x-2">
                <IoDocumentText className="text-red-500 text-xl md:text-3xl mr-2 md:mr-3" />
                <div>
                  <h2 className="text-sm md:text-lg font-semibold pb-1">
                    Tugas Modul {data.data.detail.session_no}
                  </h2>
                  <p
                    className={` md:text-base text-xs
                      ${assignment.progress.timestamp_submitted
                        ? "text-gray-500"
                        : "text-red-500"}`
                    }
                  >
                    {formatTimestamp(assignment.progress.timestamp_submitted)}
                  </p>
                </div>
              </div>
              {assignment.progress.status === "FINISHED" && (
                <FaCheckCircle className="text-green-500 text-lg md:text-xl" />
              )}
            </Link>
          ))}
        </div>
        <BackLink to={`/pelatihanku/${subjectId}`} />
      </div>
    </div>
  );
};
