import { useState, useCallback } from "react";
import { AuthState } from "../types/auth";
import { login, refreshToken } from "../services/AuthService";
import Cookies from "js-cookie"; 


export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
  });

  const handleLogin = useCallback(
    async (username: string, password: string) => {
      try {
        const response = await login(username, password);

        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;

        // Simpan token ke Cookies
        Cookies.set("accessToken", accessToken, { expires: 1 }); // 1 hari
        Cookies.set("refreshToken", refreshToken, { expires: 1 });

        setAuthState({
          isAuthenticated: true,
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token,
        });
        return true;
      } catch (error) {
        console.error("Login failed:", error);
        return false;
      }
    },
    []
  );

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
    handleRefreshToken,
  };
};
