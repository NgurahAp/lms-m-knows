import { Kalender } from "./components/Kalender";
import { TerakhirPengerjaan } from "./components/TerakhirPengerjaan";

const DashboardContent = () => {
  return (
    <div className="w-[70%] bg-gray-100 pl-6 py-6">
      <div className="grid grid-cols-2 gap-4">
        <div className=" bg-white shadow-lg p-4">
          <h2 className="text-lg font-semibold">Pengumuman</h2>
          <p className="text-gray-500">Pameran Budaya Jepang...</p>
        </div>
        <div className="bg-white shadow-lg p-4">
          <h2 className="text-lg font-semibold">Acara</h2>
          <p className="text-gray-500">Website Cyber Security...</p>
        </div>
      </div>

      <TerakhirPengerjaan />
      <Kalender />
    </div>
  );
};

export default DashboardContent;
