interface Roleplay {
  id: string;
  topic: string;
  description: string;
  duration: number;
  subject_id: string;
  subject_name: string;
  subject_type: string;
  subject_thumbnail: string;
  session_id: string;
  session_title: string;
  session_no: number;
  start_at: string;
  end_at: string;
}

interface Meta {
  item_count: number;
  per_page: number;
  current_page: number;
  page_count: number;
  page_counter: number;
  has_prev: boolean;
  has_next: boolean;
  prev: string | null;
  next: string | null;
}

export interface RoleplayData {
  code: number;
  status: string;
  message: string;
  roleplays: Roleplay[];
  meta: Meta;
}
