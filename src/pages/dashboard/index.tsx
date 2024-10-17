import { useAuth } from "../../hooks/useAuth";
import {
  useDashboardData,
  useDashboardBanner,
} from "../../services/DashboardService"; // Import kedua hook
import DashboardContent from "./DashboardContent";
import Sidebar from "./Sidebar";
import { DashboardData, DashboardBanner } from "../../types/dashboard";

const Dashboard = () => {
  const { handleLogout } = useAuth();

  const {
    data: dashboardData,
    isLoading: isDashboardLoading,
    isError: isDashboardError,
  } = useDashboardData();
  const {
    data: dashboardBanner,
    isLoading: isBannerLoading,
    isError: isBannerError,
  } = useDashboardBanner();

  // Menggabungkan status loading dari keduanya
  const isLoading = isDashboardLoading || isBannerLoading;
  const isError = isDashboardError || isBannerError;

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching dashboard data or banner</div>;
  }

  // Pastikan data tersedia
  const dashboardDataTyped = dashboardData as DashboardData;
  const dashboardBannerTyped = dashboardBanner as DashboardBanner;

  return (
    <div className="h-full w-screen flex flex-col pt-44 px-36 bg-gray-100">
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <img src="/dashboard/home.png" className="w-6 -mt-1" alt="" />
        <h1 className="pl-5 text-[#9CA3AF] font-semibold">Beranda</h1>
      </div>
      <div className="flex flex-1">
        <Sidebar />
        {/* Pass dashboardData and dashboardBanner to DashboardContent */}
        <DashboardContent
          dashboardData={dashboardDataTyped}
          dashboardBanner={dashboardBannerTyped}
        />
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
