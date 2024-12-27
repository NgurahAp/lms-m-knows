import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { RoleplayResponse } from "../types/pilihroleplay";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";

export const fetchRoleplayResponse = async (roleplayId: string | undefined): Promise<RoleplayResponse> => {
  const token = Cookies.get("accessToken"); // Ambil token dari cookies
  const response = await axios.get(`${API_BASE_URL}/api/v1/student/roleplays/${roleplayId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

export const useRoleplayResponse = (roleplayId: string | undefined) => {
  return useQuery({
    queryKey: ["roleplayResponse", roleplayId],
    queryFn: () => fetchRoleplayResponse(roleplayId),
    enabled: !!roleplayId,
  });
};
