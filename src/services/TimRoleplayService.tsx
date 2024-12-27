import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { TeamsResponse } from "../types/timroleplay";
import Cookies from "js-cookie";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const fetchTeamsResponse = async (): Promise<TeamsResponse> => {
  const token = Cookies.get("accessToken"); // Ambil token dari cookies
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/student/roleplays/9a1f5a42-e8c4-46ef-8546-22b0d0fb8085/teams`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

export const useTeamsResponse = (): UseQueryResult<TeamsResponse, Error> => {
  return useQuery<TeamsResponse, Error>({
    queryKey: ["teamsResponse"],
    queryFn: fetchTeamsResponse,
  });
};