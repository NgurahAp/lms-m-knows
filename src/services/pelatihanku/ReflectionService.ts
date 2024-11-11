import axios from "axios";
import { ReflectionResponse } from "../../types/pelatihanku/reflection";
import { API_BASE_URL } from "../../config/api";
import Cookies from "js-cookie";


export interface SubmitReflectionRequest {
  sessionId: string | undefined;
  message: string;
}

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

export const submitReflection = async ({
  sessionId,
  message,
}: SubmitReflectionRequest): Promise<ReflectionResponse> => {
  const token = Cookies.get("accessToken");

  // Kirim data sebagai JSON, bukan FormData
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/my-study/sessions/${sessionId}/reflection`,
    { message }, 
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
