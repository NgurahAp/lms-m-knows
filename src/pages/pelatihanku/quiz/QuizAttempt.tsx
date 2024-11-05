import { Link, useNavigate, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { Question, questions } from "./dataQuestion";
import { ConfirmAttemptQuizDialog } from "./components/ConfirmAttempDialog";

export const QuizAttempt = () => {
  const { subjectId, sessionId, quizId } = useParams<{
    subjectId: string;
    sessionId: string;
    quizId: string;
  }>();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const currentQuestion: Question = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const [isDialogOpen, setDialogOpen] = useState(false); // State untuk dialog konfirmasi

  const navigateToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setSelectedAnswer(null);
  };

  const navigate = useNavigate();

  const handleNext = () => {
    console.log("Pindah ke soal berikutnya");
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const handlePrevious = () => {
    console.log("Kembali ke soal sebelumnya");
    if (!isFirstQuestion) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedAnswer(null);
    }
  };

  const handleQuizFinish = () => {
    setDialogOpen(false);
    navigate(`/quizAttempt/${subjectId}/${sessionId}/${quizId}`);
  };

  console.log(quizId);

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <Link to="/dashboard" className="flex items-center">
          <img
            src="/pelatihanku/home.png"
            className="md:w-6 w-5 -mt-1"
            alt="Home"
          />
          <span className="md:pl-5 pl-3 text-blue-500 md:text-base text-sm font-semibold">
            Beranda
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to="/pelatihanku">
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            Pelatihan-ku
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to={`/pelatihanku/${subjectId}`}>
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            quizData?.data.subject.name
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to={`/quiz/${subjectId}/${sessionId}`}>
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            Pertemuan quizData?.data.session.session_no
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-gray-400 md:text-base text-sm font-semibold">
          Quiz
        </span>
      </div>
      {/* Quiz Info */}
      <div className="bg-white flex flex-col mt-5 px-8 h-36 justify-center rounded-lg">
        <h1 className="text-3xl font-semibold pb-3">
          quizData?.data.quiz.title
        </h1>
        <p className="text-lg">Pertemuan quizData?.data.session.session_no</p>
      </div>
      {/* Daftar Soal */}
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
                checked={selectedAnswer === option.value}
                onChange={() => setSelectedAnswer(option.value)}
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
                : "bg-white border-blue-500 border text-blue-500  hover:bg-blue-500 hover:text-white"
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
          onStart={handleQuizFinish}
        />
      )}
    </div>
  );
};

export default QuizAttempt;
