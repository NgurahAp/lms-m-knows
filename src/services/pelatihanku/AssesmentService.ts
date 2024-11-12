import axios from "axios";
import { AssessmentResponse } from "../../types/pelatihanku/assesment";
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
