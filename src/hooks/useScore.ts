import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ScoreResponse } from "../types/score";
import { fetchCertificateResponse, fetchScoreResponse } from "../services/ScoreService";

export const useScoreResponse = (): UseQueryResult<ScoreResponse, Error> => {
  return useQuery<ScoreResponse, Error>({
    queryKey: ["scoreResponse"],
    queryFn: fetchScoreResponse,
  });
};

export const useCertificateResponse = (): UseQueryResult<ScoreResponse, Error> => {
  return useQuery<ScoreResponse, Error>({
    queryKey: ["certificateResponse"],
    queryFn: fetchCertificateResponse,
  });
};
