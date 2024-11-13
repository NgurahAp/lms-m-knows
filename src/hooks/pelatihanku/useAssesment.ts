import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchAssesmentData, submitAssesment } from "../../services/pelatihanku/AssesmentService";
import { AssesmentRequest } from "../../types/pelatihanku/assesment";

export const useAssesmentData = (
  subjectId: string | undefined,
  sessionId: string | undefined
) => {
  return useQuery({
    queryKey: ["assesmentData", sessionId],
    queryFn: () => fetchAssesmentData(subjectId, sessionId),
    enabled: !!sessionId,
  });
};

export const useAssesmentSubmission = (
  subjectId: string | undefined,
  sessionId: string | undefined
) => {
  return useMutation({
    mutationFn: (submission: AssesmentRequest) =>
      submitAssesment(subjectId, sessionId, submission),
    onError: (error) => {
      console.error("Failed to submit quiz:", error);
      // You can add toast notification or other error handling here
    },
  });
};