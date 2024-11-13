import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchDetailQuizData, fetchHistoryQuizData, fetchQuizData, QuizSubmissionPayload, submitQuizAttempt } from "../../services/pelatihanku/QuizService";

export const useQuizData = (
  subjectId: string | undefined,
  sessionId: string | undefined
) => {
  return useQuery({
    queryKey: ["quizData", subjectId, sessionId],
    queryFn: () => fetchQuizData(subjectId, sessionId),
    enabled: !!subjectId && !!sessionId,
  });
};

export const useDetailQuizData = (
  subjectId: string | undefined,
  sessionId: string | undefined,
  quizId: string | undefined
) => {
  return useQuery({
    queryKey: ["detailQuizData", subjectId, sessionId, quizId],
    queryFn: () => fetchDetailQuizData(subjectId, sessionId, quizId),
    enabled: !!subjectId && !!sessionId && !!quizId,
  });
};

export const useHistoryQuizData = (quizId: string | undefined) => {
  return useQuery({
    queryKey: ["historyQuizData", quizId],
    queryFn: () => fetchHistoryQuizData(quizId),
    enabled: !!quizId,
  });
};


export const useQuizSubmission = (quizId: string | undefined) => {
  return useMutation({
    mutationFn: (submission: QuizSubmissionPayload) =>
      submitQuizAttempt(quizId, submission),
    onError: (error) => {
      console.error("Failed to submit quiz:", error);
      // You can add toast notification or other error handling here
    },
  });
};
