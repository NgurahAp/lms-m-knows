import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { IlmuData } from "../types/ilmu";
import Cookies from "js-cookie";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const fetchIlmuData = async (): Promise<IlmuData> => {
  const token = Cookies.get("accessToken"); // Ambil token dari cookies
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/article/filter?page=1&limit=8&type=newest&search=`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

export const useIlmuData = (): UseQueryResult<IlmuData, Error> => {
  return useQuery<IlmuData, Error>({
    queryKey: ["ilmuData"],
    queryFn: fetchIlmuData,
  });
};
