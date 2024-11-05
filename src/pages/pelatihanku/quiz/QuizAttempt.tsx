import {  useParams } from "react-router-dom";
import { useState } from "react";
import { Question, questions } from "./dataQuestion";
import { ConfirmAttemptQuizDialog } from "./components/ConfirmAttempDialog";
import { useQuestionData } from "../../../services/pelatihanku/QuizQuestionService";
import { ErrorConsume, Loading } from "../../../components/APIRespone";

export const QuizAttempt = () => {
  const { subjectId, sessionId, quizId } = useParams<{
    subjectId: string;
    sessionId: string;
    quizId: string;
  }>();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const currentQuestion: Question = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const [isDialogOpen, setDialogOpen] = useState(false);

  const {
    data: questionData,
    isLoading: isQuestionLoading,
    error: questionError,
  } = useQuestionData(quizId);

  if (isQuestionLoading) {
    <Loading />;
  }

  if (questionError) {
    <ErrorConsume />;
  }


  const navigateToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleQuizSubmit = () => {
    // Membuat object yang berisi semua jawaban dan informasi quiz
    const quizSubmission = {
      quizId,
      subjectId,
      sessionId,
      answers: Object.entries(selectedAnswers).map(
        ([questionIndex, answer]) => ({
          questionNumber: parseInt(questionIndex) + 1,
          selectedAnswer: answer,
        })
      ),
    };

    console.log("Quiz Submission:", quizSubmission);
    setDialogOpen(false);
  };

  console.log(questionData)

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb section remains the same */}
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        {/* ... existing breadcrumb code ... */}
      </div>

      {/* Quiz Info section remains the same */}
      <div className="bg-white flex flex-col mt-5 px-8 h-36 justify-center rounded-lg">
        {/* ... existing quiz info code ... */}
      </div>

      {/* Question List with Answer Status */}
      <div className="bg-white flex flex-col mt-5 px-8 h-28 justify-center rounded-lg">
        <h1 className="font-bold mb-3">Daftar Soal</h1>
        <div className="flex space-x-2">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => navigateToQuestion(index)}
              className={`w-8 h-8 flex items-center justify-center border rounded ${
                index === currentQuestionIndex
                  ? "bg-blue-500 text-white"
                  : selectedAnswers[index]
                  ? "bg-green-100 text-green-700 border-green-500"
                  : "bg-white text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Quiz Question */}
      <div className="bg-white p-6 mt-5 rounded-lg shadow-lg">
        <h1 className="text-end text-red-500 font-bold text-sm pb-3">
          Sisa waktu 09.59
        </h1>
        <h2 className="text-lg font-semibold mb-4">
          {currentQuestion.question}
        </h2>
        <p className="pt-2 pb-7 text-sm text-gray-500">*Pilih satu</p>
        <div className="space-y-7">
          {currentQuestion.options.map((option) => (
            <label key={option.value} className="block p-5 border rounded">
              <input
                type="radio"
                name="answer"
                value={option.value}
                checked={selectedAnswers[currentQuestionIndex] === option.value}
                onChange={() => handleAnswerSelect(option.value)}
                className="mr-2"
              />
              {option.label}
            </label>
          ))}
        </div>
        <div className="flex justify-end gap-5 pt-10">
          <button
            onClick={handlePrevious}
            className={`px-6 py-2 rounded-lg ${
              isFirstQuestion
                ? "hidden"
                : "bg-white border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-white"
            }`}
          >
            Sebelumnya
          </button>
          {isLastQuestion ? (
            <button
              onClick={() => setDialogOpen(true)}
              className="bg-green-500 px-6 py-2 rounded-lg text-white hover:bg-green-600"
            >
              Selesai
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600"
            >
              Selanjutnya
            </button>
          )}
        </div>
      </div>

      {isDialogOpen && (
        <ConfirmAttemptQuizDialog
          onClose={() => setDialogOpen(false)}
          onSubmit={handleQuizSubmit}
        />
      )}
    </div>
  );
};

export default QuizAttempt;
