import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../../config/api";
import { useQuery } from "@tanstack/react-query";
import { DetailQuizResponse, HistoryQuizResponse, QuizResponse } from "../../types/pelatihanku/quiz";

const fetchQuizData = async (
  subjectId: string | undefined,
  sessionId: string | undefined
): Promise<QuizResponse> => {
  if (!subjectId || !sessionId) {
    throw new Error("Subject ID and Session ID are required");
  }

  const token = Cookies.get("accessToken");
  const response = await axios.get(
    `${API_BASE_URL}/api/v2/my-study/subjects/${subjectId}/sessions/${sessionId}/quizzes`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const fetchDetailQuizData = async (
  subjectId: string | undefined,
  sessionId: string | undefined,
  quizId: string | undefined
): Promise<DetailQuizResponse> => {
  if (!subjectId || !sessionId || !quizId) {
    throw new Error("Subject ID and Session ID are required");
  }

  const token = Cookies.get("accessToken");
  const response = await axios.get(
    `${API_BASE_URL}/api/v2/my-study/subjects/${subjectId}/sessions/${sessionId}/quizzes/${quizId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const fetchHistoryQuizData = async (
  quizId: string | undefined,
): Promise<HistoryQuizResponse> => {
  if (!quizId) {
    throw new Error("Quiz ID are required");
  }

  const token = Cookies.get("accessToken");
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/studi-ku/quiz/history/${quizId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

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

export const useHistoryQuizData = (
  quizId: string | undefined,
) => {
  return useQuery({
    queryKey: ["historyQuizData", quizId],
    queryFn: () => fetchHistoryQuizData(quizId),
    enabled: !!quizId
  });
};