import { useQuery } from "@tanstack/react-query";
import { fetchAssesmentData } from "../../services/pelatihanku/AssesmentService";

export const useAssesmentData = (
  subjectId: string | undefined,
  sessionId: string | undefined
) => {
  return useQuery({
    queryKey: ["assesmentData", sessionId],
    queryFn: () => fetchAssesmentData(subjectId, sessionId),
    enabled: !!sessionId,
  });
};
