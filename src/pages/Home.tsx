import { Link } from "react-router-dom";
import Clients from "../components/Clients";
import { AboutUs } from "../components/Landing/AboutUs";
import { Article } from "../components/Landing/Article";
import { Bootcamp } from "../components/Landing/Bootcamp";
import { Fiture } from "../components/Landing/Fiture";
import { Hero } from "../components/Landing/Hero";
import { TrainingProgram } from "../components/Landing/TrainingProgram";
import { useAuth } from "../hooks/useAuth";
import { useDashboardData } from "../services/DashboardService";
import { useState } from "react";
import FeatureBox from "../components/FeatureBox";
import ProfileBox from "../components/ProfileBox";

export default function Home() {
  const { authState } = useAuth();
  const { data: dashboardData, isLoading } = useDashboardData();

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

  if (authState.isAuthenticated && isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-400"></div>
          <p className="mt-4 text-gray-600">Memuat data...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-10 flex justify-between items-center py-2 px-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <img
              src="/landing/logo.png"
              className="w-56 bg-white bg-opacity-20 rounded"
              alt="Logo"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {authState.isAuthenticated && dashboardData ? (
            <div className="flex gap-4">
              <button
                onClick={toggleFeatures}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium flex items-center"
              >
                Semua Fitur
                <img
                  src="/landing/semua-fitur.png"
                  className="pl-2 w-7 h-auto"
                  alt=""
                />
              </button>
              {showFeatures && (
                <FeatureBox offset="right-20" onClose={handleCloseFeatures} />
              )}
              <button onClick={toggleProfileMenu}>
                <img
                  src={dashboardData.profile.avatar}
                  className="w-12 rounded-full"
                  alt=""
                />
              </button>
              {showProfileMenu && (
                <ProfileBox
                  offset="right-1"
                  onClose={handleCloseProfileMenu}
                />
              )}
            </div>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={toggleFeatures}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium flex items-center"
              >
                Semua Fitur
                <img
                  src="/landing/semua-fitur.png"
                  className="pl-2 w-7 h-auto"
                  alt=""
                />
              </button>
              {showFeatures && (
                <FeatureBox offset="right-32" onClose={handleCloseFeatures} />
              )}
              <Link to="/login">
                <button className="border border-[#106fa4] text-[#106fa4] px-6 py-2 rounded-lg font-medium hover:bg-blue-50">
                  Masuk
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Render konten hanya jika tidak dalam status loading */}
      {(!authState.isAuthenticated || !isLoading) && (
        <>
          <Hero />
          <Fiture />
          <TrainingProgram />
          <Bootcamp />
          <AboutUs />
          <Clients />
          <Article />
        </>
      )}
      <footer className="h-full px-16 py-16 relative bg-[#F5F5F5]">
        <div className="flex md:flex-row flex-col justify-between">
          <div className="flex-1 p-4">
            <img
              src="/landing/footer/logo.png"
              alt="M-Knows Logo"
              className="rounded-3xl w-auto h-16"
            />
            <div className="flex pt-6 pb-4 gap-x-7">
              <img
                src="/landing/footer/fb.png"
                alt="M-Knows Logo"
                className="rounded-3xl w-auto h-6"
              />
              <img
                src="/landing/footer/ig.png"
                alt="M-Knows Logo"
                className="rounded-3xl w-auto h-6"
              />
              <img
                src="/landing/footer/twitter.png"
                alt="M-Knows Logo"
                className="rounded-3xl w-auto h-6"
              />
              <img
                src="/landing/footer/linkedin.png"
                alt="M-Knows Logo"
                className="rounded-3xl w-auto h-6"
              />
            </div>
            <img
              src="/landing/footer/playStore.png"
              alt="M-Knows Logo"
              className="rounded-3xl w-auto h-20"
            />
          </div>
          <div className="flex-1 p-4">
            <h2 className="text-lg font-bold pb-4">Halaman</h2>
            <p className=" py-3 text-lg">Pelatihanku</p>
            <p className=" py-3 text-lg">Penugasan</p>
            <p className=" py-3 text-lg">Asesmen</p>
          </div>
          <div className="flex-1 p-4">
            <h2 className="text-lg font-bold pb-4">Kontak</h2>
            <p className=" py-3 text-lg">+6285183004001</p>
            <p className=" py-3 text-lg">info@kampusgratis.com</p>
          </div>
          <div className="flex-1 p-4">
            <h2 className="text-lg font-bold pb-4">Alamat</h2>
            <p className="text-lg">
              <span className="font-semibold">Utama</span> : Jl. Radio IV No.8B
              Barito Kebayoran Baru, Jakarta Selatan 12130
            </p>
            <p className="text-lg">
              <span className="font-semibold">Produksi</span> : Jl. Raya
              Cirendeu No.61, Tangerang Selatan 15419
            </p>
            <p className="text-lg">
              <span className="font-semibold">Cabang</span> : Jl. Raya Darmo
              Permai III Surabaya. 60119
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
