import { useState } from "react";
import LoadingSpinner from "../../components/reusable/LoadingSpinner";
import { useAllAssignmentData } from "../../hooks/useAllAsignment";
import { AllAssignment } from "../../types/allAssignment";
import { Link } from "react-router-dom";

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
        return assignments.filter(
          (a) =>
            a.progress_status === "FINISHED" &&
            a.progress_timestamp_submitted &&
            new Date(a.progress_timestamp_submitted) <
              new Date(a.progress_deadline)
        );
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
        textStyle: "text-yellow-500",
        line: "bg-yellow-500",
        img: "/penugasan/terlambat.png",
      };
    } else if (assignment.progress_status === "FINISHED") {
      return {
        text: "Selesai",
        textStyle: "text-green-500",
        line: "bg-green-500",
        img: "/penugasan/selesai.png",
      };
    } else {
      return {
        text: "Ditugaskan",
        textStyle: "text-blue-500",
        line: "bg-blue-500",
        img: "/penugasan/ditugaskan.png",
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
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-4 bg-gray-100">
      <section className="bg-white p-10 rounded-xl">
        <div className="flex flex-wrap mb-4 md:space-x-8 md:justify-start justify-center">
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
              className={`md:py-4 py-1 md:px-10 px-3 md:text-base text-sm  ${
                activeTab === tab
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="pt-4">
          {filteredAssignments().map((assignment, index) => (
            <Link
              to={`/detailAssignment/${assignment.subject_id}/${assignment.assignment_session_id}/${assignment.assignment_id}`}
              key={index}
              className=" border rounded-lg shadow-sm flex md:flex-row flex-col justify-between bg-white mb-8"
            >
              <div className="flex">
                <div
                  className={`h-full md:w-2 w-8 rounded-l-lg ${
                    getStatusDisplay(assignment).line
                  }`}
                ></div>
                <div className="pt-10 md:px-8 px-2">
                  <h2 className="font-bold text-xl">
                    {assignment.assignment_title}
                  </h2>
                  <p className="text-gray-500 py-2  text-sm md:text-lg">
                    {assignment.subject_name}
                  </p>
                  <p className="text-gray-400 md:text-base text-xs">
                    Tenggat:{" "}
                    {new Date(assignment.progress_deadline).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className=" flex flex-col md:w-48 items-center justify-center md:pr-8 md:pb-0 py-8">
                <img
                  src={`${getStatusDisplay(assignment).img}`}
                  className="md:w-11 w-8 pb-2"
                  alt=""
                />
                <span
                  className={` rounded text-sm md:text-lg ${
                    getStatusDisplay(assignment).textStyle
                  }`}
                >
                  {getStatusDisplay(assignment).text}
                </span>
              </div>
            </Link>
          ))}
          {filteredAssignments().length === 0 && (
            <div className="flex flex-col items-center py-5">
              <img src="/dashboard/empty-state.png" className="w-80 " alt="" />
              <p className="text-gray-500">Tidak ada tugas di kategori ini.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Penugasan;
