import { FaChevronRight } from "react-icons/fa"; // Import icon chevron
import { Link } from "react-router-dom"; // Untuk navigasi
import { TrainingCard } from "./components/PelatihankuCard";
import { trainingCompleted, trainingOngoing } from "./components/pelatihanData";
import { useState } from "react";

export const Pelatihanku = () => {
  const [activeTab, setActiveTab] = useState<"ongoing" | "completed">(
    "ongoing"
  );

  return (
    <div className="h-full w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <Link to="/dashboard" className="flex items-center">
          <img
            src="/pelatihanku/home.png"
            className="md:w-6 w-5 -mt-1 "
            alt="Home"
          />
          <span className="md:pl-5 pl-3 text-blue-500 md:text-base text-sm font-semibold">
            Beranda
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-[#9CA3AF] md:text-base text-sm font-semibold">
          Pelatihan-ku
        </span>
      </div>

      <section>
        <div className="p-6">
          <div className="flex space-x-8">
            <button
              className={`py-2 px-4 ${
                activeTab === "ongoing"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("ongoing")}
            >
              Sedang Berjalan
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "completed"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("completed")}
            >
              Selesai
            </button>
          </div>

          <div className="mt-6">
            {activeTab === "ongoing" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trainingOngoing.map((training) => (
                  <TrainingCard key={training.id} training={training} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trainingCompleted.map((training) => (
                  <TrainingCard key={training.id} training={training} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
