import { Link, useNavigate, useParams } from "react-router-dom";
import { FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
import { useSubjectData } from "../../services/MyStudyService";
import { Session, SessionProgress } from "../../types/pelatihanku/pelatihanku";
import { FaCircleXmark } from "react-icons/fa6";
import LoadingSpinner from "../../components/reusable/LoadingSpinner";
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";

export const PelatihankuDetail: React.FC = () => {
  const { pelatihankuId } = useParams<{ pelatihankuId: string }>();
  const { data, isLoading, error } = useSubjectData(pelatihankuId || "");
  const [openSessions, setOpenSessions] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

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
    if (itemProgress?.status === "FAILED") {
      return <FaCircleXmark className="text-red-500 ml-2" />;
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
    return <LoadingSpinner text="Loading..." />;
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        Error fetching dashboard data or banner
      </div>
    );
  }

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
      label: data?.subject.name,
    },
  ];

  const renderSessionContent = (session: Session) => (
    <div className="bg-gray-50">
      <ul>
        <li
          onClick={() =>
            handleItemClick("MODULE", session.progress, () => {
              navigate(`/module/${pelatihankuId}/${session.id}`);
            })
          }
          className={`flex h-14 items-center px-4 py-2 border-b-2 border-gray-200 
            ${
              isItemLocked("MODULE", session.progress)
                ? "bg-gray-100 cursor-not-allowed"
                : "hover:bg-gray-100 cursor-pointer"
            }`}
        >
          <img src="/pelatihanku/modul.png" className="mr-4" alt="" />
          <span className="flex-1 md:text-sm text-xs">Modul</span>
          {getStatusIcon("MODULE", session.progress)}
        </li>
        <li
          onClick={() =>
            handleItemClick("MODULE", session.progress, () => {
              navigate(`/quiz/${pelatihankuId}/${session.id}`);
            })
          }
          className={`flex h-14 items-center px-4 py-2 border-b-2 border-gray-200 
            ${
              isItemLocked("QUIZ", session.progress)
                ? "bg-gray-100 cursor-not-allowed"
                : "hover:bg-gray-100 cursor-pointer"
            }`}
        >
          <img src="/pelatihanku/quiz.png" className="mr-4" alt="" />
          <span className="flex-1 md:text-sm text-xs">Quiz</span>
          {getStatusIcon("QUIZ", session.progress)}
        </li>
        <li
          onClick={() =>
            handleItemClick("ASSIGNMENT", session.progress, () => {
              navigate(`/assignment/${pelatihankuId}/${session.id}`);
            })
          }
          className={`flex h-14 items-center px-4 py-2 border-b-2 border-gray-200 
            ${
              isItemLocked("ASSIGNMENT", session.progress)
                ? "bg-gray-100 cursor-not-allowed"
                : "hover:bg-gray-100 cursor-pointer"
            }`}
        >
          <img src="/pelatihanku/tugas.png" className="mr-4" alt="" />
          <span className="flex-1 md:text-sm text-xs">Tugas</span>
          {getStatusIcon("ASSIGNMENT", session.progress)}
        </li>
        <li
          onClick={() =>
            handleItemClick("REFLECTION", session.progress, () => {
              navigate(`/reflection/${pelatihankuId}/${session.id}`);
            })
          }
          className={`flex h-14 items-center px-4 py-2 border-b-2 border-gray-200 
            ${
              isItemLocked("REFLECTION", session.progress)
                ? "bg-gray-100 cursor-not-allowed"
                : "hover:bg-gray-100 cursor-pointer"
            }`}
        >
          <img src="/pelatihanku/eksplorasi.png" className="mr-4" alt="" />
          <span className="flex-1 md:text-sm text-xs">
            Refleksi Eksplorasi
          </span>
          {getStatusIcon("REFLECTION", session.progress)}
        </li>
        <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
          <img src="/pelatihanku/diskusi.png" className="mr-4" alt="" />
          <Link
            to={`/discussion/${pelatihankuId}/${session.id}`}
            className="flex-1 md:text-sm text-xs"
          >
            Diskusi
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="bg-gray-50 md:p-24  px-4 md:pt-36 pt-24">
      <Breadcrumb items={breadcrumbItems} />

      <div className="bg-white p-6 md:mt-5 mt-4 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold pb-5">Pendahuluan</h1>
        <div className="flex flex-col md:text-base text-xs lg:flex-row ">
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <div className="relative">
              <img src={data?.subject.thumbnail} alt="" />
            </div>
          </div>

          <div className="lg:w-2/3 lg:pl-14">
            <h2 className="md:text-xl text-base font-semibold mb-5">
              {data?.subject.name}
            </h2>
            <h3 className="md:text-base text-xs font-semibold mb-2">
              Deskripsi
            </h3>
            <p className="md:text-base text-xs text-gray-500 mb-2 text-justify">
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
                <div className="w-full flex justify-between  text-sm text-left  items-center bg-gray-200 text-gray-700 px-4 py-5 rounded-lg">
                  <span className="pr-5">
                    Pertemuan {index + 1}: {session.title}
                  </span>
                  <CiLock className="text-xl" />
                </div>
              ) : (
                // Unlocked session
                <>
                  <button
                    onClick={() => toggleDropdown(session.id)}
                    className="w-full flex justify-between  text-sm text-left  items-center bg-blue-500 text-white px-4 py-5 rounded-t-lg"
                  >
                    <span className="pr-5">
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
