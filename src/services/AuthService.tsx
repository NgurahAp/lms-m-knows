import axios from "axios";
import { LoginResponse } from "../types/auth";

const API_URL = "/api/v1/auth"; 

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${API_URL}/login-username`,
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
    `${API_URL}/refresh-token`,
    {}
  );
  return response.data.data.access_token;
};
