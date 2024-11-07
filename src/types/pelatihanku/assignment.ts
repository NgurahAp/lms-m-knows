interface AssignmentDocument {
  id: string;
  assignment_id: string;
  document_id: string | null;
  document_url: string;
  document_filename: string;
}

interface AssignmentProgress {
  id: string;
  student_id: string;
  module_id: string | null;
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
}

export interface Assignment {
  id: string;
  session_id: string;
  module_id: string;
  title: string;
  desc: string;
  exercise: string | null;
  answer_key_status: string;
  duration_days: number;
  documents: AssignmentDocument[];
  progress: AssignmentProgress;
  total_students: number;
  total_students_finished: number;
}

interface SessionDetail {
  subject_id: string;
  subject_name: string;
  session_id: string;
  session_no: number;
  session_type: string;
}

export interface AssignmentsResponse {
  code: number;
  status: string;
  message: string;
  data: {
    detail: SessionDetail;
    assignments: Assignment[];
  };
}
