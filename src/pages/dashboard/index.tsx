import { useAuth } from "../../hooks/useAuth";
import { useDashboardData } from "../../services/DashboardService";
import DashboardContent from "./DashboardContent";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const { handleLogout } = useAuth();
  const { data, isLoading, isError } = useDashboardData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching dashboard data</div>;
  }

  console.log("Dashboard Data:", data);

  return (
    <div className="h-full flex flex-col pt-44 px-36 bg-gray-100">
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <img src="/dashboard/home.png" className="w-6 -mt-1" alt="" />
        <h1 className="pl-5 text-[#9CA3AF] font-semibold">Beranda</h1>
      </div>
      <div className="flex flex-1">
        <Sidebar />
        <DashboardContent />
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
