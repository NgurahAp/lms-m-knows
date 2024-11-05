import { SubjectProgressProps } from "../../../types/dashboard";

export const SubjectProgress: React.FC<SubjectProgressProps> = ({
  subjectProgressData,
}) => {
  // Check if there's no data or empty subjects array
  if (!subjectProgressData?.dataSubjects?.length) {
    return (
      <div className="mt-6 bg-white shadow-lg p-8 rounded-xl">
        <h2 className="text-xl font-semibold md:pb-3">Terakhir Pengerjaan</h2>
        <div className="flex flex-col items-center justify-center py-8">
          <p className="text-gray-500 text-lg">Subject Progress Kosong</p>
          <p className="text-gray-400 text-sm mt-2">
            Belum ada progress pembelajaran yang tersedia
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 bg-white shadow-lg p-8 rounded-xl">
      <h2 className="text-xl font-semibold md:pb-3">Terakhir Pengerjaan</h2>
      <div className="md:flex justify-between items-center pb-5">
        <p className="text-lg">
          Semester {subjectProgressData.dataSubjects[0].subject_semester}
        </p>
        <a href="" className="text-blue-500 font-medium md:text-lg">
          Lihat Semua
        </a>
      </div>

      {/* Cards */}
      {subjectProgressData.dataSubjects.slice(0, 3).map((subject) => (
        <div
          key={subject.id}
          className="bg-white rounded-lg shadow-md md:flex items-center justify-between mb-8"
        >
          <div className="md:w-48 w-full">
            <img
              src={subject.thumbnail}
              alt={`${subject.name} Thumbnail`}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Konten Kursus */}
          <div className="md:w-2/4 w-full px-5 py-3 md:py-0">
            <h2 className="font-semibold md:text-xl mb-1">{subject.name}</h2>
            <p className="text-gray-500 text mb-3">{subject.teacher_name}</p>

            <p className="text-gray-500 text-end md:text-base text-sm">
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
          <div className="md:w-1/4 flex md:justify-end justify-center pb-5 md:pb-0">
            <button
              className={`${
                subject.current_session / subject.session_count === 1
                  ? "bg-gray-200"
                  : "bg-blue-500 text-white"
              } px-4 py-2 mr-5 rounded-lg md:text-base text-sm`}
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
