import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ProfileBox from "./ProfileBox";
import { CgProfile } from "react-icons/cg";
import { UserData } from "../types/auth";
import { IoIosMenu } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [profileData, setProfileData] = useState<UserData | null>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu((prev) => !prev);
  };

  const handleCloseProfileMenu = () => {
    setShowProfileMenu(false);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Pelatihan-ku", path: "/pelatihanku" },
    { name: "Penugasan", path: "/penugasan" },
    { name: "Nilai & Sertifikat", path: "/score" },
    { name: "Roleplay & Asesmen", path: "/roleplay" },
  ];

  // Get current page name based on location
  const getCurrentPageName = () => {
    const currentPath = location.pathname;
    const currentPage = navItems.find((item) =>
      currentPath.startsWith(item.path)
    );
    return currentPage?.name;
  };

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
        }
      } catch (error) {
        console.error("Error parsing user profile:", error);
      }
    };

    getUserProfile();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("navbar-dropdown");
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get current page name
  const currentPageName = getCurrentPageName();

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
      <div className="flex justify-between px-4 md:px-36 h-20 items-center">
        <div className="flex items-center">
          <div className="flex items-center space-x-3">
            <img
              src="/navbar/logo.png"
              className="w-32 md:w-48 bg-white bg-opacity-20 rounded"
              alt="Logo"
            />

            {/* Only show dropdown if we're on a valid page */}
            {currentPageName && (
              <div className="relative md:hidden" id="navbar-dropdown">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-1 text-gray-700 hover:text-sky-700 focus:outline-none  "
                >
                  <span className="font-medium text-xs">{currentPageName}</span>
                  <IoChevronDownOutline
                    className={`transition-transform duration-200 ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showDropdown && (
                  <div className="absolute top-full -left-3 mt-1 w-40 bg-white rounded-md shadow-lg py-1 z-20">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2 text-xs font-medium rounded-md border ${
                          location.pathname.startsWith(item.path)
                            ? "bg-blue-500 text-white border-blue-500 m-2"
                            : "text-gray-700 border-transparent hover:bg-sky-50 mx-2 hover:text-sky-700 hover:border-sky-700"
                        }`}
                        onClick={() => setShowDropdown(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4 md:space-x-8">
          {!isMobile && (
            <>
              <Link to={"/dashboard"}>
                <img src="/navbar/square.png" className="px-1 w-8" alt="" />
              </Link>
              <img src="/navbar/moon.png" className="px-1 w-9" alt="" />
              <img src="/navbar/bell.png" className="px-1 w-9" alt="" />
              <img src="/navbar/separator.png" className="px-4 " alt="" />
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
              <IoIosMenu />
            </button>
          )}
        </div>
      </div>

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
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-semibold text-lg p-4 ${
                  location.pathname === item.path
                    ? "text-green-300"
                    : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
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
