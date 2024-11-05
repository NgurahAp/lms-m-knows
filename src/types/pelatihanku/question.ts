export interface QuestionResponse {
  code: number;
  status: string;
  message: string;
  data: QuizData;
}

interface QuizData {
  type: string;
  title: string;
  questions_answers: QuestionAnswer[];
  duration: number;
}

interface QuestionAnswer {
  id: string;
  question: string;
  answers: Answer[];
}

interface Answer {
  id: string;
  answer: string;
}
