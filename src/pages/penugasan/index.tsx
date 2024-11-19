import { useState } from "react";
import LoadingSpinner from "../../components/reusable/LoadingSpinner";
import { useAllAssignmentData } from "../../hooks/useAllAsignment";
import { PenugasanData } from "./components/penugasanData";

export const Penugasan = () => {
  const { data, isLoading, error } = useAllAssignmentData();
  const [activeTab, setActiveTab] = useState("Semua");

  const filteredAssignments = () => {
    if (activeTab === "Semua") return PenugasanData;
    if (activeTab === "Ditugaskan")
      return PenugasanData.filter((a) => a.progress_status === "ONGOING");
    if (activeTab === "Terlambat")
      return PenugasanData.filter(
        (a) =>
          a.progress_status === "FINISHED" &&
          new Date(a.progress_timestamp_submitted!) >
            new Date(a.progress_deadline)
      );
    if (activeTab === "Selesai")
      return PenugasanData.filter((a) => a.progress_status === "FINISHED");
    return [];
  };

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

  console.log(data);

  return (
    <div className="h-full w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      <section className="bg-white mt-5 rounded-xl">
        <div className="flex mb-4 space-x-4 border-b">
          {[
            "Semua",
            "Ditugaskan",
            "Sedang Dinilai",
            "Terlambat",
            "Selesai",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 text-sm ${
                activeTab === tab
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div>
          {filteredAssignments().map((assignment) => (
            <div className="p-4 border rounded-lg shadow-sm bg-white mb-4">
              <h2 className="font-bold text-lg">
                {assignment.assignment_title}
              </h2>
              <p className="text-gray-500">{assignment.subject_name}</p>
              <p className="text-gray-400 text-sm">
                Tenggat:{" "}
                {new Date(assignment.progress_deadline).toLocaleString()}
              </p>
              <div className="mt-2 text-right">
                <span
                  className={`py-1 px-3 rounded text-sm ${
                    assignment.progress_status === "FINISHED"
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {assignment.progress_status === "FINISHED"
                    ? "Selesai"
                    : "Ditugaskan"}
                </span>
              </div>
            </div>
          ))}
          {filteredAssignments().length === 0 && (
            <p className="text-gray-500">Tidak ada data.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Penugasan;
