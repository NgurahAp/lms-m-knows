import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchReflectionData,
  submitReflection,
  SubmitReflectionRequest,
} from "../../services/pelatihanku/ReflectionService";
import { ReflectionResponse } from "../../types/pelatihanku/reflection";

export const useReflectionData = (sessionId: string | undefined) => {
  return useQuery({
    queryKey: ["reflectionData", sessionId],
    queryFn: () => fetchReflectionData(sessionId),
    enabled: !!sessionId,
  });
};

export const useSubmitReflection = () => {
  return useMutation<
    ReflectionResponse, // Response data type
    Error, // Error type
    SubmitReflectionRequest,
    unknown
  >({
    mutationFn: submitReflection,
    onError: (error) => {
      console.error("Error:", error);
    },
  });
};
