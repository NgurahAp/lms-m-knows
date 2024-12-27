export interface Session {
  id: string;
  type: string;
  day: string;
  time: string;
  status: string;
  assessment_id: string;
  booked_by: string;
  booked_at: string;
}

export interface ApiData {
  code: number;
  status: string;
  message: string;
  session: Session;
}
