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

export interface ModuleResponse {
  detail: ModuleDetail;
  modules: Module[];
}
