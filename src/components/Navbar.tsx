import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Import Link

interface ProfileData {
  avatar: string;
  full_name: string;
}

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Pelatihan-ku", path: "/pelatihanku" },
    { name: "Penugasan", path: "/penugasan" },
    { name: "Nilai & Sertifikat", path: "/nilai-sertifikat" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setProfileData(JSON.parse(storedProfile));
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
      <div className="flex justify-between px-4 md:px-36 h-20 items-center">
        <div className="flex items-center space-x-2">
          <img
            src="/navbar/logo.png"
            className="w-32 md:w-48 bg-white bg-opacity-20 rounded"
            alt="Logo"
          />
        </div>

        <div className="flex items-center space-x-4 md:space-x-8">
          {!isMobile && (
            <>
              <img src="/navbar/square.png" className="w-6" alt="" />
              <img src="/navbar/moon.png" className="w-7" alt="" />
              <img src="/navbar/bell.png" className="w-8" alt="" />
              <img src="/navbar/separator.png" className="h-9" alt="" />
              <img src={profileData?.avatar} className="w-9 rounded-full" alt="" />
            </>
          )}
          {isMobile && (
            <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
              ☰
            </button>
          )}
        </div>
      </div>

      {/* Navbar items for desktop */}
      {!isMobile && (
        <div className="bg-sky-700">
          <div className="flex h-20 items-center space-x-8 md:space-x-14 px-4 md:px-36">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-semibold text-sm md:text-lg ${
                  location.pathname.startsWith(item.path)
                    ? "text-green-300"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Navbar for mobile */}
      {isMobile && isOpen && (
        <div className="bg-sky-700">
          <div className="p-4 border-b border-sky-600">
            <img
              src={profileData?.avatar}
              className="w-12 h-12 rounded-full mx-auto"
              alt="Profile"
            />
            <p className="text-white text-center mt-2">{profileData?.full_name}</p>
          </div>
          <div className="flex flex-col ">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path} // Navigasi menggunakan Link
                className={`font-semibold text-lg p-4 ${
                  location.pathname === item.path
                    ? "text-green-300"
                    : "text-white"
                }`}
                onClick={() => setIsOpen(false)} // Tutup navbar setelah klik
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
