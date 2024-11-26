import { Link, useParams } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import LoadingSpinner from "../../../components/reusable/LoadingSpinner";
import { useQuizData } from "../../../hooks/pelatihanku/useQuiz";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { BackLink } from "../../../components/reusable/BackLink";

export const Quiz = () => {
  const { subjectId, sessionId } = useParams<{
    subjectId: string;
    sessionId: string;
  }>();

  const { data, isLoading, error } = useQuizData(subjectId, sessionId);

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
      label: data?.data.detail.subject_name,
      path: `/pelatihanku/${data?.data.detail.subject_id}`,
    },
    {
      label: `Pertemuan ${data?.data.detail.session_no}`,
    },
  ];

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-4 bg-gray-100">
      <Breadcrumb items={breadcrumbItems} />
      <div className="bg-white flex flex-col mt-5 p-8 ">
        <h1 className="font-bold md:text-4xl text-2xl mb-5 md:mb-8 flex justify-center">
          Quiz Pertemuan {data?.data.detail.session_no}
        </h1>
        <div className="flex flex-wrap w-full justify-center gap-x-20 gap-y-8">
          {data?.data.quizzes.map((quiz) => (
            <Link
              key={quiz.id}
              to={`/detailQuiz/${subjectId}/${sessionId}/${quiz.id}`}
              className={`flex md:flex-row flex-col  p-4 bg-gray-100 rounded-lg shadow-md w-full md:w-3/5 mb-4`}
            >
              <div
                className={`flex flex-col gap-2 p-4 md:h-24  justify-center bg-gray-200 rounded-lg`}
              >
                <div className="flex gap-2">
                  <div className="flex gap-1 items-center md:h-12 h-10 md:w-32 w-28 p-2 bg-[#333d79] text-white text-sm rounded-lg">
                    <FaPlayCircle className="rounded-full text-xl md:text-4xl" />
                    {quiz.duration} Menit
                  </div>
                  <div className="flex gap-1 items-center md:h-12 h-10 md:w-32 w-28 p-2 bg-[#f2aa4c] text-white text-sm rounded-lg">
                    <div className="bg-white rounded-full p-1">
                      <IoDocumentText className="text-xl md:text-3xl text-[#f2aa4c]" />
                    </div>
                    {quiz.type}
                  </div>
                </div>
              </div>
              <div className="md:ml-5 ml-2 flex flex-col md:pt-0 pt-3 justify-center">
                <h3 className="text-base md:text-lg font-semibold">
                  {quiz.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  {data.data.detail.subject_name}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <BackLink to={`/pelatihanku/${data?.data.detail.subject_id}`} />
      </div>
    </div>
  );
};
