import { useState } from "react";
import LoadingSpinner from "../../components/reusable/LoadingSpinner";
import { useAllAssignmentData } from "../../hooks/useAllAsignment";
import { AllAssignment } from "../../types/allAssignment";

export const Penugasan = () => {
  const { data, isLoading, error } = useAllAssignmentData();
  const [activeTab, setActiveTab] = useState("Semua");

  const filteredAssignments = (): AllAssignment[] => {
    const assignments = data?.data ?? [];

    switch (activeTab) {
      case "Semua":
        return assignments;
      case "Ditugaskan":
        return assignments.filter((a) => a.progress_status === "ONGOING");
      case "Terlambat":
        return assignments.filter(
          (a) =>
            a.progress_status === "FINISHED" &&
            a.progress_timestamp_submitted &&
            new Date(a.progress_timestamp_submitted) >
              new Date(a.progress_deadline)
        );
      case "Selesai":
        return assignments.filter((a) => a.progress_status === "FINISHED");
      default:
        return [];
    }
  };

  const getStatusDisplay = (assignment: AllAssignment) => {
    // Cek apakah tugas terlambat
    const isLate =
      assignment.progress_timestamp_submitted &&
      new Date(assignment.progress_timestamp_submitted) >
        new Date(assignment.progress_deadline);

    if (isLate && assignment.progress_status === "FINISHED") {
      return {
        text: "Terlambat",
        className: "bg-red-100 text-red-600",
      };
    } else if (assignment.progress_status === "FINISHED") {
      return {
        text: "Selesai",
        className: "bg-green-100 text-green-600",
      };
    } else {
      return {
        text: "Ditugaskan",
        className: "bg-blue-100 text-blue-600",
      };
    }
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
          {filteredAssignments().map((assignment, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-white mb-4"
            >
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
                    getStatusDisplay(assignment).className
                  }`}
                >
                  {getStatusDisplay(assignment).text}
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
