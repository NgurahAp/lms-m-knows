import { useParams } from "react-router-dom";
import {
  FaCheckCircle,
  FaChevronDown,
  FaChevronRight,
  FaChevronUp,
} from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
import { useSubjectData } from "../../services/MyStudyService";

// Interfaces




interface ProgressModule {
  id: string;
  title: string;
  description: string;
  submitted: boolean;
  is_all_video_seen: boolean;
  total_videos: number;
  total_documents: number;
  total_articles: number;
  total_journals: number;
}

interface ProgressQuiz {
  id: string;
  title: string;
  duration: number;
  status: "FINISHED" | "PENDING" | "LOCKED";
}

interface ProgressAssignment {
  id: string;
  title: string;
  description: string;
  duration_days: number;
  deadline?: string;
  status: "FINISHED" | "PENDING" | "LOCKED";
}

interface SessionProgress {
  type: "MODULE" | "QUIZ" | "ASSIGNMENT" | "REFLECTION" | "ASSESSMENT";
  status: "FINISHED" | "PENDING" | "LOCKED" | "ONGOING";
  modules?: ProgressModule[];
  quizzes?: ProgressQuiz[];
  assignments?: ProgressAssignment[];
}





type PelatihankuDetailHeaderProps = object

// Components
export const PelatihankuDetailHeader: React.FC<
  PelatihankuDetailHeaderProps
> = () => {
  return <div>{/* Header content */}</div>;
};

export const PelatihankuDetail: React.FC = () => {
  const { pelatihankuId } = useParams<{ pelatihankuId: string }>();
  const { data, isLoading, error } = useSubjectData(pelatihankuId || "");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getStatusIcon = (
    type: SessionProgress["type"],
    progress: SessionProgress[]
  ): JSX.Element | null => {
    const itemProgress = progress.find((p) => p.type === type);
    if (itemProgress?.status === "FINISHED") {
      return <FaCheckCircle className="text-green-500 ml-2" />;
    }
    return null;
  };

  if (!pelatihankuId) {
    return (
      <div className="h-screen flex items-center justify-center">
        ID Pelatihan tidak ditemukan
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        Error fetching dashboard data or banner
      </div>
    );
  }

  return (
    <div className="bg-gray-50 md:p-48 px-8 py-28">
      <PelatihankuDetailHeader />
      {/* Main Content */}
      <div className="bg-white p-6 mt-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold pb-5">Pendahuluan</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <div className="relative">
              <img src={data?.subject.thumbnail} alt="" />
            </div>
          </div>

          <div className="lg:w-2/3 lg:pl-14">
            <h2 className="text-xl font-semibold mb-4">{data?.subject.name}</h2>
            <h3 className="text-base font-semibold mb-4">Deskripsi</h3>
            <p className="text-base text-gray-500 mb-6 text-justify">
              {data?.subject.description}
            </p>
          </div>
        </div>
      </div>

      {/* Pertemuan Section */}
      <div className="mt-6">
        {data?.sessions.map((session, index) => (
          <div key={session.id} className="mb-4">
            {index === 0 ? (
              <div className="mx-auto my-4 bg-white rounded-lg shadow">
                <button
                  onClick={toggleDropdown}
                  className="w-full flex justify-between h-14 items-center bg-blue-500 text-white px-4 py-2 rounded-t-lg"
                >
                  <span>
                    Pertemuan {index + 1}: {session.title}
                  </span>
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {isOpen && (
                  <div className="bg-gray-50">
                    <ul>
                      <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
                        <img
                          src="/pelatihanku/modul.png"
                          className="mr-2"
                          alt=""
                        />
                        <span className="flex-1">Modul</span>
                        {getStatusIcon("MODULE", session.progress)}
                      </li>
                      <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
                        <img
                          src="/pelatihanku/quiz.png"
                          className="mr-2"
                          alt=""
                        />
                        <span className="flex-1">Quiz</span>
                        {getStatusIcon("QUIZ", session.progress)}
                      </li>
                      <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
                        <img
                          src="/pelatihanku/tugas.png"
                          className="mr-2"
                          alt=""
                        />
                        <span className="flex-1">Tugas</span>
                        {getStatusIcon("ASSIGNMENT", session.progress)}
                      </li>
                      <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
                        <img
                          src="/pelatihanku/diskusi.png"
                          className="mr-2"
                          alt=""
                        />
                        <span className="flex-1">Diskusi</span>
                      </li>
                      <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
                        <img
                          src="/pelatihanku/live.png"
                          className="mr-2"
                          alt=""
                        />
                        <span className="flex-1">Live Mentoring</span>
                      </li>
                      <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
                        <img
                          src="/pelatihanku/eksplorasi.png"
                          className="mr-2"
                          alt=""
                        />
                        <span className="flex-1">Refleksi Eksplorasi</span>
                        {getStatusIcon("REFLECTION", session.progress)}
                      </li>
                      <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
                        <img
                          src="/pelatihanku/kualitas.png"
                          className="mr-2"
                          alt=""
                        />
                        <span className="flex-1">
                          Kualitas Pengajar & Materi Ajar
                        </span>
                        {getStatusIcon("ASSESSMENT", session.progress)}
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div
                className={`bg-white w-full h-14 flex items-center justify-between px-5 rounded-xl ${
                  session.is_locked
                    ? "cursor-not-allowed opacity-75"
                    : "cursor-pointer"
                }`}
              >
                <h1 className="text-gray-700 md:text-base text-sm font-semibold">
                  Pertemuan {index + 1}: {session.title}
                </h1>
                {session.is_locked ? (
                  <CiLock className="text-xl" />
                ) : (
                  <FaChevronRight className="text-gray-400" />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
