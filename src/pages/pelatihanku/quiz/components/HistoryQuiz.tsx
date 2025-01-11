import { QuizProps } from "../../../../types/pelatihanku/quiz";

export const QuizHistory = ({ historyData, quizData }: QuizProps) => {
  if (!historyData?.data.history_data?.[0]) return null;

  const history = historyData.data.history_data[0];

  return (
    <>
      <h1 className="text-xl font-semibold pb-5">Riwayat Quiz</h1>
      <div className="border-[1px] rounded-md p-5">
        <div className="flex justify-between">
          <h2 className="text-xs font-semibold">
            Quiz Pertemuan {quizData?.data.session.session_no}
          </h2>
          <h2 className="text-[#4B5565] text-xs">
            {new Date(history.timestamp_taken).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            - {new Date(history.timestamp_taken).toLocaleTimeString("id-ID")}
          </h2>
        </div>
        <div className="flex md:flex-row flex-col my-5 gap-4 md:gap-1">
          <div className="md:w-24 flex flex-col justify-center items-center gap-1">
            <h2 className="text-xs">Total Nilai</h2>
            <h1 className="text-xl font-semibold">
              {historyData.data.history_data[0].score}
            </h1>
          </div>
          <div className="md:w-52 py-3 flex bg-[#DBF2EB] rounded-lg flex-col justify-center items-center gap-y-1">
            <h1 className="text-xl font-semibold">
              {historyData.data.history_data[0].correct}
            </h1>
            <h2 className="text-xs">Jawaban Benar</h2>
          </div>
          <div className="md:w-52 py-3 flex bg-[#F6DCDB] rounded-lg flex-col justify-center items-center gap-y-1">
            <h1 className="text-xl font-semibold">
              {historyData.data.history_data[0].wrong}
            </h1>
            <h2 className="text-xs">Jawaban Salah</h2>
          </div>
          <div className="md:w-52 py-3 flex bg-[#ECFDBF] rounded-lg flex-col justify-center items-center gap-y-1">
            <h1 className="text-xl font-semibold">
              {historyData.data.history_data[0].total_question}
            </h1>
            <h2 className="text-xs">Soal</h2>
          </div>
        </div>
        <p className="text-xs">
          Waktu Selesai{" "}
          {(() => {
            const timeInSeconds = history.time_elapsed;
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds % 60;
            return `${minutes.toString().padStart(2, "0")}:${seconds
              .toString()
              .padStart(2, "0")}`;
          })()}
        </p>
      </div>
    </>
  );
};
