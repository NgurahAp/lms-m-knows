import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyStudyCard } from "./components/MyStudyCard";
import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { useMyStudyData } from "../../services/MyStudyService";
import { MyStudyData } from "../../types/pelatihanku";

export const Pelatihanku = () => {
  const [activeTab, setActiveTab] = useState<"ongoing" | "completed">(
    "ongoing"
  );

  const {
    data: myStudyData,
    isLoading: isMyStudyDataLoading,
    isError: isMyStudyDataError,
  } = useMyStudyData();

  const isLoading = isMyStudyDataLoading;
  const isError = isMyStudyDataError;

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen flex items-center justify-center">
        Error fetching dashboard data or banner
      </div>
    );
  }

  // Pastikan myStudyData adalah array dan beri default empty array jika undefined
  const studyDataArray = Array.isArray(myStudyData) ? myStudyData : [];

  // Filter trainings based on progress
  const trainingOngoing: MyStudyData[] = studyDataArray.filter(
    (training) => training.progress_percentage < 100
  );

  const trainingCompleted: MyStudyData[] = studyDataArray.filter(
    (training) => training.progress_percentage === 100
  );

  // Fungsi yang menerima array bertipe MyStudyData[]
  const renderTraining = (trainings: MyStudyData[]) => {
    if (trainings.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-10">
          <img src="/pelatihanku/empty-state.png" className="w-1/4" alt="" />
          <h1 className="text-gray-500 text-lg py-3">Tidak ada pelatihan</h1>
          <button className="bg-blue-500 text-white py-2 px-7 rounded-lg">
            Ikuti Pelatihan
          </button>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trainings.map((training) => (
          <MyStudyCard key={training.id} training={training} />
        ))}
      </div>
    );
  };

  return (
    <div className="h-full w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <Link to="/dashboard" className="flex items-center">
          <img
            src="/pelatihanku/home.png"
            className="md:w-6 w-5 -mt-1"
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

      <section className="bg-white mt-5 rounded-xl">
        <SearchBar />
        <div className="p-6">
          <div className="flex space-x-8">
            <button
              className={`py-2 md:px-4 px-2 md:text-lg text-base font-semibold ${
                activeTab === "ongoing"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("ongoing")}
            >
              Sedang Berjalan
            </button>
            <button
              className={`py-2 px-4 md:text-lg text-base font-semibold ${
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
            {activeTab === "ongoing"
              ? renderTraining(trainingOngoing)
              : renderTraining(trainingCompleted)}
          </div>
        </div>
      </section>
    </div>
  );
};
