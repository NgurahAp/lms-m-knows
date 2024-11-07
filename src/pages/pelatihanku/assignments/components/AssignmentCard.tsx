import React from "react";
import { Assignment } from "../../../../types/pelatihanku/assignment";

interface AssignmentCardProps {
  assignment: Assignment;
  sessionNo: number;
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({
  assignment,
  sessionNo,
}) => {
  const getStatusConfig = (status: string) => {
    const statusLower = status.toLowerCase();

    switch (statusLower) {
      case "finish":
        return {
          image: "/penugasan/selesai.png",
          color: "text-green-500",
          stripColor: "bg-green-500",
          alt: "Status FINISHED",
        };
      case "ongoing":
        return {
          image: "/penugasan/ditugaskan.png",
          color: "text-blue-500",
          stripColor: "bg-blue-500",
          alt: "Status ONGOING",
        };
      case "late":
        return {
          image: "/penugasan/terlambat.png",
          color: "text-yellow-500",
          stripColor: "bg-yellow-500",
          alt: "Status LATE",
        };
      default:
        return {
          image: "/penugasan/selesai.png",
          color: "text-green-500",
          stripColor: "bg-green-500",
          alt: "Status",
        };
    }
  };

  const config = getStatusConfig(assignment.progress.status);

  return (
    <div className="relative bg-white shadow-md flex justify-between items-center rounded-lg p-6 w-full border border-gray-100 hover:border-blue-100 transition-colors">
      <div className="flex justify-between pl-4 items-start mb-4">
        <span
          className={`absolute top-0 left-0 h-full w-2 ${config.stripColor} rounded-l-lg`}
        ></span>
        <div>
          <h3 className="text-2xl font-semibold">Tugas Modul {sessionNo}</h3>
          <p className="text-xl py-5 text-gray-600">{assignment.title}</p>
          <p className="text-gray-700 text-xl">
            Tenggat:{" "}
            {new Date(assignment.progress.deadline).toLocaleDateString(
              "id-ID",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            )}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 w-44 justify-center">
        <img
          src={config.image}
          alt={config.alt}
          className="w-14 h-14 object-contain"
        />
        <span className={`${config.color} font-medium text-xl`}>
          {assignment.progress.status}
        </span>
      </div>
    </div>
  );
};

export default AssignmentCard;
