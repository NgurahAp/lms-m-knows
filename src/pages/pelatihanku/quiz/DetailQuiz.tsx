import { useParams } from "react-router-dom";
import { MdOutlineTaskAlt } from "react-icons/md";
import { useState } from "react";
import { QuizHistory } from "./components/HistoryQuiz";
import { QuizInfo } from "./components/QuizInfo";
import QuizDialog from "./components/QuizDialog";
import { useNavigate } from "react-router-dom";
import { ErrorConsume } from "../../../components/APIRespone";
import LoadingSpinner from "../../../components/reusable/LoadingSpinner";
import {
  useDetailQuizData,
  useHistoryQuizData,
} from "../../../hooks/pelatihanku/useQuiz";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import PageInfo from "../../../components/reusable/PageInfo";

export const DetailQuiz = () => {
  const { subjectId, sessionId, quizId } = useParams<{
    subjectId: string;
    sessionId: string;
    quizId: string;
  }>();

  const navigate = useNavigate();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const {
    data: quizData,
    isLoading: isQuizLoading,
    error: quizError,
  } = useDetailQuizData(subjectId, sessionId, quizId);

  const {
    data: historyData,
    isLoading: isHistoryLoading,
    error: historyError,
  } = useHistoryQuizData(quizId);

  if (isQuizLoading || isHistoryLoading) {
    <LoadingSpinner text="Loading..." />;
  }

  if (quizError || historyError) {
    <ErrorConsume />;
  }

  // Function to handle the quiz start confirmation
  const handleQuizStart = () => {
    setDialogOpen(false);
    navigate(`/quizAttempt/${subjectId}/${sessionId}/${quizId}`);
  };

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
      label: quizData?.data.subject.name,
      path: `/pelatihanku/${subjectId}`,
    },
    {
      label: `Pertemuan ${quizData?.data.session.session_no}`,
      path: `/quiz/${subjectId}/${sessionId}`,
    },
    {
      label: "Quiz",
    },
  ];
  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-4 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      <PageInfo
        title={quizData?.data.quiz.title}
        subtitle={`Pertemuan ${quizData?.data.session.session_no}`}
      />
      {/* Quiz Content */}
      <div className="bg-white flex md:flex-row flex-col mt-5 w-full px-4 md:px-8 h-full justify-center rounded-lg">
        <div className="w-1/2  md:block hidden items-center justify-center">
          <img src="/pelatihanku/quiz-left.png" alt="" />
        </div>
        <div className="md:w-1/2 py-5 md:py-10">
          {historyData?.data.history_data?.[0] && (
            <QuizHistory historyData={historyData} quizData={quizData} />
          )}
          <QuizInfo quizData={quizData} />
          <div>
            <div>
              <h1 className="text-base md:text-xl font-semibold pt-5 pb-2">
                Deskripsi
              </h1>
              <p className="text-gray-500 md:text-base text-sm">
                Quiz ini bertujuan untuk menguji pengetahuan Anda tentang materi
                yang telah dipelajari di pertemuan ini.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-base md:text-xl font-semibold pt-7 pb-2">
              Pengaturan Quiz
            </h1>
            <div className="flex items-center text-sm gap-x-2 py-2">
              <MdOutlineTaskAlt className="text-base md:text-lg text-blue-500" />{" "}
              Kerjakan Dengan Jujur
            </div>
            <div className="flex items-center text-sm gap-x-2 py-2">
              <MdOutlineTaskAlt className="text-base md:text-lg text-blue-500" />{" "}
              Dilarang Bekerja Sama
            </div>
            <div className="flex items-center text-sm gap-x-2 py-2">
              <MdOutlineTaskAlt className="text-base md:text-lg text-blue-500" />{" "}
              Apabila Keluar dari App, Waktu Quiz Tetap Berjalan
            </div>
            <div className="flex items-center text-sm gap-x-2 py-2">
              <MdOutlineTaskAlt className="text-base md:text-lg text-blue-500" />{" "}
              Percobaan Quiz Terakhir Merupakan Nilai Dipakai
            </div>
          </div>
          <h1 className="py-3 md:text-base text-base text-blue-500 font-medium">
            Kesempatan mengerjakan tersisa :{" "}
            {historyData?.data.remaining_attempt ?? 3} kali
          </h1>
          {/* Button Mulai Quiz */}
          <button
            onClick={() => setDialogOpen(true)}
            className={`flex w-full items-center md:text-base text-sm py-4 rounded-xl justify-center mt-5 ${
              historyData?.data.remaining_attempt === 0
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
            disabled={historyData?.data.remaining_attempt === 0}
          >
            {historyData?.data.remaining_attempt === 0
              ? "Kesempatan Habis!"
              : "Mulai Quiz"}
          </button>
        </div>
      </div>
      {/* Dialog Konfirmasi */}
      {isDialogOpen && (
        <QuizDialog
          onClose={() => setDialogOpen(false)}
          onStart={handleQuizStart}
        />
      )}
    </div>
  );
};
