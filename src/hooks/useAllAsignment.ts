import { useQuery } from "@tanstack/react-query";
import { fetchAllAssignmentData } from "../services/AllAssignmentService";

export const useAllAssignmentData = () => {
  return useQuery({
    queryKey: ["allAssignmentData"],
    queryFn: () => fetchAllAssignmentData(),
  });
};
