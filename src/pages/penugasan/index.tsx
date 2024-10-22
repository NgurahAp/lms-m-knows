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
        return "text-blue-500";
      case "sedang dinilai":
        return "text-yellow-500";
      case "terlambat":
        return "text-red-500";
      case "selesai":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  const tabs = [
    { id: "semua", label: "Semua Penugasan" },
    { id: "ditugaskan", label: "Ditugaskan" },
    { id: "sedang-dinilai", label: "Sedang Dinilai" },
    { id: "terlambat", label: "Terlambat" },
    { id: "selesai", label: "Selesai" },
  ];

  return (
    <div className="h-full w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      <section className="bg-white mt-5 rounded-xl">
        <div className="p-6">
          <div className="flex flex-wrap gap-4 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-2 px-4 text-base font-semibold whitespace-nowrap ${
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

          <div className="mt-6 grid gap-4">
            {filterPenugasan().map((task) => (
              <div
                key={task.id}
                className="bg-white shadow-md rounded-lg p-6 w-full border border-gray-100 hover:border-blue-100 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{task.modul}</h3>
                    <p className="text-sm text-gray-600">{task.title}</p>
                  </div>
                  <span
                    className={`${getStatusColor(task.status)} font-medium`}
                  >
                    {task.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    Mulai: {formatDateTime(task.startAt)}
                  </p>
                  <p className="text-gray-700">
                    Selesai: {formatDateTime(task.endAt)}
                  </p>
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
