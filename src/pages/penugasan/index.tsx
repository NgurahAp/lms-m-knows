import { useState } from "react";
import { PenugasanData } from "./components/penugasanData";

export const Penugasan = () => {
  const [activeTab, setActiveTab] = useState<
    "semua" | "ditugaskan" | "sedang-dinilai" | "terlambat" | "selesai"
  >("semua");

  const filterPenugasan = () => {
    if (activeTab === "semua") return PenugasanData;
    if (activeTab === "sedang-dinilai") {
      return PenugasanData.filter((task) => task.status === "Sedang dinilai");
    }
    return PenugasanData.filter(
      (task) => task.status.toLowerCase() === activeTab
    );
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "ditugaskan":
        return "blue-500";
      case "sedang dinilai":
        return "gray-500";
      case "terlambat":
        return "yellow-500";
      case "selesai":
        return "green-500";
      default:
        return "gray-500";
    }
  };

  const getStatusImage = (status: string) => {
    switch (status.toLowerCase()) {
      case "ditugaskan":
        return "/penugasan/ditugaskan.png";
      case "sedang dinilai":
        return "/penugasan/sedang-dinilai.png";
      case "terlambat":
        return "/penugasan/terlambat.png";
      case "selesai":
        return "/penugasan/selesai.png";
      default:
        return "/penugasan/ditugaskan.png";
    }
  };

  const tabs = [
    { id: "semua", label: "Semua" },
    { id: "ditugaskan", label: "Ditugaskan" },
    { id: "sedang-dinilai", label: "Sedang Dinilai" },
    { id: "terlambat", label: "Terlambat" },
    { id: "selesai", label: "Selesai" },
  ];

  return (
    <div className="h-full w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      <section className="bg-white mt-5 rounded-xl">
        <div className="p-14">
          <div className="flex flex-wrap gap-10 border-b  border-white">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-4 px-4 text-xl font-semibold border-1 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-8">
            {filterPenugasan().map((task) => (
              <div
                key={task.id}
                className="relative bg-white shadow-md flex justify-between items-center rounded-lg p-6 w-full border border-gray-100 hover:border-blue-100 transition-colors"
              >
                <div className="flex justify-between pl-4 items-start mb-4">
                  <span
                    className={`absolute top-0 left-0 h-full w-2 bg-${getStatusColor(
                      task.status
                    )} rounded-l-lg`}
                  ></span>
                  <div>
                    <h3 className="text-2xl font-semibold">{task.modul}</h3>
                    <p className="text-xl py-5 text-gray-600">{task.title}</p>
                    <p className="text-gray-700 text-xl">
                      Tenggat: {formatDateTime(task.endAt)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 w-44 justify-center ">
                  <img
                    src={getStatusImage(task.status)}
                    alt={`Status ${task.status}`}
                    className="w-14 h-14 object-contain"
                  />
                  <span
                    className={`text-${getStatusColor(
                      task.status
                    )} font-medium text-xl`}
                  >
                    {task.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Penugasan;
