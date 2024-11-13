export interface AssessmentResponse {
  code: number;
  status: string;
  message: string;
  data: TeacherAssessmentData;
}

export interface TeacherAssessmentData {
  id: string;
  session_no: string;
  status: string;
  questions: AssesmentQuestion[];
  teacher: Teacher;
  is_eligible: boolean;
}

export interface AssesmentQuestion {
  id: string;
  question: string;
  type: "OPTION" | "SCORE" | "ESSAY";
  answers: number[]; // Jika diperlukan, bisa diubah menjadi `string[] | number[]` sesuai tipe data di API
}

interface Teacher {
  full_name: string;
  avatar: string | null;
}

export interface AssesmentRequest {
  answers: Array<{
    question_id: string;
    answer: string;
  }>;
}