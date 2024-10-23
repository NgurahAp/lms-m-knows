export interface MyStudyData {
  id: string;
  subject_code: string;
  name: string;
  slug: string;
  thumbnail: string;
  teacher_name: string;
  credit: number;
  subject_semester: number;
  current_session: number;
  type: string;
  start_at: string | null;
  student_count: number;
  session_count: number;
  progress_percentage: number;
}