export interface Roleplay {
  id: string;
  topic: string;
  description: string;
  case_study: string;
  rules: string;
  duration: number;
  subject_id: string;
  subject_name: string;
  subject_type: string;
  subject_thumbnail: string;
  session_id: string;
  session_title: string;
  session_no: number;
  start_at: string; // ISO date string
  end_at: string; // ISO date string
}

// Interface untuk Response Data
export interface RoleplayResponse {
  code: number;
  status: string;
  message: string;
  roleplay: Roleplay;
}
