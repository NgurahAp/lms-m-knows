export interface NilaiData {
  code: number;
  status: string;
  message: string;
  student: Student;
  subject: Subject;
  sessions: Session[];
}

interface Student {
  id: string;
  full_name: string;
  major: string;
}

interface Subject {
  id: string;
  name: string;
  credit: number;
  type: string;
  score: string;
  score_letter: string;
  score_gpa: string;
  status: string;
  semester: number;
  taken_at: string;
  finished_at: string | null;
}

interface Session {
  id: string;
  title: string;
  session_no: number;
  type: string;
  semester: number;
  module_score: string;
  quiz_score: string;
  assignment_score: string;
  average_score: string;
  average_score_letter: string;
}
