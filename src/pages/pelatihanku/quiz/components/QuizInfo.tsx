import { DetailQuizResponse } from "../../../../types/pelatihanku/quiz";
import { GoListOrdered } from "react-icons/go";
import { MdAccessAlarm } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";

export interface QuizInfoProps {
  quizData: DetailQuizResponse | undefined;
}

export const QuizInfo = ({ quizData }: QuizInfoProps) => {
  const durationInSeconds = quizData?.data.quiz.duration ?? 0;
  const durationInMinutes = Math.floor(durationInSeconds / 60);

  return (
    <div>
      <div>
        <h1 className="text-base md:text-lg font-semibold pt-5">
          Detail Quiz
        </h1>
        <div className="flex items-center text-sm gap-x-2 py-1">
          <GoListOrdered className="text-base  text-blue-500" />{" "}
          {quizData?.data.quiz.total_questions} Soal
        </div>
        <div className="flex items-center text-sm gap-x-2 py-1">
          <MdAccessAlarm className="text-base  text-blue-500" /> Durasi{" "}
          {durationInMinutes} Menit
        </div>
        <div className="flex items-center text-sm gap-x-2 py-1">
          <PiExam className="text-base  text-blue-500" /> Nilai
          Kelulusan minimal 80
        </div>
        <div className="flex items-center text-sm gap-x-2 py-1">
          <FaHistory className="text-base  text-blue-500" /> Max. 3x
          Pengulangan
        </div>
      </div>
    </div>
  );
};
