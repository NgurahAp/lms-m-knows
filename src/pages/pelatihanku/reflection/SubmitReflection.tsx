import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useSubmitReflection } from "../../../hooks/pelatihanku/useReflection";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import toast from "react-hot-toast";

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
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      {/* Info */}
      <div className="bg-white flex flex-col mt-5 px-8 h-36 justify-center rounded-lg">
        <h1 className="text-3xl font-semibold pb-3">Refleksi Ekplorasi</h1>
        <p className="text-lg">Pertemuan {reflectionData?.data.session_no}</p>
      </div>
      {/* Content */}
      <div className="p-8 my-8 bg-white">
        <div className="border p-5 rounded-lg">
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
          <h3 className="text-lg font-semibold pt-5 pb-8">
            Apa pembelajaran dan kesimpulan kamu dari pertemuan ini?
          </h3>
          <textarea
            id="summary"
            name="summary"
            placeholder="Masukkan jawaban anda..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={8}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            disabled={isPending}
          />
          {summary.length < 52 && (
            <span className="flex justify-end text-red-500">
              Minimal {52 - summary.length} karakter lagi untuk dapat mengirim
            </span>
          )}
          <div className="flex justify-end mt-4">
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
        <Link
          to={`/reflection/${subjectId}/${sessionId}`}
          className="flex items-center gap-2 p-5 underline justify-start text-blue-500"
        >
          <FaArrowLeft />
          Kembali
        </Link>
      </div>
    </div>
  );
};
