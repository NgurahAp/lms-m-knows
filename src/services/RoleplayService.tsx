import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { RoleplayData } from "../types/roleplay";
import Cookies from "js-cookie";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const fetchRoleplayData = async (): Promise<RoleplayData> => {
  const token = Cookies.get("accessToken"); // Ambil token dari cookies
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/student/roleplays`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

export const useRoleplayData = (): UseQueryResult<RoleplayData, Error> => {
  return useQuery<RoleplayData, Error>({
    queryKey: ["roleplayData"],
    queryFn: fetchRoleplayData,
  });
};
