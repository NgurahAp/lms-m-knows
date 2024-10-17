import React, { useState, useEffect } from "react";
import { DashboardBanner, DashboardData } from "../../types/dashboard";
import { Kalender } from "./components/Kalender";
import { TerakhirPengerjaan } from "./components/TerakhirPengerjaan";

interface DashboardContentProps {
  dashboardData: DashboardData;
  dashboardBanner: DashboardBanner;
}

const DashboardContent: React.FC<DashboardContentProps> = ({
  dashboardData,
  dashboardBanner,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/dashboard/banner.png", "/dashboard/banner1.webp"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  console.log("Banner: ", dashboardBanner);

  return (
    <div className="w-[70%] bg-gray-100 pl-6 py-6">
      <div className="relative overflow-hidden h-96 rounded-3xl">
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            className={`absolute w-full h-full object-cover transition-transform duration-500 ease-in-out ${
              index === currentImageIndex ? "translate-x-0" : "translate-x-full"
            }`}
            alt={`Banner ${index + 1}`}
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
