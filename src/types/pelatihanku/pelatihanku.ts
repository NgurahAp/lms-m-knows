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

interface StudySubject {
  id: string;
  name: string;
  type: "INDIVIDUAL" | "GROUP";
  description: string;
  thumbnail: string;
}

export interface ProgressModule {
  id: string;
  title: string;
  description: string;
  submitted: boolean;
  is_all_video_seen: boolean;
  total_videos: number;
  total_documents: number;
  total_articles: number;
  total_journals: number;
}

export interface ProgressQuiz {
  id: string;
  title: string;
  duration: number; // in minutes
  status: "FINISHED" | "PENDING" | "LOCKED";
}

interface ProgressAssignment {
  id: string;
  title: string;
  description: string;
  duration_days: number; // days to complete
  deadline?: string; // ISO date format
  status: "FINISHED" | "PENDING" | "LOCKED";
}

export interface SessionProgress {
  type: "MODULE" | "QUIZ" | "ASSIGNMENT" | "REFLECTION" | "ASSESSMENT";
  status: "FINISHED" | "FAILED" | "LOCKED" | "ONGOING";
  modules?: ProgressModule[];
  quizzes?: ProgressQuiz[];
  assignments?: ProgressAssignment[];
}

export interface Session {
  id: string;
  title: string;
  no: number; // session number
  type: "REGULAR" | "MIDTERM_EXAM";
  start_at: string; // ISO date format
  is_locked: boolean;
  progress: SessionProgress[];
}

export interface SubjectData {
  subject: StudySubject;
  overview?: Record<string, unknown>;
  sessions: Session[];
}
