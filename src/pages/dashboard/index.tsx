import React from "react";
import { useAuth } from "../../hooks/useAuth";
import {
  useDashboardData,
  useDashboardBanner,
} from "../../services/DashboardService";
import DashboardContent from "./DashboardContent";
import Sidebar from "./Sidebar";
import { DashboardData, DashboardBannerData } from "../../types/dashboard";

const Dashboard: React.FC = () => {
  const { handleLogout } = useAuth();

  const {
    data: dashboardData,
    isLoading: isDashboardLoading,
    isError: isDashboardError,
  } = useDashboardData();
  const {
    data: dashboardBannerData,
    isLoading: isBannerLoading,
    isError: isBannerError,
  } = useDashboardBanner();

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

  // Ensure dashboardData is of type DashboardData
  const dashboardDataTyped = dashboardData as DashboardData;

  // Ensure dashboardBanner is an array of DashboardBanner
  const dashboardBannerDataTyped = Array.isArray(dashboardBannerData)
    ? (dashboardBannerData as DashboardBannerData[])
    : dashboardBannerData
    ? [dashboardBannerData as DashboardBannerData]
    : [];

  return (
    <div className="h-full w-screen flex flex-col pt-44 px-36 bg-gray-100 ">
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <img src="/dashboard/home.png" className="w-6 -mt-1" alt="" />
        <h1 className="pl-5 text-[#9CA3AF] font-semibold">Beranda</h1>
      </div>
      <div className="flex flex-1">
        <Sidebar dashboardData={dashboardDataTyped} />
        <DashboardContent
          dashboardData={dashboardDataTyped}
          dashboardBannerdata={dashboardBannerDataTyped}
        />
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
