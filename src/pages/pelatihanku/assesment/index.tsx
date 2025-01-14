import { useNavigate, useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { useAssesmentData } from "../../../hooks/pelatihanku/useAssesment";
import LoadingSpinner from "../../../components/reusable/LoadingSpinner";
import { BackLink } from "../../../components/reusable/BackLink";
import PageInfo from "../../../components/reusable/PageInfo";

export const Assesment = () => {
  const { subjectId, sessionId, subjectName } = useParams<{
    subjectId: string;
    sessionId: string;
    subjectName: string;
  }>();
  const navigate = useNavigate();

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
      label: subjectName,
      path: `/pelatihanku/${subjectId}`,
    },
    {
      label: "Penilaian Pengajar",
    },
  ];

  const { data, isLoading, error } = useAssesmentData(subjectId, sessionId);

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

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-36 pt-24 md:px-24 px-4 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      <PageInfo
        title="Penilaian Pengajar"
      />
      <div className="bg-blue-100 flex flex-col mt-5 p-4 md:p-8 md:text-base text-xs justify-center rounded-lg">
        <h1 className=" text-blue-700 pb-1">
          Pilihlah keterangan nilai yang paling mewakili penilaian Anda terhadap
          instruktur.
        </h1>
        <h1 className=" text-blue-700">
          Keterangan : Sangat Setuju, Setuju, Tidak Setuju dan Sangat Tidak
          Setuju
        </h1>
      </div>
      {/* Content */}
      <div className=" my-6 py-8 md:py-10 px-8 bg-white flex flex-col justify-center">
        <div className="flex flex-col items-center pb-3">
          <img
            src="/pelatihanku/empty-state.png"
            className="md:w-1/4 "
            alt=""
          />
          {data?.data.is_eligible ? (
            <button
              onClick={() =>
                navigate(
                  `/attemptAssesment/${subjectId}/${sessionId}/${subjectName}`,
                  {
                    state: { assesmentData: data?.data },
                  }
                )
              }
              className="bg-blue-500 md:text-base text-sm text-center text-white py-2 rounded-lg my-2 px-10"
            >
              Mulai
            </button>
          ) : (
            <button
              disabled
              className="border text-center md:text-base text-sm bg-gray-400 rounded-lg text-white py-2 my-2 px-5 cursor-not-allowed"
              title="Anda sudah mengisi refleksi"
            >
              Anda Sudah Mengisi Penilaian
            </button>
          )}
        </div>

        <BackLink to={`/pelatihanku/${subjectId}`} />
      </div>
    </div>
  );
};
