import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { submitAssignment, SubmitAssignmentRequest } from "../../services/pelatihanku/AssignmentService";
import { AssignmentsResponse } from "../../types/pelatihanku/assignment";

export const useSubmitAssignment = (): UseMutationResult<
  AssignmentsResponse,
  Error,
  SubmitAssignmentRequest,
  unknown
> => {
  return useMutation({
    mutationFn: ({
      subjectId,
      sessionId,
      assignmentId,
      text,
      file,
    }: SubmitAssignmentRequest): Promise<AssignmentsResponse> =>
      submitAssignment({
        subjectId,
        sessionId,
        assignmentId,
        text,
        file,
      }),
    onError: (error) => {
      console.error("Submit assignment error:", error);
      // Handle error appropriately
    },
  });
};
