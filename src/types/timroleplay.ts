export interface Member {
  id: string;
  full_name: string;
  avatar: string | null;
  status: string;
  schedule_id: string;
  schedule_datetime: string; // ISO date string
}

// Interface untuk Schedule
export interface Schedule {
  id: string;
  date: string; // ISO date string (YYYY-MM-DD)
  time: string; // Time format (HH:mm:ss)
  total_votes: number;
}

// Interface untuk Team
export interface Team {
  id: string;
  number: string;
  status: string;
  members: Member[];
  schedules: Schedule[];
  created_at: string; // ISO date string
}

// Interface untuk Meta Data
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

// Interface untuk Response Data
export interface TeamsResponse {
  code: number;
  status: string;
  message: string;
  teams: Team[];
  meta: Meta;
}
