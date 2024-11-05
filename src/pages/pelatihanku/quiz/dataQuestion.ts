// types.ts
export type QuestionOption = {
  label: string;
  value: string;
};

export type Question = {
  id: number;
  question: string;
  options: QuestionOption[];
  correctAnswer: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "Berapakah harga yang diharuskan saat 10% bunga dari bank?",
    options: [
      { label: "A. 40.000", value: "40000" },
      { label: "B. 20.000", value: "20000" },
      { label: "C. 30.000", value: "30000" },
      { label: "D. 50.000", value: "50000" },
    ],
    correctAnswer: "40000",
  },
  {
    id: 1,
    question: "Berapakah harga yang diharuskan saat 10% bunga dari bank?",
    options: [
      { label: "A. 40.000", value: "40000" },
      { label: "B. 20.000", value: "20000" },
      { label: "C. 30.000", value: "30000" },
      { label: "D. 50.000", value: "50000" },
    ],
    correctAnswer: "40000",
  },
  {
    id: 2,
    question: "Berapakah harga yang diharuskan saat 111% bunga dari bank?",
    options: [
      { label: "A. 40.000", value: "40000" },
      { label: "B. 20.000", value: "20000" },
      { label: "C. 30.000", value: "30000" },
      { label: "D. 50.000", value: "50000" },
    ],
    correctAnswer: "40000",
  },
  {
    id: 3,
    question: "Berapakah harga yang diharuskan saat 122% bunga dari bank?",
    options: [
      { label: "A. 40.000", value: "40000" },
      { label: "B. 20.000", value: "20000" },
      { label: "C. 30.000", value: "30000" },
      { label: "D. 50.000", value: "50000" },
    ],
    correctAnswer: "40000",
  },
];