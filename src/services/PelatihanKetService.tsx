import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { NilaiData } from "../types/pelatihanket";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";

export const fetchNilaiData = async (
  subjectId: string | undefined
): Promise<NilaiData> => {
  const token = Cookies.get("accessToken"); // Ambil token dari cookies
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/scores/subjects/${subjectId}/sessions`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

export const useNilaiData = (subjectId: string | undefined) => {
  return useQuery({
    queryKey: ["nilaiData", subjectId],
    queryFn: () => fetchNilaiData(subjectId),
    enabled: !!subjectId,
  });
};
