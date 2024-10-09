import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Hook useAuth yang Anda buat untuk login/logout

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { authState } = useAuth(); // Mengambil authState dari useAuth

  if (!authState.isAuthenticated) {
    // Jika pengguna belum login, arahkan ke halaman login
    return <Navigate to="/login" />;
  }

  // Jika sudah login, tampilkan halaman yang diminta
  return element;
};

export default ProtectedRoute;
