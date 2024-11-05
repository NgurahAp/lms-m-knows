import axios from "axios";
import { QuestionResponse } from "../../types/pelatihanku/question";
import { API_BASE_URL } from "../../config/api";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";

const fetchQuestionData = async (
  quizId: string | undefined
): Promise<QuestionResponse> => {
  if (!quizId) {
    throw new Error("Quiz ID are required");
  }

  const token = Cookies.get("accessToken");
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/studi-ku/quiz/take/${quizId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const useQuestionData = (quisId: string | undefined) => {
  return useQuery({
    queryKey: ["questionData", quisId],
    queryFn: () => fetchQuestionData(quisId),
    enabled: !!quisId
  });
};
