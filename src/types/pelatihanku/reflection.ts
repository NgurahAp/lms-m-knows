export interface ReflectionResponse {
  code: number;
  status: string;
  message: string;
  data: SessionReflections;
}

interface SessionReflections {
  subject_id: string;
  subject_name: string;
  session_id: string;
  session_no: number;
  teacher: TeacherInfo;
  reflection: string;
  reflection_at: string;
  is_eligible: boolean;
}

interface TeacherInfo {
  id: string;
  full_name: string;
  avatar: string | null;
}
