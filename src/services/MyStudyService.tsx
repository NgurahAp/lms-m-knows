import axios from "axios";
import { MyStudyData } from "../types/pelatihanku";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../config/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const fetchMyStudyData = async (): Promise<MyStudyData> => {
  const token = Cookies.get("accessToken"); // Ambil token dari cookies
  const response = await axios.get(`${API_BASE_URL}/api/v2/my-study`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const useMyStudyData = (): UseQueryResult<MyStudyData, Error> => {
  return useQuery<MyStudyData, Error>({
    queryKey: ["dashboardResponse"],
    queryFn: fetchMyStudyData,
  });
};
