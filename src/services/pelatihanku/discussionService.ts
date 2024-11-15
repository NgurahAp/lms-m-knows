import axios from "axios";
import { DiscussionResponse } from "../../types/pelatihanku/discussion";
import { API_BASE_URL } from "../../config/api";
import Cookies from "js-cookie";

export const fetchDiscussionData = async (
  subjectId: string | undefined,
  sessionId: string | undefined
): Promise<DiscussionResponse> => {
  if (!sessionId || !subjectId) {
    throw new Error("Session ID and Subject ID are required");
  }

  const token = Cookies.get("accessToken");
  const response = await axios.get(
    `${API_BASE_URL}/api/v2/my-study/subjects/${subjectId}/sessions/${sessionId}/discussions`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
