import { Assignment } from "../../../../types/pelatihanku/assignmentDetail";
import { calculateRemainingTime, formatToIndonesianDateTime } from "./Date";

interface OngoingStatusProps {
  assignmentData: Assignment | undefined;
}

export const FinishedAssignment: React.FC<OngoingStatusProps> = ({ assignmentData }) => {
  if (!assignmentData) return null;

  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-semibold pb-5">Status Penyerahan</h1>
      <table className="table-auto w-full border border-gray-300">
        <tbody>
          <tr className="border-b">
            <td className="p-4 font-medium border-r w-1/4 border-gray-300 bg-gray-50">
              Status Penyerahan
            </td>
            <td className="p-4 bg-[#EBF5FB]">
              {assignmentData.progress.status === "FINISHED"
                ? "Sudah Terkirim"
                : assignmentData.progress.status}
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-4 font-medium border-r border-gray-300">
              Status Penilaian
            </td>
            <td className="p-4">{assignmentData.progress.score}</td>
          </tr>
          <tr className="border-b">
            <td className="p-4 font-medium border-r border-gray-300 bg-gray-50">
              Tenggat Waktu
            </td>
            <td className="p-4 bg-gray-50">
              {formatToIndonesianDateTime(assignmentData.progress.deadline)}
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-4 font-medium border-r border-gray-300">
              Waktu Tersisa
            </td>
            <td className="p-4 bg-[#EBF5FB]">
              {calculateRemainingTime(assignmentData.progress.deadline)}
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-4 font-medium border-r border-gray-300 bg-gray-50">
              Terakhir Diubah
            </td>
            <td className="p-4 bg-gray-50">
              {formatToIndonesianDateTime(
                assignmentData.progress.timestamp_submitted
              )}
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-4 font-medium border-r border-gray-300">
              Deskripsi
            </td>
            <td className="p-4">{assignmentData.progress.text}</td>
          </tr>
          <tr>
            <td className="p-4 font-medium border-r border-gray-300 bg-gray-50">
              Penyerahan Tugas
            </td>
            <td className="p-4 bg-gray-50">
              {assignmentData.progress.files.map((file) => (
                <div  key={file.document_url}>
                  <a
                    href={file.document_url}
                    className="text-blue-500 hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/penugasan/pdf.png" className="w-8 mr-3" alt="" />{" "}
                    {file.document_filename}
                  </a>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
