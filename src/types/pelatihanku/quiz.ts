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

interface Subject {
  id: string;
  name: string;
}

interface Session {
  id: string;
  session_no: number;
  session_type: string;
}

interface Quiz {
  id: string;
  title: string;
  duration: number; 
  question_point: string; 
  total_questions: number;
  remaining_attempts: number;
  last_score: string; 
}

interface HistoryData {
  remaining_attempt: number;
  history_count: number;
  history_data: HistoryEntry[];
}

interface HistoryEntry {
  id: string;
  timestamp_taken: string; // ISO 8601 format
  score: number;
  correct: number;
  status: string;
  wrong: number;
  total_question: number;
  time_elapsed: number; // in seconds
}

export interface QuizResponse {
  code: number;
  status: string; 
  message: string;
  data: {
    detail: QuizDetail;
    quizzes: Quizzes[];
  };
}

export interface DetailQuizResponse {
  code: number;
  status: string;
  message: string;
  data: {
    subject: Subject;
    session: Session;
    quiz: Quiz;
  };
}

export interface HistoryQuizResponse {
  code: number;
  status: string;
  message: string;
  data: HistoryData;
}

export interface QuizProps {
  historyData: HistoryQuizResponse;
  quizData: DetailQuizResponse | undefined;
}