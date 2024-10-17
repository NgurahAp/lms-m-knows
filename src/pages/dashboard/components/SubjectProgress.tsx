import { SubjectProgressProps } from "../../../types/dashboard";

export const SubjectProgress: React.FC<SubjectProgressProps> = ({
  subjectProgressData,
}) => {
  return (
    <div className="mt-6 bg-white shadow-lg p-8 rounded-xl">
      <h2 className="text-xl font-semibold pb-3">Terakhir Pengerjaan</h2>
      <div className="flex justify-between items-center pb-5">
        <p className="text-lg">Semester 1</p>
        <a href="" className="text-blue-500 font-medium text-lg">
          Lihat Semua
        </a>
      </div>

      {/* Cards */}
      {subjectProgressData.dataSubjects.slice(0, 3).map((subject) => (
        <div
          key={subject.id}
          className="bg-white rounded-lg shadow-md flex items-center justify-between mb-8"
        >
          <div className="w-48">
            <img
              src={subject.thumbnail}
              alt={`${subject.name} Thumbnail`}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Konten Kursus */}
          <div className="w-2/4 px-5">
            <h2 className="font-semibold text-xl mb-1">{subject.name}</h2>
            <p className="text-gray-500 text mb-3">{subject.teacher_name}</p>

            <p className="text-gray-500 text-end">
              {subject.current_session}/{subject.session_count} Pertemuan
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div
                className="bg-[#9AC827] h-2 rounded-full"
                style={{ width: `${subject.progress_percentage}%` }}
              ></div>
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="w-1/4 flex justify-end">
            <button
              className={`${
                subject.current_session / subject.session_count === 1
                  ? "bg-gray-200"
                  : "bg-blue-500 text-white"
              } px-4 py-2 mr-5 rounded-lg`}
            >
              {subject.current_session / subject.session_count === 1
                ? "Selesai"
                : "Lanjut Belajar"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
