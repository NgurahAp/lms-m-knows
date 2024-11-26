import axios from "axios";
import {
  AssesmentRequest,
  AssessmentResponse,
} from "../../types/pelatihanku/assesment";
import { API_BASE_URL } from "../../config/api";
import Cookies from "js-cookie";

export const fetchAssesmentData = async (
  subjectId: string | undefined,
  sessionId: string | undefined
): Promise<AssessmentResponse> => {
  if (!sessionId || !subjectId) {
    throw new Error("Session ID and Subject ID are required");
  }

  const token = Cookies.get("accessToken");
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/my-study/subjects/${subjectId}/sessions/${sessionId}/teacher-assessment`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const submitAssesment = async (
  subjectId: string | undefined,
  sessionId: string | undefined,
  submission: AssesmentRequest
): Promise<AssessmentResponse> => {
  try {
    const token = Cookies.get("accessToken");
    const response = await axios.post<AssessmentResponse>(
      `${API_BASE_URL}/api/v1/my-study/subjects/${subjectId}/sessions/${sessionId}/teacher-assessment/submit`,
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
