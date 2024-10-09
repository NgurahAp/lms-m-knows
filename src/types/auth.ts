export interface LoginResponse {
  code: number;
  status: string;
  message: string;
  data: {
    refresh_token: string;
    access_token: string;
  };
}

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
}
