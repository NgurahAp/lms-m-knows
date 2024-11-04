interface QuizDetail {
  subject_id: string;
  subject_name: string;
  session_id: string;
  session_no: number;
  session_type: string;
}

interface Quizzes {
  id: string;
  type: string;
  title: string;
  session_id: string;
  module_id: string | null;
  start_date: string | null;
  end_date: string | null;
  duration: number;
  progress: QuizProgress;
  total_students: number;
  total_Students_finished: number;
}

interface QuizProgress {
  id: string;
  student_id: string;
  module_id: string | null;
  quiz_id: string;
  session_id: string;
  subject_id: string;
  status: string;
  type: string;
  score: number;
  is_late: boolean;
  timestamp_taken: string;
  timestamp_scored: string | null;
  timestamp_submitted: string;
  deadline: string | null;
}

export interface QuizResponse {
  data: {
    detail: QuizDetail;
    quizzes: Quizzes[];
  };
}
