import axios from "axios";
import { RoleplayData } from "../types/roleplay";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../config/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const fetchRoleplayData = async (): Promise<RoleplayData> => {
  const token = Cookies.get("accessToken");
  const response = await axios.get(`${API_BASE_URL}/api/v1/student/roleplays`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useRoleplayData = (): UseQueryResult<RoleplayData, Error> => {
  return useQuery<RoleplayData, Error>({
    queryKey: ["roleplayData"],
    queryFn: fetchRoleplayData,
  });
};
