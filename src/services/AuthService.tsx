import axios from "axios";
import { LoginResponse } from "../types/auth";

const API_URL = "http://api.m-knows.com/api/v1/auth";

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(
    `${API_URL}/login-username`,
    { username, password },
    {
      withCredentials: true, // Ini penting untuk menerima cookies dari server
    }
  );
  return response.data;
};

export const refreshToken = async (): Promise<string> => {
  const response = await axios.post<LoginResponse>(
    `${API_URL}/refresh-token`,
    {},
    {
      withCredentials: true,
    }
  );
  return response.data.data.access_token;
};
