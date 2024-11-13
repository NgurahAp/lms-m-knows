import { useMutation } from "@tanstack/react-query";
import {
  submitAssignment,
  SubmitAssignmentRequest,
} from "../../services/pelatihanku/AssignmentService";
import { AssignmentsResponse } from "../../types/pelatihanku/assignment";
import { AxiosError } from "axios";

export const useSubmit = () => {
  return useMutation<
    AssignmentsResponse, // Response data type
    AxiosError, // Error type
    SubmitAssignmentRequest,
    unknown
  >({
    mutationFn: submitAssignment,
    onSuccess: (data) => {
      console.log("Success:", data);
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });
};
