import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Import Link
import FeatureBox from "./FeatureBox";
import ProfileBox from "./ProfileBox";
import { CgProfile } from "react-icons/cg";
import { UserData } from "../types/auth";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [profileData, setProfileData] = useState<UserData | null>(null);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleFeatures = () => {
    setShowFeatures((prev) => !prev);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu((prev) => !prev);
  };

  const handleCloseFeatures = () => {
    setShowFeatures(false);
  };

  const handleCloseProfileMenu = () => {
    setShowProfileMenu(false);
  };

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Pelatihan-ku", path: "/pelatihanku" },
    { name: "Penugasan", path: "/penugasan" },
    { name: "Nilai & Sertifikat", path: "/nilai-sertifikat" },
    { name: "Roleplay & Asesmen", path: "/roleplay-asses" },
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
    const getUserProfile = () => {
      try {
        const storedUser = localStorage.getItem("user_profile");

        if (storedUser) {
          const userData: UserData = JSON.parse(storedUser);
          setProfileData(userData);
        } else {
          console.log("Data profil tidak ditemukan di localStorage");
        }
      } catch (error) {
        console.error("Error parsing user profile:", error);
      }
    };

    getUserProfile();
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
              <button
                onClick={toggleFeatures}
                className="bg-sky-700 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium flex items-center"
              >
                Semua Fitur
                <img
                  src="/landing/semua-fitur.png"
                  className="pl-2   w-7 h-auto"
                  alt=""
                />
              </button>
              {showFeatures && (
                <FeatureBox
                  offset="right-[14rem]"
                  onClose={handleCloseFeatures}
                />
              )}
              <button onClick={toggleProfileMenu}>
                {profileData?.avatar ? (
                  <img
                    src={profileData.avatar}
                    className="w-12 h-12 rounded-full object-cover"
                    alt="Profile"
                  />
                ) : (
                  <CgProfile className="text-5xl text-gray-600" />
                )}
              </button>
              {showProfileMenu && (
                <ProfileBox
                  offset="right-[9rem]"
                  onClose={handleCloseProfileMenu}
                />
              )}
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
            <p className="text-white text-center mt-2">
              {profileData?.full_name}
            </p>
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
