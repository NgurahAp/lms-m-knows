import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { ConfirmAttemptQuizDialog } from "./components/ConfirmAttempDialog";
import { useQuestionData } from "../../../services/pelatihanku/QuizQuestionService";
import { ErrorConsume } from "../../../components/APIRespone";
import LoadingSpinner from "../../../components/reusable/LoadingSpinner";
import { QuizSubmissionPayload } from "../../../services/pelatihanku/QuizService";
import { useQuizSubmission } from "../../../hooks/pelatihanku/useQuiz";
import CountdownTimer from "./components/CountdownTimer";
import toast from "react-hot-toast";
import { NavbarQuiz } from "../../../components/NavbarQuiz";

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
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { mutate: submitQuiz } = useQuizSubmission(quizId);
  const navigate = useNavigate();

  const {
    data: questionData,
    isLoading: isQuestionLoading,
    error: questionError,
  } = useQuestionData(quizId);

  if (isQuestionLoading) {
    return <LoadingSpinner text="Loading..." />;
  }

  if (questionError) {
    return <ErrorConsume />;
  }

  if (!questionData?.data) {
    return <div>No quiz data available</div>;
  }

  const questions = questionData.data.questions_answers;
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const navigateToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answerId,
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
    const quizSubmission: QuizSubmissionPayload = {
      questions_answers: Object.entries(selectedAnswers).map(
        ([questionIndex, answerId]) => ({
          question: questions[parseInt(questionIndex)].id,
          answer: answerId,
        })
      ),
    };

    const loadingToast = toast.loading("Sedang mengirim rangkuman...");

    submitQuiz(quizSubmission, {
      onSuccess: () => {
        toast.dismiss(loadingToast);
        toast.success("Rangkuman berhasil dikirim!");
        navigate(`/detailQuiz/${subjectId}/${sessionId}/${quizId}`);
      },
      onError: (error) => {
        toast.dismiss(loadingToast);
        toast.error("Terjadi kesalahan saat mengirim rangkuman");
        console.log(error);
      },
    });

    setDialogOpen(false);
  };

  const handleTimesUp = () => {
    navigate(`/detailQuiz/${subjectId}/${sessionId}/${quizId}`);
  };

  return (
    <>
      <NavbarQuiz />
      <div className="min-h-[85vh] w-screen flex flex-col md:pt-36 pt-24 md:px-24 px-8 bg-gray-100">
        {/* Quiz Info */}
        <div className="bg-white flex flex-col mt-5 px-4 md:px-8 md:h-36 md:py-0 py-4 justify-center rounded-lg">
          <h1 className="text-xl md:text-2xl font-semibold pb-3">
            {questionData.data.title}
          </h1>
          <p className="text-sm md:text-base">Tipe: {questionData.data.type}</p>
          <p className="text-sm md:text-base">
            Durasi: {Math.floor(questionData.data.duration / 60)} menit
          </p>
        </div>

        {/* Question List with Answer Status */}
        <div className="bg-white flex flex-col mt-5 px-4 md:px-8 md:h-28 h-full py-4 md:py-0 justify-center rounded-lg">
          <h1 className="font-bold mb-3">Daftar Soal</h1>
          <div className="flex flex-wrap md:justify-normal justify-center gap-1 md:gap-2 ">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateToQuestion(index)}
                className={`w-8 h-8 text-sm flex items-center justify-center border rounded ${
                  index === currentQuestionIndex
                    ? "bg-blue-500 text-white"
                    : selectedAnswers[index]
                    ? "bg-blue-500 text-white"
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
          <h1 className="text-end text-red-500 font-bold text-xs  pb-3">
            Sisa waktu:{" "}
            <CountdownTimer
              initialDuration={questionData.data.duration}
              onTimeUp={handleTimesUp}
            />
          </h1>
          <h2 className="text-lg  font-semibold ">
            {currentQuestion.question}
          </h2>
          <p className="md:pt-2 pb-4 md:pb-7 text-xs text-gray-500">
            *Pilih satu
          </p>
          <div className="space-y-4 md:space-y-5">
            {currentQuestion.answers.map((answer) => (
              <label key={answer.id} className="block p-3 border rounded">
                <input
                  type="radio"
                  name="answer"
                  value={answer.id}
                  checked={selectedAnswers[currentQuestionIndex] === answer.id}
                  onChange={() => handleAnswerSelect(answer.id)}
                  className="mr-2 text-sm"
                />
                <span className="text-sm">{answer.answer}</span>
              </label>
            ))}
          </div>
          <div className="flex justify-between md:justify-end gap-5 pt-5 md:pt-10">
            <button
              onClick={handlePrevious}
              className={`px-6 py-2 rounded-lg ${
                isFirstQuestion
                  ? "hidden"
                  : "bg-white border-blue-500 border text-sm text-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              Sebelumnya
            </button>
            {isLastQuestion ? (
              <button
                onClick={() => setDialogOpen(true)}
                className="bg-green-500 px-6 py-2 text-sm rounded-lg text-white hover:bg-green-600"
              >
                Selesai
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-blue-500 px-6 py-2 text-sm rounded-lg text-white hover:bg-blue-600"
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
    </>
  );
};

export default QuizAttempt;
