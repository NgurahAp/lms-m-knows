interface Assessment {
  id: string;
  topic: string;
  description: string;
  thumbnail: string;
  start_at: string;
  end_at: string;
  major_id: string;
  major_name: string;
  subject_id: string;
  subject_name: string;
  creator_id: string;
  creator_full_name: string;
  creator_avatar: string | null;
  created_at: string;
  updated_at: string;
  assessors: Assessor[];
}

interface Assessor {
  id: string;
  full_name: string;
  avatar: string | null;
  role: string;
  available_dates: string[];
}

export interface AssessmentsData {
  code: number;
  status: string;
  message: string;
  assessments: Assessment[];
}
