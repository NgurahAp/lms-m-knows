import { useState, useCallback } from "react";
import { AuthState } from "../types/auth";
import { login, refreshToken } from "../services/AuthService";

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    accessToken: null,
  });

  const handleLogin = useCallback(
    async (username: string, password: string) => {
      try {
        const response = await login(username, password);
        setAuthState({
          isAuthenticated: true,
          accessToken: response.data.access_token,
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
