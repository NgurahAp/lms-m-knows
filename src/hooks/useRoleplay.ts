import { useQuery } from "@tanstack/react-query";
import { fetchRoleplayData } from "../services/RoleplayService";

export const useRoleplayData = () => {
  return useQuery({
    queryKey: ["allAssignmentData"],
    queryFn: () => fetchRoleplayData(),
  });
};
