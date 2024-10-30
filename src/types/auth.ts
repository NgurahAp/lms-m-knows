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
  refreshToken: string | null;
}

export interface UserData {
  id: string;
  full_name: string;
  user_name: string;
  email: string;
  email_verified_at: string;
  avatar: string;
  gender: string;
  phone_number: string;
  role: string;
  created_at: string;
  updated_at: string;
}

interface Activities {
  quizzes: unknown[]; // Sesuaikan dengan type quiz yang sebenarnya jika ada
}

export interface ProfileResponse {
  code: number;
  status: string;
  message: string;
  data: {
    user: UserData;
    activities: Activities;
  };
}
