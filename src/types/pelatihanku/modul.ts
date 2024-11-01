interface ModuleDetail {
  subject_id: string;
  subject_name: string;
  session_id: string;
  session_no: number;
  session_type: string;
}

interface Module {
  id: string;
  total_videos: string;
  total_documents: string;
  total_journals: string;
  total_articles: string;
  is_all_video_seen: boolean;
  title: string;
  description: string;
  submitted: boolean;
}

interface ModuleItems {
  id: string;
  title: string;
  description: string;
  is_all_video_seen: boolean;
  videos: unknown[];
  documents: {
    id: string;
    document_id: string | null;
    document_file: string;
    module_id: string;
    title: string;
    duration_in_seconds: number;
  }[];
  journals: unknown[];
  articles: unknown[];
  status: string;
}

export interface ModuleResponse {
  detail: ModuleDetail;
  modules: Module[];
}

export interface DetailModuleResponse {
  detail: ModuleDetail;
  module: ModuleItems;
}


export interface SubmitResponseData {
  id: string;
  student_id: string;
  module_id: string;
  quiz_id: string | null;
  assignment_id: string | null;
  session_id: string;
  subject_id: string;
  status: string;
  type: string;
  score: number;
  is_late: boolean;
  module_answer: string;
  timestamp_taken: string;
  timestamp_scored: string | null;
  timestamp_submitted: string;
  deadline: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}
