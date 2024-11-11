import axios from "axios";
import { ReflectionResponse } from "../../types/pelatihanku/reflection";
import { API_BASE_URL } from "../../config/api";
import Cookies from "js-cookie";

export const fetchReflectionData = async (
  sessionId: string | undefined
): Promise<ReflectionResponse> => {
  if (!sessionId) {
    throw new Error("Session ID are required");
  }

  const token = Cookies.get("accessToken");
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/my-study/sessions/${sessionId}/reflection`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
