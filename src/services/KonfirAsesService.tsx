import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { ApiResponse } from "../types/konfirases";
import Cookies from "js-cookie";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const fetchApiResponse = async (): Promise<ApiResponse> => {
  const token = Cookies.get("accessToken"); // Ambil token dari cookies
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/student/assessments/sessions/78edeeeb-79bb-4350-b220-606c6ed68435`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

export const useApiResponse = (): UseQueryResult<ApiResponse, Error> => {
  return useQuery<ApiResponse, Error>({
    queryKey: ["apiResponse"],
    queryFn: fetchApiResponse,
  });
};


