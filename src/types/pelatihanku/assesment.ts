export interface AssesmentQuestion {
  id: string;
  question: string;
  type: "OPTION" | "SCORE" | "ESSAY";
  answers: number[];
}
