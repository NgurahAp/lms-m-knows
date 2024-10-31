import axios from "axios";
import { MyStudyData, SubjectData } from "../types/pelatihanku/pelatihanku";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../config/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const fetchMyStudyData = async (): Promise<MyStudyData> => {
  const token = Cookies.get("accessToken"); // Ambil token dari cookies
  const response = await axios.get(`${API_BASE_URL}/api/v2/my-study`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

const fetchSubjectData = async (id: string): Promise<SubjectData> => {
  const token = Cookies.get("accessToken");
  const response = await axios.get(
    `${API_BASE_URL}/api/v3/my-study/subjects/${id}/sessions`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

export const useMyStudyData = (): UseQueryResult<MyStudyData, Error> => {
  return useQuery<MyStudyData, Error>({
    queryKey: ["dashboardResponse"],
    queryFn: fetchMyStudyData,
  });
};

export const useSubjectData = (
  id: string
): UseQueryResult<SubjectData, Error> => {
  return useQuery({
    queryKey: ["subject", id],
    queryFn: () => {
      if (!id) throw new Error("ID is required");
      return fetchSubjectData(id);
    },
    enabled: !!id, // Query hanya akan dijalankan jika id ada
  });
};
