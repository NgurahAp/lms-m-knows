import DashboardContent from "./DashboardContent";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col pt-44 px-36 bg-gray-100">
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <img src="/dashboard/home.png" className="w-6 -mt-1" alt="" />
        <h1 className="pl-5 text-[#9CA3AF] font-semibold">Beranda</h1>
      </div>
      <div className="flex flex-1">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
