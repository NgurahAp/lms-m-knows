import axios from "axios";
import { LoginResponse, ProfileResponse } from "../types/auth";
import { API_BASE_URL } from "../config/api";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

// https://api.m-knows.com/api/v1/auth/login-username

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${API_BASE_URL}/api/v1/auth/login-username`,
      { username, password }
    );
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const refreshToken = async (): Promise<string> => {
  const response = await axios.post<LoginResponse>(
    `${API_BASE_URL}/api/v1/refresh-token`,
    {}
  );
  return response.data.data.access_token;
};

const STORAGE_KEY = "user_profile";

const fetchUserProfile = async (): Promise<ProfileResponse> => {
  const token = Cookies.get("accessToken"); // Ambil token dari cookies
  const response = await axios.get(`${API_BASE_URL}/api/v1/user/profile/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // Simpan data user ke localStorage
  const userData = response.data.data;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData.user));

  return response.data.data;
};

export const useUserProfile = () => {
  return useQuery<ProfileResponse, Error>({
    queryKey: ["user"],
    queryFn: fetchUserProfile,
    enabled: false,
    initialData: () => {
      // Coba ambil data dari localStorage saat hook diinisialisasi
      const storedUser = localStorage.getItem(STORAGE_KEY);
      if (storedUser) {
        return {
          code: 200,
          status: "success",
          message: "Data loaded from localStorage",
          data: {
            user: JSON.parse(storedUser),
            activities: { quizzes: [] },
          },
        } as ProfileResponse;
      }
      return undefined;
    },
  });
};
