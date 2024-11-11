import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { useReflectionData } from "../../../hooks/pelatihanku/useReflection";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { IoDocumentText } from "react-icons/io5";

export const HistoryReflection = () => {
  const { subjectId, sessionId } = useParams<{
    subjectId: string;
    sessionId: string;
  }>();

  const [isOpen, setIsOpen] = useState(false);
  const [formattedDate, setFormattedDate] = useState<string | null>(null);
  const { data, isLoading, error } = useReflectionData(sessionId);

  useEffect(() => {
    if (data?.data.reflection_at) {
      const date = new Date(data.data.reflection_at);
      const day = date.getDate();
      const monthNames = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      setFormattedDate(
        `${day} ${month} ${year} - ${hours}:${minutes}:${seconds}`
      );
    }
  }, [data]);

  const getInitials = (fullName: string | undefined) => {
    if (!fullName) return "";
    return fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  if (isLoading) {
    return (
      <div className="min-h-[85vh] w-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="text-gray-600">Memuat data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[85vh] w-screen flex items-center justify-center">
        Error loading data
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
      label: data?.data.subject_name || "",
      path: `/pelatihanku/${subjectId}`,
    },
    {
      label: "Refleksi Pembelajaran",
      path: `/reflection/${subjectId}/${sessionId}`,
    },
    {
      label: "Refleksi",
    },
  ];

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      {/* Info */}
      <div className="bg-white flex flex-col mt-5 px-8 h-36 justify-center rounded-lg">
        <h1 className="text-3xl font-semibold pb-3">
          Riwayat Refleksi Ekplorasi
        </h1>
      </div>
      {/* Content */}
      <div className="my-8 flex ">
        <aside className="w-1/4 bg-white rounded-lg shadow-md p-4">
          <div className="mb-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full text-left bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex justify-between items-center"
            >
              <span className="flex items-center gap-2">
                <IoDocumentText className="text-2xl" />
                Pertemuan {data?.data.session_no}
              </span>
              {isOpen ? (
                <FaChevronUp className="w-4 h-4" />
              ) : (
                <FaChevronDown className="w-4 h-4" />
              )}
            </button>
            {isOpen && (
              <div className="ml-4 mt-2 transition-all duration-200 ease-in-out">
                <p className="bg-[#EBF5FB] p-2 font-medium rounded-lg">
                  Refleksi Eksplorasi
                </p>
              </div>
            )}
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 ml-4 bg-white rounded-lg shadow-md p-6">
          <div className="text-gray-500 text-sm mb-4">{formattedDate}</div>
          <div className="flex items-start">
            <div className="w-10 mr-3">
              {data?.data.teacher.avatar ? (
                <img
                  src={data.data.teacher.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full "
                />
              ) : (
                <div className="w-10 h-10 rounded-full  bg-red-500 flex items-center justify-center text-white font-semibold">
                  {getInitials(data?.data.teacher.full_name)}
                </div>
              )}
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">{data?.data.teacher.full_name}</h3>
              <p className=" mt-1">{data?.data.reflection}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
