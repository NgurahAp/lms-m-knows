import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-40 z-10 items-center   bg-white shadow-md">
      <div className="flex justify-between h-1/2 px-28">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <img
              src="/navbar/logo.png"
              className="w-48 bg-white bg-opacity-20 rounded"
              alt="Logo"
            />
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <img src="/navbar/square.png" className="w-6" alt="" />
          <img src="/navbar/moon.png" className="w-7" alt="" />
          <img src="/navbar/bell.png" className="w-8" alt="" />
          <img src="/navbar/separator.png" className="h-9" alt="" />
          <img src="/navbar/Avatar.png" className="w-9" alt="" />
        </div>
      </div>
      <div className="h-1/2 bg-[#3498DB]">
        <div className="flex h-full items-center space-x-14  px-28">
          <h1 className="text-white font-semibold text-lg">Dashboard</h1>
          <h1 className="text-white font-semibold text-lg">Rencana Pelatihan</h1>
          <h1 className="text-white font-semibold text-lg">Pelatihan-ku</h1>
          <h1 className="text-white font-semibold text-lg">Penugasan</h1>
          <h1 className="text-white font-semibold text-lg">Nilai & Sertifikat</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
