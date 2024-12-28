import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { AssessmentsData } from "../types/asesmen";
import Cookies from "js-cookie";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const fetchAssessmentsData = async (): Promise<AssessmentsData> => {
  const token = Cookies.get("accessToken"); // Ambil token dari cookies
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/student/assessments`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

export const useAssessmentsData = (): UseQueryResult<AssessmentsData, Error> => {
  return useQuery<AssessmentsData, Error>({
    queryKey: ["assessmentsData"],
    queryFn: fetchAssessmentsData,
  });
};