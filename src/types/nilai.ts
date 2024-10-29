interface Student {
  id: string;
  full_name: string;
  major: string;
}

interface Subject {
  id: string;
  name: string;
  credit: number;
  type: string;
  score: string;
  score_letter: string;
  score_gpa: string;
  status: string;
  semester: number;
  taken_at: string;
  finished_at: string | null;
}

interface Meta {
  page_size: number;
  total_data: number;
  current_page: number;
  max_page: number;
}

export interface NilaiResponse {
  code: number;
  status: string;
  message: string;
  data: {
    student: Student;
    subjects: Subject[]; 
  };
  meta: Meta;
}
