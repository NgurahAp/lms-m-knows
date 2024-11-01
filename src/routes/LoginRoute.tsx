import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface LoginRouteProps {
  children: JSX.Element;
}

const LoginRoute: React.FC<LoginRouteProps> = ({ children }) => {
  const { authState } = useAuth();

  if (authState.isAuthenticated) {
    console.log("LoginRoute - Not authenticated, redirecting to login");
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default LoginRoute;
