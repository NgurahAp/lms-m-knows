import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Import the authentication hook

const HomeNavbar: React.FC = () => {
  const { authState } = useAuth(); // Access authentication state

  return (
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

      <div className="flex space-x-3">
        {/* Button Semua Fitur diarahkan ke /dashboard */}
        <Link to="/dashboard">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium flex items-center">
            Semua Fitur
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              className="ml-2"
            >
              <path
                d="M1.98999 5C1.98999 4.40326 2.22704 3.83097 2.649 3.40901C3.07096 2.98705 3.64325 2.75 4.23999 2.75H6.73999C7.33673 2.75 7.90902 2.98705 8.33098 3.40901C8.75294 3.83097 8.98999 4.40326 8.98999 5V7.5C8.98999 8.09674 8.75294 8.66903 8.33098 9.09099C7.90902 9.51295 7.33673 9.75 6.73999 9.75H4.23999C3.64325 9.75 3.07096 9.51295 2.649 9.09099C2.22704 8.66903 1.98999 8.09674 1.98999 7.5V5ZM1.98999 14C1.98999 13.4033 2.22704 12.831 2.649 12.409C3.07096 11.9871 3.64325 11.75 4.23999 11.75H6.73999C7.33673 11.75 7.90902 11.9871 8.33098 12.409C8.75294 12.831 8.98999 13.4033 8.98999 14V16.5C8.98999 17.0967 8.75294 17.669 8.33098 18.091C7.90902 18.5129 7.33673 18.75 6.73999 18.75H4.23999C3.64325 18.75 3.07096 18.5129 2.649 18.091C2.22704 17.669 1.98999 17.0967 1.98999 16.5V14ZM10.99 5C10.99 4.40326 11.227 3.83097 11.649 3.40901C12.071 2.98705 12.6433 2.75 13.24 2.75H15.74C16.3367 2.75 16.909 2.98705 17.331 3.40901C17.7529 3.83097 17.99 4.40326 17.99 5V7.5C17.99 8.09674 17.7529 8.66903 17.331 9.09099C16.909 9.51295 16.3367 9.75 15.74 9.75H13.24C12.6433 9.75 12.071 9.51295 11.649 9.09099C11.227 8.66903 10.99 8.09674 10.99 7.5V5ZM15.24 12.5C15.24 12.3011 15.161 12.1103 15.0203 11.9697C14.8797 11.829 14.6889 11.75 14.49 11.75C14.2911 11.75 14.1003 11.829 13.9597 11.9697C13.819 12.1103 13.74 12.3011 13.74 12.5V14.5H11.74C11.5411 14.5 11.3503 14.579 11.2097 14.7197C11.069 14.8603 10.99 15.0511 10.99 15.25C10.99 15.4489 11.069 15.6397 11.2097 15.7803C11.3503 15.921 11.5411 16 11.74 16H13.74V18C13.74 18.1989 13.819 18.3897 13.9597 18.5303C14.1003 18.671 14.2911 18.75 14.49 18.75C14.6889 18.75 14.8797 18.671 15.0203 18.5303C15.161 18.3897 15.24 18.1989 15.24 18V16H17.24C17.4389 16 17.6297 15.921 17.7703 15.7803C17.911 15.6397 17.99 15.4489 17.99 15.25C17.99 15.0511 17.911 14.8603 17.7703 14.7197C17.6297 14.579 17.4389 14.5 17.24 14.5H15.24V12.5Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>

        {!authState.isAuthenticated && (
          <Link to="/login">
            <button className="border border-[#106fa4] text-[#106fa4] px-6 py-2 rounded-lg font-medium hover:bg-blue-50">
              Masuk
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default HomeNavbar;
