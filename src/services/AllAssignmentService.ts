import axios from "axios";
import { AllAssignmentResponse } from "../types/allAssignment";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../config/api";

export const fetchAllAssignmentData =
  async (): Promise<AllAssignmentResponse> => {
    const token = Cookies.get("accessToken");
    const response = await axios.get(
      `${API_BASE_URL}/api/v1/studi-ku/assignment/progress`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };
