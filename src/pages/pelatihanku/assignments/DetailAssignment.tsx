import { useParams } from "react-router-dom";
import { useDetailAssignmentData } from "../../../services/pelatihanku/AssignmentService";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { FileUploadForm } from "./components/FileUpload";
import { FinishedAssignment } from "./components/FinishedAssignment";
import LoadingSpinner from "../../../components/reusable/LoadingSpinner";
import { BackLink } from "../../../components/reusable/BackLink";

export const DetailAssignment = () => {
  const { subjectId, sessionId, assignmentId } = useParams<{
    subjectId: string;
    sessionId: string;
    assignmentId: string;
  }>();

  const { data, isLoading, error } = useDetailAssignmentData(
    subjectId,
    sessionId,
    assignmentId
  );

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
      path: `/assignment/${subjectId}/${sessionId}`,
    },
    {
      label: "Tugas",
    },
  ];

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-4 bg-gray-100">
      <Breadcrumb items={breadcrumbItems} />
      <div className="bg-white flex flex-col mt-5 p-5 md:p-8 justify-center rounded-lg">
        <h1 className="text-base md:text-3xl font-semibold pb-1 md:pb-3">
          {data?.data.assignment.title}
        </h1>
        <p className="text-sm md:text-lg">
          Modul {data?.data.detail.session_no}
        </p>
      </div>
      <div className="bg-white mt-5 w-full p-8 h-full rounded-lg">
        <p className="whitespace-pre-line md:text-base text-sm">
          {data?.data.assignment.desc}
        </p>
        <div className="border-b-[1px] border-gray-400 md:my-8 my-3" />
        {data?.data.assignment.progress.status === "FINISHED" ? (
          <FinishedAssignment assignmentData={data?.data.assignment} />
        ) : (
          <FileUploadForm
            subjectId={subjectId}
            sessionId={sessionId}
            assignmentId={assignmentId}
          />
        )}
        <BackLink to={`/assignment/${subjectId}/${sessionId}`} />
      </div>
    </div>
  );
};

export default DetailAssignment;
