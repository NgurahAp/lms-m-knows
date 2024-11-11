import { useQuery } from "@tanstack/react-query";
import { fetchReflectionData } from "../../services/pelatihanku/ReflectionService";

export const useReflectionData = (sessionId: string | undefined) => {
  return useQuery({
    queryKey: ["reflectionData", sessionId],
    queryFn: () => fetchReflectionData(sessionId),
    enabled: !!sessionId,
  });
};
