import axios from "axios";
import { RoleplayResponse } from "../types/roleplay";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../config/api";

export const fetchRoleplayData = async (): Promise<RoleplayResponse> => {
  const token = Cookies.get("accessToken");
  const response = await axios.get(`${API_BASE_URL}/api/v1/student/roleplays`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
