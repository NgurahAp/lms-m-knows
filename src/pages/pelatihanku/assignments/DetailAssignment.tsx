import { useParams } from "react-router-dom";
import { useDetailAssignmentData } from "../../../services/pelatihanku/AssignmentService";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { FileUploadForm } from "./components/FileUpload";
import { FinishedAssignment } from "./components/FinishedAssignment";
import LoadingSpinner from "../../../components/reusable/LoadingSpinner";
import { BackLink } from "../../../components/reusable/BackLink";
import PageInfo from "../../../components/reusable/PageInfo";

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
      <PageInfo
        title={data?.data.assignment.title}
        subtitle={`Modul ${data?.data.detail.session_no}`}
      />
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
