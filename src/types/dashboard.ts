export interface DashboardData {
  profile: {
    avatar: string;
    poin: number;
    user_name: string;
    discussion_likes: number;
    discussion_posted: number;
    full_name: string;
    semester: number;
    ipk: string;
    major: string;
    role: string;
    total_certificates: number;
    current_subjects: number;
    finished_subjects: number;
    faculty: string;
  };
  articles: Array<{
    id: string;
    title: string;
    content: string;
    thumbnail: string;
    slug: string;
    views: number;
    created_at: string;
    author: {
      full_name: string;
    };
    category: string;
    is_favorite: boolean;
    tags: string[];
  }>;
  assignments: Array<{
    assignment_id: string;
    assignment_session_id: string;
    assignment_title: string;
    assignment_desc: string;
    progress_status: string;
    progress_type: string;
    progress_timestamp_submitted: string | null;
    progress_deadline: string;
    subject_id: string;
    subject_name: string;
  }>;
  calendar: Array<{
    ref_id: string;
    subject_id: string;
    type: string;
    startAt: string;
    endAt: string;
    summary: string;
    place: string;
    speaker: string | null;
    allDay: boolean;
  }>;
  subject_progress: {
    dataMajor: Record<string, unknown>;
    dataSubjects: Array<{
      id: string;
      name: string;
      slug: string;
      type: string;
      subject_code: string;
      thumbnail: string;
      teacher_name: string;
      start_at: string | null;
      credit: number;
      subject_semester: number;
      current_session: number;
      session_count: number;
      progress_percentage: number;
    }>;
  };
}

export interface DashboardBannerData {
  id: string,
  url: string, 
}

export interface DashboardContentProps {
  dashboardData: DashboardData;
  dashboardBannerdata: DashboardBannerData[];
}

export interface CalendarData {
  ref_id: string;
  subject_id: string;
  type: string;
  startAt: string;
  endAt: string;
  summary: string;
  place: string;
  speaker: string | null;
  allDay: boolean;
}

export interface CalendarProps {
  calendarData: CalendarData[];
}

interface Articles {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  views: number;
  created_at: string;
  author: {
    full_name: string;
  }
  category: string;
  is_favorite: boolean;
  tags: string[];
}

export interface ArticlesProps {
  articlesData: Articles[];
}