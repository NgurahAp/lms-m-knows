import React, { useEffect } from "react";
import {
  useDashboardData,
  useDashboardBanner,
} from "../../services/DashboardService";
import DashboardContent from "./DashboardContent";
import Sidebar from "./Sidebar";

const Dashboard: React.FC = () => {
  const {
    data: dashboardData,
    isLoading: isDashboardLoading,
    isError: isDashboardError,
    refetch: refetchDashboard,
  } = useDashboardData();

  const {
    data: dashboardBannerData,
    isLoading: isBannerLoading,
    isError: isBannerError,
    refetch: refetchBanner,
  } = useDashboardBanner();

  const isLoading = isDashboardLoading || isBannerLoading;
  const isError = isDashboardError || isBannerError;

  // Retry logic
  useEffect(() => {
    if (isError || !dashboardData?.profile) {
      const timer = setTimeout(() => {
        void refetchDashboard();
        void refetchBanner();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isError, dashboardData, refetchDashboard, refetchBanner]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (isError || !dashboardData?.profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const bannerData = Array.isArray(dashboardBannerData)
    ? dashboardBannerData
    : dashboardBannerData
    ? [dashboardBannerData]
    : [];

  return (
    <div className="h-full w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <img
          src="/dashboard/home.png"
          className="md:w-6 w-5 -mt-1"
          alt="home icon"
        />
        <h1 className="md:pl-5 pl-3 text-[#9CA3AF] md:text-base text-sm font-semibold">
          Beranda
        </h1>
      </div>

      <div className="md:flex flex-1">
        <Sidebar dashboardData={dashboardData} />
        <DashboardContent
          dashboardData={dashboardData}
          dashboardBannerdata={bannerData}
        />
      </div>
    </div>
  );
};

export default Dashboard;
