import React, { useState, useEffect } from "react";
import { DashboardBanner, DashboardData } from "../../types/dashboard";
import { Kalender } from "./components/Kalender";
import { TerakhirPengerjaan } from "./components/TerakhirPengerjaan";

interface DashboardContentProps {
  dashboardData: DashboardData;
  dashboardBanner: DashboardBanner[];
}

const DashboardContent: React.FC<DashboardContentProps> = ({
  dashboardData,
  dashboardBanner,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (dashboardBanner.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % dashboardBanner.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [dashboardBanner.length]);

  console.log(dashboardBanner);

  return (
    <div className="w-[70%] bg-gray-100 pl-6 py-6">
      <div className="relative overflow-hidden h-96 rounded-3xl">
        {dashboardBanner.map((banner, index) => (
          <img
            key={banner.id}
            src={banner.url}
            className={`absolute w-full h-full object-cover transition-transform duration-500 ease-in-out ${
              index === currentImageIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform: `translateX(${(index - currentImageIndex) * 100}%)`,
            }}
          />
        ))}
      </div>
      <TerakhirPengerjaan />
      <Kalender calendarData={dashboardData.calendar} />
    </div>
  );
};

export default DashboardContent;
