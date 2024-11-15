import { Link,  useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { FaArrowLeft } from "react-icons/fa6";

export const Discussion = () => {
  const { subjectId, sessionId } = useParams<{
    subjectId: string;
    sessionId: string;
  }>();

  // const { data, isLoading, error } = useReflectionData(sessionId);
  // const navigate = useNavigate();

  // if (isLoading) {
  //   return <LoadingSpinner text="Loading..." />;
  // }

  // if (error) {
  //   return (
  //     <div className="min-h-[85vh] w-screen flex items-center justify-center">
  //       Error loading data
  //     </div>
  //   );
  // }

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
      label: "data?.data.subject_name",
      path: `/pelatihanku/${subjectId}`,
    },
    {
      label: "Refleksi Eksplorasi",
    },
  ];

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      {/* Info */}
      <div className="p-8 my-8 bg-white">
        <div className="flex flex-col items-center justify-center py-10">
          <img src="/pelatihanku/empty-state.png" className="w-1/4" alt="" />
          <h1 className="text-lg">Belum ada diskusi di pertemuan ini</h1>
        </div>
        <Link
          to={`/pelatihanku/${subjectId}`}
          className="flex items-center gap-2 p-5 underline justify-start text-blue-500"
        >
          <FaArrowLeft />
          Kembali
        </Link>
      </div>
    </div>
  );
};
