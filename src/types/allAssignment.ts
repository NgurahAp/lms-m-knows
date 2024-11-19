interface Assignment {
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
}

export interface AllAssignmentResponse {
    code: number;
    status: string;
    message: string;
    data: Assignment[];
}
