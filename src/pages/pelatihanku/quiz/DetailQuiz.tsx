import { Link, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { GoListOrdered } from "react-icons/go";
import { MdAccessAlarm } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import {
  useDetailQuizData,
  useHistoryQuizData,
} from "../../../services/pelatihanku/QuizService";

export const DetailQuiz = () => {
  const { subjectId, sessionId, quizId } = useParams<{
    subjectId: string;
    sessionId: string;
    quizId: string;
  }>();

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

  // Handle loading states
  if (isQuizLoading || isHistoryLoading) {
    return (
      <div className="min-h-[85vh] w-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // Handle error states
  if (quizError || historyError) {
    return (
      <div className="min-h-[85vh] w-screen flex items-center justify-center">
        Error loading data
      </div>
    );
  }

  const durationInSeconds = quizData?.data.quiz.duration ?? 0;
  const durationInMinutes = Math.floor(durationInSeconds / 60);

  console.log(historyData);

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
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
            {quizData?.data.subject.name}
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to={`/quiz/${subjectId}/${sessionId}`}>
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            Pertemuan {quizData?.data.session.session_no}
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-gray-400 md:text-base text-sm font-semibold">
          Quiz
        </span>
      </div>
      <div className="bg-white flex flex-col mt-5 px-8 h-36 justify-center rounded-lg">
        <h1 className="text-3xl font-semibold pb-3">
          {quizData?.data.quiz.title}
        </h1>
        <p className="text-lg">Pertemuan {quizData?.data.session.session_no}</p>
      </div>
      <div className="bg-white flex mt-5 w-full px-8 h-full justify-center rounded-lg">
        <div className="w-1/2 flex items-center justify-center">
          <img src="/pelatihanku/quiz-left.png" alt="" />
        </div>
        <div className="w-1/2 py-10">
          <h1 className="text-xl font-semibold pb-5">Riwayat Quiz</h1>
          {historyData?.data.history_data?.[0] && (
            <div className="border-[1px] rounded-md p-5">
              <div className="flex justify-between">
                <h2 className="text-sm font-semibold">
                  Quiz Pertemuan {quizData?.data.session.session_no}
                </h2>
                <h2 className="text-[#4B5565] text-sm ">
                  {new Date(
                    historyData.data.history_data[0].timestamp_taken
                  ).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {new Date(
                    historyData.data.history_data[0].timestamp_taken
                  ).toLocaleTimeString("id-ID")}
                </h2>
              </div>
              <div className="h-24 flex my-5 gap-x-2">
                <div className="w-24 flex flex-col justify-center items-center gap-y-1">
                  <h2 className="text-xs">Total Nilai</h2>
                  <h1 className="text-3xl font-semibold">
                    {historyData.data.history_data[0].score}
                  </h1>
                </div>
                <div className="w-52 flex bg-[#DBF2EB] rounded-lg flex-col justify-center items-center gap-y-1">
                  <h1 className="text-3xl font-semibold">
                    {historyData.data.history_data[0].correct}
                  </h1>
                  <h2 className="text-xs">Jawaban Benar</h2>
                </div>
                <div className="w-52 flex bg-[#F6DCDB] rounded-lg flex-col justify-center items-center gap-y-1">
                  <h1 className="text-3xl font-semibold">
                    {historyData.data.history_data[0].wrong}
                  </h1>
                  <h2 className="text-xs">Jawaban Salah</h2>
                </div>
                <div className="w-52 flex bg-[#ECFDBF] rounded-lg flex-col justify-center items-center gap-y-1">
                  <h1 className="text-3xl font-semibold">
                    {historyData.data.history_data[0].total_question}
                  </h1>
                  <h2 className="text-xs">Soal</h2>
                </div>
              </div>
              <p className="text-sm">
                Waktu Selesai{" "}
                {(() => {
                  const timeInSeconds =
                    historyData.data.history_data[0].time_elapsed;
                  const minutes = Math.floor(timeInSeconds / 60);
                  const seconds = timeInSeconds % 60;
                  return `${minutes.toString().padStart(2, "0")}:${seconds
                    .toString()
                    .padStart(2, "0")}`;
                })()}
              </p>
            </div>
          )}
          <div>
            <div>
              <h1 className="text-xl font-semibold pt-5 pb-2">Detail Quiz</h1>
              <div className="flex items-center gap-x-2 py-2">
                <GoListOrdered className="text-lg text-blue-500" />{" "}
                {quizData?.data.quiz.total_questions} Soal
              </div>
              <div className="flex items-center gap-x-2 py-2">
                <MdAccessAlarm className="text-lg text-blue-500" /> Durasi{" "}
                {durationInMinutes} Menit
              </div>
              <div className="flex items-center gap-x-2 py-2">
                <PiExam className="text-lg text-blue-500" /> Nilai Kelulusan
                minimal 80
              </div>
              <div className="flex items-center gap-x-2 py-2">
                <FaHistory className="text-lg text-blue-500" /> Max. 3x
                Pengulangan
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-xl font-semibold pt-5 pb-2">Deskripsi</h1>
              <p className="text-gray-500">
                Quiz ini bertujuan untuk menguji pengetahuan Anda tentang materi
                yang telah dipelajari di pertemuan ini.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold pt-7 pb-2">Pengaturan Quiz</h1>
            <div className="flex items-center gap-x-2 py-2">
              <MdOutlineTaskAlt className="text-lg text-blue-500" /> Kerjakan
              Dengan Jujur
            </div>
            <div className="flex items-center gap-x-2 py-2">
              <MdOutlineTaskAlt className="text-lg text-blue-500" /> Dilarang
              Bekerja Sama
            </div>
            <div className="flex items-center gap-x-2 py-2">
              <MdOutlineTaskAlt className="text-lg text-blue-500" /> Apabila
              Keluar dari App, Waktu Quiz Tetap Berjalan
            </div>
            <div className="flex items-center gap-x-2 py-2">
              <MdOutlineTaskAlt className="text-lg text-blue-500" /> Percobaan
              Quiz Terakhir Merupakan Nilai Dipakai
            </div>
          </div>
          <h1 className="py-3 text-blue-500 font-medium">
            Kesempatan mengerjakan tersisa :{" "}
            {historyData?.data.remaining_attempt} kali
          </h1>
          <button
            className={`flex w-full items-center py-4 rounded-xl justify-center mt-5 ${
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
    </div>
  );
};
