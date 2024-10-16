import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { DashboardData } from "../types/dashboard";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import Cookies from "js-cookie";

const fetchDashboardData = async (): Promise<DashboardData> => {
  const token = Cookies.get("accessToken"); // Ambil token dari cookies
  const response = await axios.get(`${API_BASE_URL}/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log("token: ", token);
  return response.data.data;
};

export const useDashboardData = (): UseQueryResult<DashboardData, Error> => {
  return useQuery<DashboardData, Error>({
    queryKey: ["dashboardData"],
    queryFn: fetchDashboardData,
  });
};
