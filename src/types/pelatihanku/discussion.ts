export interface DiscussionResponse {
  code: number;
  status: string;
  message: string;
  data: DataResponse;
  meta: MetaData;
}

interface DataResponse {
  detail: Detail;
  discussions: unknown[];
}

interface Detail {
  subject_id: string;
  subject_name: string;
  session_id: string;
  session_no: number;
  session_type: string;
}

interface MetaData {
  page: number;
  per_page: number;
  page_size: number;
  total_data: number;
}
