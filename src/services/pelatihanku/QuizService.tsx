import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../../config/api";
import { useQuery } from "@tanstack/react-query";
import { QuizResponse } from "../../types/pelatihanku/quiz";

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