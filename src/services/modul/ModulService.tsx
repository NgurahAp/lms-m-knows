import axios from "axios";
import {
  DetailModuleResponse,
  ModuleResponse,
  SubmitResponseData,
} from "../../types/pelatihanku/modul";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../../config/api";
import { useMutation, useQuery } from "@tanstack/react-query";

interface ModuleAnswerRequest {
  moduleId: string;
  module_answer: string;
}

const fetchModulData = async (
  subjectId: string | undefined,
  sessionId: string | undefined
): Promise<ModuleResponse> => {
  if (!subjectId || !sessionId) {
    throw new Error("Subject ID and Session ID are required");
  }

  const token = Cookies.get("accessToken");
  const response = await axios.get(
    `${API_BASE_URL}/api/v2/my-study/subjects/${subjectId}/sessions/${sessionId}/modules`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

const fetchDetailModulData = async (
  subjectId: string | undefined,
  sessionId: string | undefined,
  moduleId: string | undefined
): Promise<DetailModuleResponse> => {
  if (!subjectId || !sessionId) {
    throw new Error("Subject ID and Session ID are required");
  }

  const token = Cookies.get("accessToken");
  const response = await axios.get(
    `${API_BASE_URL}/api/v2/my-study/subjects/${subjectId}/sessions/${sessionId}/modules/${moduleId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

const submitModuleAnswer = async ({
  moduleId,
  module_answer,
}: ModuleAnswerRequest): Promise<SubmitResponseData> => {
  const token = Cookies.get("accessToken");
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/studi-ku/module/${moduleId}/resume`,
    { module_answer },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const useSubmitModuleAnswer = () => {
  return useMutation<
    SubmitResponseData, // Response data type
    Error, // Error type
    ModuleAnswerRequest // Variables type (input parameters)
  >({
    mutationFn: submitModuleAnswer,
    onSuccess: (data) => {
      console.log("Success:", data);
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });
};

export const useModuleData = (
  subjectId: string | undefined,
  sessionId: string | undefined
) => {
  return useQuery({
    queryKey: ["moduleData", subjectId, sessionId],
    queryFn: () => fetchModulData(subjectId, sessionId),
    enabled: !!subjectId && !!sessionId, // Only run query if both IDs are defined
  });
};

export const useDetailModuleData = (
  subjectId: string | undefined,
  sessionId: string | undefined,
  moduleId: string | undefined
) => {
  return useQuery({
    queryKey: ["detailModuleData", subjectId, sessionId, moduleId],
    queryFn: () => fetchDetailModulData(subjectId, sessionId, moduleId),
    enabled: !!subjectId && !!sessionId && !!moduleId, // Only run query if both IDs are defined
  });
};
