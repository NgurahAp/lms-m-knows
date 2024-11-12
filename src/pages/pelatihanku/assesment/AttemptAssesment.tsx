import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { useState } from "react";
import { AssesmentQuestion } from "../../../types/pelatihanku/assesment";
import { AssesmentDialog } from "./AssesmentDialog";

const getRatingLabel = (value: number): string => {
  const labels: { [key: number]: string } = {
    1: "Sangat Tidak Baik",
    2: "Tidak Baik",
    3: "Biasa Saja",
    4: "Baik",
    5: "Sangat Baik",
  };
  return labels[value] || String(value);
};

const data: AssesmentQuestion[] = [
  {
    id: "14c0286e-0d80-44d3-80e9-a86a52a7b6ed",
    question: "Instruktur menerangkan konsep pada modul dengan jelas",
    type: "OPTION",
    answers: [1, 2, 3, 4, 5],
  },
  {
    id: "bb994ee4-7a60-4dfc-b751-1d2d4ea0ae88",
    question: "Alur penjelasan instruktur runut dan mudah dipahami",
    type: "OPTION",
    answers: [1, 2, 3, 4, 5],
  },
  {
    id: "8a7c0d2d-0d2f-4d07-aa0b-eb35b7d33f4b",
    question: "Instruktur memberikan contoh praktis nyata yang mudah dipahami",
    type: "OPTION",
    answers: [1, 2, 3, 4, 5],
  },
  {
    id: "9c0602b6-2cce-4cbf-8ea1-4f38ba1f5b58",
    question:
      "Instruktur menyampaikan materi dengan detail, didukung gambar, video dan animasi yang tepat",
    type: "OPTION",
    answers: [1, 2, 3, 4, 5],
  },
  {
    id: "45ba5de8-3b2a-42e4-806b-02b6af569ae8",
    question: "Kualitas Materi Ajar",
    type: "SCORE",
    answers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: "645d22be-43af-4824-9664-2eabef416527",
    question: "Kualitas Pengajar",
    type: "SCORE",
    answers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: "72e495a5-f872-4d1d-8985-d6cbf58765bf",
    question:
      "Tuliskan hal-hal yang ingin Anda sampaikan pada instruktur tersebut",
    type: "ESSAY",
    answers: [],
  },
];

export const AttemptAssesment = () => {
  const { subjectId, sessionId, subjectName } = useParams<{
    subjectId: string;
    sessionId: string;
    subjectName: string;
  }>();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const breadcrumbItems = [
    {
      label: "Beranda",
      path: "/dashboard",
    },
    {
      label: "Pelatihan-ku",
      path: "/pelatihanku",
    },
    {
      label: subjectName,
      path: `/pelatihanku/${subjectId}`,
    },
    {
      label: "Penilaian Pengajar",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<{ [key: string]: string }>({});

  const handleNext = () => {
    if (currentStep < data.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (questionId: string, value: string) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleQuestionClick = (index: number) => {
    setCurrentStep(index);
  };

  const handleSubmit = () => {
    // Transform responses into the required format
    const formattedAnswers = {
      answers: data.map((question) => ({
        question_id: question.id,
        answer: responses[question.id] || "",
      })),
    };

    // Log the formatted answers (replace with your API call)
    console.log(JSON.stringify(formattedAnswers, null, 2));
  };

  const isLastQuestion = currentStep === data.length - 1;
  const currentQuestion = data[currentStep];

  // Check if all questions are answered
  const areAllQuestionsAnswered = data.every(
    (question) => responses[question.id]
  );

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Content */}
      <div className="my-8 py-16 px-8 bg-white flex flex-col items-center justify-center">
        {/* Question Preview Buttons */}
        <div className="w-full mb-8 flex flex-wrap justify-center">
          {data.map((_, index) => (
            <div className="flex items-center" key={index}>
              <button
                onClick={() => handleQuestionClick(index)}
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 
          ${
            currentStep === index
              ? "bg-blue-100 text-blue-500 border-blue-500"
              : responses[data[index].id]
              ? "bg-blue-500 border-blue-500 text-white"
              : "border-gray-300 text-gray-500"
          }`}
              >
                {index + 1}
              </button>
              {index < data.length - 1 && (
                <hr
                  className={`w-12 border-t-2 ${
                    responses[data[index].id]
                      ? "border-blue-500"
                      : "border-gray-300"
                  } `}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between mb-4 w-full">
          <span>
            Soal {currentStep + 1} dari {data.length}
          </span>
        </div>

        <div className="mb-6 w-full">
          <p className="font-semibold mb-4">{currentQuestion.question}</p>
          {currentQuestion.type === "OPTION" ? (
            <div className="flex flex-col gap-4">
              {currentQuestion.answers.map((answer) => (
                <label
                  key={answer}
                  className="flex items-center space-x-2 p-5 hover:bg-gray-50 rounded-lg border border-gray-200"
                >
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={answer}
                    onChange={(e) =>
                      handleChange(currentQuestion.id, e.target.value)
                    }
                    checked={responses[currentQuestion.id] === String(answer)}
                    className="form-radio text-blue-600"
                  />
                  <span>{getRatingLabel(answer)}</span>
                </label>
              ))}
            </div>
          ) : currentQuestion.type === "SCORE" ? (
            <div className="flex flex-col gap-2">
              {currentQuestion.answers.map((answer) => (
                <label
                  key={answer}
                  className="flex items-center space-x-2 p-3 hover:bg-gray-50 rounded-lg border border-gray-200"
                >
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={answer}
                    onChange={(e) =>
                      handleChange(currentQuestion.id, e.target.value)
                    }
                    checked={responses[currentQuestion.id] === String(answer)}
                    className="form-radio text-blue-600"
                  />
                  <span>{answer}</span>
                </label>
              ))}
            </div>
          ) : (
            <textarea
              rows={4}
              className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tuliskan jawaban Anda di sini..."
              onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
              value={responses[currentQuestion.id] || ""}
            ></textarea>
          )}
        </div>

        <div className="flex justify-end gap-5 w-full">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`px-4 py-2  border-blue-500 border text-blue-500 rounded focus:outline-none ${
              currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Sebelumnya
          </button>
          {isLastQuestion ? (
            <button
              onClick={() => setDialogOpen(true)}
              disabled={!areAllQuestionsAnswered}
              className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none ${
                !areAllQuestionsAnswered ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              Selanjutnya
            </button>
          )}
        </div>
      </div>
      {isDialogOpen && (
        <AssesmentDialog
          onClose={() => setDialogOpen(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
