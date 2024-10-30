import { useParams } from "react-router-dom";
import { FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
import { useSubjectData } from "../../services/MyStudyService";
import { Session, SessionProgress } from "../../types/pelatihanku";

type PelatihankuDetailHeaderProps = object;

export const PelatihankuDetailHeader: React.FC<
  PelatihankuDetailHeaderProps
> = () => {
  return <div>{/* Header content */}</div>;
};

export const PelatihankuDetail: React.FC = () => {
  const { pelatihankuId } = useParams<{ pelatihankuId: string }>();
  const { data, isLoading, error } = useSubjectData(pelatihankuId || "");
  const [openSessions, setOpenSessions] = useState<Record<string, boolean>>({});

  const toggleDropdown = (sessionId: string) => {
    setOpenSessions((prev) => ({
      ...prev,
      [sessionId]: !prev[sessionId],
    }));
  };

  const getStatusIcon = (
    type: SessionProgress["type"],
    progress: SessionProgress[]
  ): JSX.Element | null => {
    const itemProgress = progress.find((p) => p.type === type);
    if (itemProgress?.status === "FINISHED") {
      return <FaCheckCircle className="text-green-500 ml-2" />;
    }
    if (itemProgress?.status === "LOCKED") {
      return <CiLock className="text-gray-500 ml-2" />;
    }
    return null;
  };

  const isItemLocked = (
    type: SessionProgress["type"],
    progress: SessionProgress[]
  ): boolean => {
    const itemProgress = progress.find((p) => p.type === type);
    return itemProgress?.status === "LOCKED";
  };

  const handleItemClick = (
    type: SessionProgress["type"],
    progress: SessionProgress[],
    onClick: () => void
  ) => {
    if (!isItemLocked(type, progress)) {
      onClick();
    }
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

  const renderSessionContent = (session: Session) => (
    <div className="bg-gray-50">
      <ul>
        <li
          onClick={() =>
            handleItemClick("MODULE", session.progress, () => {
              // Add your navigation logic here for module
              console.log("Navigate to module");
            })
          }
          className={`flex h-14 items-center px-4 py-2 border-b-2 border-gray-200 
            ${
              isItemLocked("MODULE", session.progress)
                ? "bg-gray-100 cursor-not-allowed"
                : "hover:bg-gray-100 cursor-pointer"
            }`}
        >
          <img src="/pelatihanku/modul.png" className="mr-2" alt="" />
          <span className="flex-1">Modul</span>
          {getStatusIcon("MODULE", session.progress)}
        </li>
        <li
          onClick={() =>
            handleItemClick("QUIZ", session.progress, () => {
              // Add your navigation logic here for quiz
              console.log("Navigate to quiz");
            })
          }
          className={`flex h-14 items-center px-4 py-2 border-b-2 border-gray-200 
            ${
              isItemLocked("QUIZ", session.progress)
                ? "bg-gray-100 cursor-not-allowed"
                : "hover:bg-gray-100 cursor-pointer"
            }`}
        >
          <img src="/pelatihanku/quiz.png" className="mr-2" alt="" />
          <span className="flex-1">Quiz</span>
          {getStatusIcon("QUIZ", session.progress)}
        </li>
        <li
          onClick={() =>
            handleItemClick("ASSIGNMENT", session.progress, () => {
              // Add your navigation logic here for assignment
              console.log("Navigate to assignment");
            })
          }
          className={`flex h-14 items-center px-4 py-2 border-b-2 border-gray-200 
            ${
              isItemLocked("ASSIGNMENT", session.progress)
                ? "bg-gray-100 cursor-not-allowed"
                : "hover:bg-gray-100 cursor-pointer"
            }`}
        >
          <img src="/pelatihanku/tugas.png" className="mr-2" alt="" />
          <span className="flex-1">Tugas</span>
          {getStatusIcon("ASSIGNMENT", session.progress)}
        </li>
        <li
          onClick={() =>
            handleItemClick("REFLECTION", session.progress, () => {
              // Add your navigation logic here for reflection
              console.log("Navigate to reflection");
            })
          }
          className={`flex h-14 items-center px-4 py-2 border-b-2 border-gray-200 
            ${
              isItemLocked("REFLECTION", session.progress)
                ? "bg-gray-100 cursor-not-allowed"
                : "hover:bg-gray-100 cursor-pointer"
            }`}
        >
          <img src="/pelatihanku/eksplorasi.png" className="mr-2" alt="" />
          <span className="flex-1">Refleksi Eksplorasi</span>
          {getStatusIcon("REFLECTION", session.progress)}
        </li>
        <li
          onClick={() =>
            handleItemClick("ASSESSMENT", session.progress, () => {
              // Add your navigation logic here for assessment
              console.log("Navigate to assessment");
            })
          }
          className={`flex h-14 items-center px-4 py-2 border-b-2 border-gray-200 
            ${
              isItemLocked("ASSESSMENT", session.progress)
                ? "bg-gray-100 cursor-not-allowed"
                : "hover:bg-gray-100 cursor-pointer"
            }`}
        >
          <img src="/pelatihanku/kualitas.png" className="mr-2" alt="" />
          <span className="flex-1">Kualitas Pengajar & Materi Ajar</span>
          {getStatusIcon("ASSESSMENT", session.progress)}
        </li>
        <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
          <img src="/pelatihanku/diskusi.png" className="mr-2" alt="" />
          <span className="flex-1">Diskusi</span>
        </li>
      </ul>
    </div>
  );

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
            <div className="mx-auto my-4 bg-white rounded-lg shadow">
              {session.is_locked ? (
                // Locked session
                <div className="w-full flex justify-between h-14 items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                  <span>
                    Pertemuan {index + 1}: {session.title}
                  </span>
                  <CiLock className="text-xl" />
                </div>
              ) : (
                // Unlocked session
                <>
                  <button
                    onClick={() => toggleDropdown(session.id)}
                    className="w-full flex justify-between h-14 items-center bg-blue-500 text-white px-4 py-2 rounded-t-lg"
                  >
                    <span>
                      Pertemuan {index + 1}: {session.title}
                    </span>
                    {openSessions[session.id] ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>

                  {openSessions[session.id] && renderSessionContent(session)}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
