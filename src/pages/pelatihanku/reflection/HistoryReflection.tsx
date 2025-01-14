import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { useReflectionData } from "../../../hooks/pelatihanku/useReflection";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { IoDocumentText } from "react-icons/io5";
import LoadingSpinner from "../../../components/reusable/LoadingSpinner";
import PageInfo from "../../../components/reusable/PageInfo";

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
    return <LoadingSpinner text="Loading..." />;
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
      label: "Refleksi Eksplorasi",
      path: `/reflection/${subjectId}/${sessionId}`,
    },
    {
      label: "Riwayat",
    },
  ];

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-36 pt-24 md:px-24 px-4 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      <PageInfo
        title="Riwayat Refleksi Eksplorasi"
      />
      {/* Content */}
      <div className="my-4 flex md:flex-row flex-col">
        <aside className="md:w-1/4 bg-white rounded-lg shadow-md p-4">
          <div className="mb-4 md:text-base text-sm">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full text-left  bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex justify-between items-center"
            >
              <span className="flex items-center gap-2">
                <IoDocumentText className="text-lg md:text-2xl" />
                Pertemuan {data?.data.session_no}
              </span>
              {isOpen ? (
                <FaChevronUp className="text-sm md:text-lg" />
              ) : (
                <FaChevronDown className="text-sm md:text-lg" />
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
        <main className="flex-1 md:ml-4 md:mt-0 mt-5 bg-white rounded-lg shadow-md p-6">
          <div className="text-gray-500 text-sm mb-4">{formattedDate}</div>
          {data?.data.reflection ? (
            <div className="flex items-start">
              <div className="w-10 mr-3">
                {data?.data.teacher.avatar ? (
                  <img
                    src={data.data.teacher.avatar}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full "
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-semibold">
                    {getInitials(data?.data.teacher.full_name)}
                  </div>
                )}
              </div>
              <div className="bg-gray-200 md:text-base text-sm p-4 rounded-lg">
                <h3 className="font-semibold">
                  {data?.data.teacher.full_name}
                </h3>
                <p className="mt-1">{data?.data.reflection}</p>
              </div>
            </div>
          ) : (
            <div className="text-gray-500 text-center">
              Anda belum mengisi refleksi eksplorasi.
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
