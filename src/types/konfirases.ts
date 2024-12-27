interface Participant {
  participant_id: string;
  participant_full_name: string;
  participant_avatar: string;
}

interface Assessment {
  id: string;
  topic: string;
  description: string;
  case_study: string;
  rules: string;
  duration: number;
}

interface Session {
  id: string;
  type: string;
  status: string;
  day: string;
  time: string;
  deadline: string | null;
  booked_at: string;
}

interface Submission {
  document_url: string | null;
  video_url: string | null;
  submitted_at: string | null;
}

interface ScoreDetail {
  id: string;
  title: string;
  description: string;
  score: number;
}

interface Competency {
  id: string;
  aspect: string;
  description: string;
  details: ScoreDetail[];
}

interface Rubric {
  id: string;
  title: string;
  description: string;
  type: string;
  major_id: string;
  major_name: string;
  creator_name: string;
  total_criteria: string;
}

interface Scores {
  rubric: Rubric;
  competencies: Competency[];
}

export interface ApiResponse {
  code: number;
  status: string;
  message: string;
  data: {
    detail: Participant;
    assessment: Assessment;
    session: Session;
    submission: Submission;
    scores: Scores;
  };
}
