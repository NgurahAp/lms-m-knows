interface Data {
  detail: Detail;
  assignment: Assignment;
}

interface Detail {
  subject_id: string;
  subject_name: string;
  session_id: string;
  session_no: number;
  session_type: string;
}

interface Assignment {
  id: string;
  session_id: string;
  title: string;
  desc: string;
  exercise: string | null;
  answer_key_status: string;
  duration_days: number;
  documents: Document[];
  progress: Progress;
}

interface Document {
  id: string;
  assignment_id: string;
  document_id: string | null;
  document_url: string;
  document_filename: string;
}

interface Progress {
  id: string;
  student_id: string;
  quiz_id: string | null;
  assignment_id: string;
  session_id: string;
  subject_id: string;
  status: string;
  type: string;
  score: number;
  is_late: boolean;
  timestamp_taken: string;
  timestamp_scored: string | null;
  timestamp_submitted: string;
  deadline: string;
  text: string;
  files: unknown[]; 
  total_files: number;
}

export interface AssignmentDetailResponse {
  code: number;
  status: string;
  message: string;
  data: Data;
}

