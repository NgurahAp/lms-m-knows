import { useState, useCallback, useEffect } from "react";
import { AuthState } from "../types/auth";
import { login, refreshToken } from "../services/AuthService";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");
    return {
      isAuthenticated: !!accessToken,
      accessToken: accessToken || null,
      refreshToken: refreshToken || null,
    };
  });

  useEffect(() => {
    // Check tokens on mount and set auth state
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");
    if (accessToken && refreshToken) {
      setAuthState({
        isAuthenticated: true,
        accessToken,
        refreshToken,
      });
    }
  }, []);

  const handleLogin = useCallback(
    async (username: string, password: string) => {
      try {
        const response = await login(username, password);
        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;

        Cookies.set("accessToken", accessToken, { expires: 1 });
        Cookies.set("refreshToken", refreshToken, { expires: 1 });

        setAuthState({
          isAuthenticated: true,
          accessToken,
          refreshToken,
        });

        console.log("Login successful, authState updated:", {
          isAuthenticated: true,
          accessToken,
          refreshToken,
        });

        return true;
      } catch (error) {
        console.error("Login failed:", error);
        return false;
      }
    },
    []
  );

  const handleLogout = useCallback(() => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    localStorage.clear();

    setAuthState({
      isAuthenticated: false,
      accessToken: null,
      refreshToken: null,
    });

    window.location.href = "/";
  }, []);

  const handleRefreshToken = useCallback(async () => {
    try {
      const newAccessToken = await refreshToken();
      setAuthState((prev) => ({
        ...prev,
        accessToken: newAccessToken,
      }));
      return true;
    } catch (error) {
      console.error("Token refresh failed:", error);
      setAuthState({
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
      });
      return false;
    }
  }, []);

  return {
    authState,
    handleLogin,
    handleLogout,
    handleRefreshToken,
  };
};
