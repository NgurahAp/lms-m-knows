import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
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
    location.pathname === "/forgetpw" ||
    location.pathname === "/verification";

  // Add check for QuizAttempt page using regex to match the pattern
  const isQuizAttemptPage = /^\/quizAttempt\/.*\/.*\/.*$/.test( 
    location.pathname
  );

  const showNavbarAndFooter = !isHomePage && !isAuthPage && !isQuizAttemptPage;

  return (
    <div className="layout">
      {showNavbarAndFooter && <Navbar />}
      <main>{children}</main>
      {showNavbarAndFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
