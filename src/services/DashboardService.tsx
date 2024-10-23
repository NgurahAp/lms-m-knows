import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { DashboardBannerData, DashboardData } from "../types/dashboard";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import Cookies from "js-cookie";

const fetchDashboardData = async (): Promise<DashboardData> => {
  const token = Cookies.get("accessToken"); // Ambil token dari cookies
  const response = await axios.get(`${API_BASE_URL}/api/v1/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log("token: ", token);
  return response.data.data;
};

const fetchDashboardBanner = async (): Promise<DashboardBannerData> => {
  const token = Cookies.get("accessToken"); // Ambil token dari cookies
  const response = await axios.get(`${API_BASE_URL}/api/v1/banner`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const useDashboardData = (): UseQueryResult<DashboardData, Error> => {
  return useQuery<DashboardData, Error>({
    queryKey: ["dashboardResponse"],
    queryFn: fetchDashboardData,
  });
};

export const useDashboardBanner = (): UseQueryResult<
  DashboardBannerData,
  Error
> => {
  return useQuery<DashboardBannerData, Error>({
    queryKey: ["dashboardBanner"],
    queryFn: fetchDashboardBanner,
  });
};
