import axios from "axios";
import { API_BASE_URL } from "../config/api";
import Cookies from "js-cookie";
import { ScoreResponse } from "../types/score";

export const fetchScoreResponse = async (): Promise<ScoreResponse> => {
  const token = Cookies.get("accessToken");
  const response = await axios.get(`${API_BASE_URL}/api/v1/scores/subjects`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};


