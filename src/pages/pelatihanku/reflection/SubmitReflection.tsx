import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSubmitReflection } from "../../../hooks/pelatihanku/useReflection";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { useState } from "react";
import toast from "react-hot-toast";
import { BackLink } from "../../../components/reusable/BackLink";
import PageInfo from "../../../components/reusable/PageInfo";

export const SubmitReflection = () => {
  const { subjectId, sessionId } = useParams<{
    subjectId: string;
    sessionId: string;
  }>();
  const [summary, setSummary] = useState("");

  const { mutate: submitReflection, isPending } = useSubmitReflection();
  const navigate = useNavigate();
  const location = useLocation();
  const reflectionData = location.state?.reflectionData;

  console.log(reflectionData);

  // Function to get initials from full name
  const getInitials = (fullName: string | undefined) => {
    if (!fullName) return "";
    return fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

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
      label: reflectionData?.data.subject_name,
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

  const handleSubmit = () => {
    const loadingToast = toast.loading("Sedang mengirim rangkuman...");
    submitReflection(
      {
        sessionId,
        message: summary,
      },
      {
        onSuccess: () => {
          toast.dismiss(loadingToast);
          toast.success("Refleksi berhasil dikirim!");
          navigate(`/reflection/${subjectId}/${sessionId}`);
        },
        onError: (error) => {
          toast.dismiss(loadingToast);
          toast.error("Terjadi kesalahan saat mengirim Refleksi");
          console.log(error);
        },
      }
    );
  };

  const isButtonDisabled = summary.length < 52 || isPending;

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-4 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      <PageInfo
        title="Refleksi Eksplorasi"
        subtitle={`Pertemuan ${reflectionData?.data.session_no}`}
      />
      {/* Content */}
      <div className="md:p-8 my-6 bg-white">
        <div className="md:border p-5 rounded-lg">
          <div className="flex items-center">
            {reflectionData?.data.teacher.avatar ? (
              <img
                src={reflectionData.data.teacher.avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
            ) : (
              <div className="w-10 h-10 rounded-full mr-3 bg-red-500 flex items-center justify-center text-white font-semibold">
                {getInitials(reflectionData?.data.teacher.full_name)}
              </div>
            )}
            <div>
              <p className="font-bold text-gray-800">
                {reflectionData?.data.teacher.full_name}
              </p>
              <p className="text-sm text-gray-600">Pengajar</p>
            </div>
          </div>
          <h3 className="md:text-lg text-base font-semibold pt-3 md:pt-5 pb-5 md:pb-8">
            Apa pembelajaran dan kesimpulan kamu dari pertemuan ini?
          </h3>
          <textarea
            id="summary"
            name="summary"
            placeholder="Masukkan jawaban anda..."
            className="w-full p-3 md:text-base text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={8}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            disabled={isPending}
          />
          {summary.length < 52 && (
            <span className="flex md:justify-end md:text-base text-sm text-red-500">
              Minimal {52 - summary.length} karakter lagi untuk dapat mengirim
            </span>
          )}
          <div className="flex justify-end md:text-base text-sm mt-4">
            <button
              onClick={handleSubmit}
              disabled={isButtonDisabled}
              className={`px-4 py-2 rounded-lg flex items-center gap-2
                ${
                  isButtonDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
            >
              {isPending ? <>Mengirim...</> : "Selesai"}
            </button>
          </div>
        </div>
        <BackLink to={`/reflection/${subjectId}/${sessionId}`} />
      </div>
    </div>
  );
};
