import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../../config/api";
import {
  DetailQuizResponse,
  HistoryQuizResponse,
  QuizResponse,
} from "../../types/pelatihanku/quiz";

interface QuestionAnswer {
  question: string;
  answer: string;
}

export interface QuizSubmissionPayload {
  questions_answers: QuestionAnswer[];
}

export const fetchQuizData = async (
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

export const fetchDetailQuizData = async (
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

export const fetchHistoryQuizData = async (
  quizId: string | undefined
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

export const submitQuizAttempt = async (
  quizId: string | undefined,
  submission: QuizSubmissionPayload
): Promise<QuizResponse> => {
  try {
    const token = Cookies.get("accessToken");
    const response = await axios.post<QuizResponse>(
      `${API_BASE_URL}/quiz/${quizId}/submit`,
      submission,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to submit quiz");
    }
    throw error;
  }
};


