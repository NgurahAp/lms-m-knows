import React, { useState, useEffect } from "react";
import { DashboardContentProps } from "../../types/dashboard";
import { Calendar } from "./components/Calendar";
import { SubjectProgress } from "./components/SubjectProgress";

const DashboardContent: React.FC<DashboardContentProps> = ({
  dashboardData,
  dashboardBannerdata,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredBannerData = dashboardBannerdata.slice(2);

  useEffect(() => {
    if (filteredBannerData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % filteredBannerData.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [filteredBannerData.length]);

  return (
    <div className="md:w-[70%] w-full bg-gray-100 md:pl-6 pl-0 md:py-6">
      <div className="relative overflow-hidden h-72 rounded-3xl hidden md:block">
        <div className="absolute inset-0 flex items-center justify-center">
          {filteredBannerData.map((banner, index) => (
            <img
              key={banner.id}
              src={banner.url}
              alt={`Banner ${index + 1}`}
              className={`
                absolute max-w-full max-h-full object-contain 
                transition-opacity duration-500 ease-in-out 
                will-change-transform 
                transform-gpu 
                scale-100 
                hover:scale-105 
                antialiased 
                ${
                  index === currentImageIndex
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }
              `}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
      <SubjectProgress subjectProgressData={dashboardData.subject_progress} />
      <Calendar calendarData={dashboardData.calendar} />
    </div>
  );
};

export default DashboardContent;
