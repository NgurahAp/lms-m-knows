import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { NilaiResponse } from "../types/nilai";
import Cookies from "js-cookie";
import { useQuery, UseQueryResult } from "@tanstack/react-query";


export const fetchNilaiResponse = async (): Promise<NilaiResponse> => {
   const token = Cookies.get("accessToken"); // Ambil token dari cookies
   const response = await axios.get(`${API_BASE_URL}/api/v1/scores/subjects`, {
     headers: {
       Authorization: `Bearer ${token}`,
     },
   });
   return response.data.data;
};

export const useNilaiResponse = (): UseQueryResult<NilaiResponse, Error> => {
  return useQuery<NilaiResponse, Error>({
    queryKey: ["nilaiResponse"],
    queryFn: fetchNilaiResponse,
  });
};