import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { NilaiData } from "../types/pelatihanket";
import Cookies from "js-cookie";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const fetchNilaiData = async (): Promise<NilaiData> => {
  const token = Cookies.get("accessToken"); // Ambil token dari cookies
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/scores/subjects/c947f7ed-2465-49db-a4a7-3638dbdf69b1/sessions`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

export const useNilaiData = (): UseQueryResult<NilaiData, Error> => {
  return useQuery<NilaiData, Error>({
    queryKey: ["nilaiData"],
    queryFn: fetchNilaiData,
  });
};