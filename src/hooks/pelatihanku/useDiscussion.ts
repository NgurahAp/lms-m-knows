import { useQuery } from "@tanstack/react-query";
import { fetchDiscussionData } from "../../services/pelatihanku/discussionService";

export const useDiscussionData = (
  subjectId: string | undefined,
  sessionId: string | undefined
) => {
  return useQuery({
    queryKey: ["assesmentData", sessionId],
    queryFn: () => fetchDiscussionData(subjectId, sessionId),
    enabled: !!sessionId,
  });
};
