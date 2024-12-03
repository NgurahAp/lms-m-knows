import axios from "axios";
import { API_BASE_URL } from "../config/api";
import Cookies from "js-cookie";
import { ScoreResponse } from "../types/score";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const fetchScoreResponse = async (): Promise<ScoreResponse> => {
  const token = Cookies.get("accessToken");
  const response = await axios.get(`${API_BASE_URL}/api/v1/scores/subjects`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fetchCertificateResponse = async (): Promise<ScoreResponse> => {
  const token = Cookies.get("accessToken");
  const response = await axios.get(`${API_BASE_URL}/api/v1/certificate`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useScoreResponse = (): UseQueryResult<ScoreResponse, Error> => {
  return useQuery<ScoreResponse, Error>({
    queryKey: ["scoreResponse"],
    queryFn: fetchScoreResponse,
  });
};