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
