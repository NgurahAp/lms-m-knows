import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ScoreResponse } from "../types/score";
import { fetchScoreResponse } from "../services/ScoreService";

export const useScoreResponse = (): UseQueryResult<ScoreResponse, Error> => {
  return useQuery<ScoreResponse, Error>({
    queryKey: ["scoreResponse"],
    queryFn: fetchScoreResponse,
  });
};
