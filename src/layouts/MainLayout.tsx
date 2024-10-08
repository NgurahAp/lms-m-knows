import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forgetpw";
    location.pathname === "/verification";


  return (
    <div className="layout">
      {!isAuthPage && (isHomePage ? <HomeNavbar /> : <Navbar />)}
      <main>{children}</main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default MainLayout;
