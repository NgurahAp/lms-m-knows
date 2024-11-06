import axios from "axios";
import { AssignmentsResponse } from "../../types/pelatihanku/assignment";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../../config/api";
import { useQuery } from "@tanstack/react-query";

const fetchAssignmentData = async (
  subjectId: string | undefined,
  sessionId: string | undefined
): Promise<AssignmentsResponse> => {
  if (!subjectId || !sessionId) {
    throw new Error("Subject ID and Session ID are required");
  }

  const token = Cookies.get("accessToken");
  const response = await axios.get(
    `${API_BASE_URL}/api/v2/my-study/subjects/${subjectId}/sessions/${sessionId}/assignments`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const useAssignmentData = (
  subjectId: string | undefined,
  sessionId: string | undefined
) => {
  return useQuery({
    queryKey: ["assignmentData", subjectId, sessionId],
    queryFn: () => fetchAssignmentData(subjectId, sessionId),
    enabled: !!subjectId && !!sessionId,
  });
};

