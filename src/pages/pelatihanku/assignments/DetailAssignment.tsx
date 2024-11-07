import { useParams } from "react-router-dom";
import { useDetailAssignmentData } from "../../../services/pelatihanku/AssignmentService";
import { PageInfo } from "../../../components/reusable/PageInfo";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { FileUploadForm } from "./components/FileUpload";
import {
  calculateRemainingTime,
  formatToIndonesianDateTime,
} from "./components/Date";

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

  const handleSubmit = ({
    description,
    file,
  }: {
    description: string;
    file: File | null;
  }) => {
    console.log("Description:", description);
    console.log("File:", file);
  };

  const handleCancel = () => {
    // Handle cancel logic here
  };

  console.log(data);

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      {/* Assignment Info */}
      <PageInfo
        title={data?.data.assignment.title}
        detail={`Modul ${data?.data.detail.session_no}`}
      />
      {/* Quiz Content */}
      <div className="bg-white mt-5 w-full p-8 h-full rounded-lg">
        <h1 className="font-bold">{data?.data.assignment.title}</h1>
        <p className="pt-5 whitespace-pre-line">{data?.data.assignment.desc}</p>
        <div className="border-b-[1px] border-gray-400 my-10" />
        {/* Status */}
        {/* <FileUploadForm onSubmit={handleSubmit} onCancel={handleCancel} /> */}
        <div className="overflow-x-auto">
          <h1 className="text-2xl font-semibold pb-5">Status Penyerahan</h1>
          <table className="table-auto w-full border border-gray-300">
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium border-r w-1/4 border-gray-300 bg-gray-50">
                  Status Penyerahan
                </td>
                <td className="p-4 bg-[#EBF5FB]">
                  {data?.data.assignment.progress.status === "FINISHED"
                    ? "Sudah Terkirim"
                    : data?.data.assignment.progress.status}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium border-r border-gray-300">
                  Status Penilaian
                </td>
                <td className="p-4">{data?.data.assignment.progress.score}</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium border-r border-gray-300 bg-gray-50">
                  Tenggat Waktu
                </td>
                <td className="p-4 bg-gray-50">
                  {formatToIndonesianDateTime(
                    data?.data.assignment.progress.deadline
                  )}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium border-r border-gray-300">
                  Waktu Tersisa
                </td>
                <td className="p-4 bg-[#EBF5FB]">
                  {calculateRemainingTime(
                    data?.data.assignment.progress.deadline
                  )}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium border-r border-gray-300 bg-gray-50">
                  Terakhir Diubah
                </td>
                <td className="p-4 bg-gray-50">
                  {formatToIndonesianDateTime(
                    data?.data.assignment.progress.timestamp_submitted
                  )}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium border-r border-gray-300">
                  Deskripsi
                </td>
                <td className="p-4">{data?.data.assignment.progress.text}</td>
              </tr>
              <tr>
                <td className="p-4 font-medium border-r border-gray-300 bg-gray-50">
                  Penyerahan Tugas
                </td>
                {data?.data.assignment.progress.files.map((file) => (
                  <td className="p-4 bg-gray-50" key={file.document_url}>
                    <a
                      href={file.document_url}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {file.document_filename}
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailAssignment;
