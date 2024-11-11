import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { useQuizData } from "../../../services/pelatihanku/QuizService";
import LoadingSpinner from "../../../components/reusable/LoadingSpinner";

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

  // console.log("SubjectId: ", data);

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <Link to="/dashboard" className="flex items-center">
          <img
            src="/pelatihanku/home.png"
            className="md:w-6 w-5 -mt-1"
            alt="Home"
          />
          <span className="md:pl-5 pl-3 text-blue-500 md:text-base text-sm font-semibold">
            Beranda
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to="/pelatihanku">
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            Pelatihan-ku
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to={`/pelatihanku/${data?.data.detail.subject_id}`}>
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            {data?.data.detail.subject_name}
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-gray-400 md:text-base text-sm font-semibold">
          Pertemuan {data?.data.detail.session_no}
        </span>
      </div>
      <div className="bg-white flex flex-col mt-5 p-8 ">
        <h1 className="font-bold text-4xl mb-10 flex justify-center">
          Quiz Pertemuan {data?.data.detail.session_no}
        </h1>
        <div className="flex flex-wrap w-full justify-center gap-x-20 gap-y-8">
          {data?.data.quizzes.map((quiz) => (
            <Link
              key={quiz.id}
              to={`/detailQuiz/${subjectId}/${sessionId}/${quiz.id}`}
              className={`flex p-4 bg-gray-100 rounded-lg shadow-md w-3/5 mb-4`}
            >
              <div
                className={`flex flex-col gap-2 p-4 h-24 justify-center bg-gray-200 rounded-lg`}
              >
                <div className="flex gap-2">
                  <div className="flex gap-1 items-center h-12 w-32 p-2 bg-[#333d79] text-white text-sm rounded-lg">
                    <FaPlayCircle className="rounded-full text-4xl" />
                    {quiz.duration} Menit
                  </div>
                  <div className="flex gap-1 items-center h-12 w-32 p-2 bg-[#f2aa4c] text-white text-sm rounded-lg">
                    <div className="bg-white rounded-full p-1">
                      <IoDocumentText className="text-3xl text-[#f2aa4c]" />
                    </div>
                    {quiz.type}
                  </div>
                </div>
              </div>
              <div className="ml-5 flex flex-col  justify-center">
                <h3 className="text-lg font-semibold">{quiz.title}</h3>
                <p className="text-sm text-gray-600">
                  {data.data.detail.subject_name}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          to={`/pelatihanku/${data?.data.detail.subject_id}`}
          className="flex items-center gap-2 p-5 underline justify-start text-blue-500"
        >
          <FaArrowLeft />
          Kembali
        </Link>
      </div>
    </div>
  );
};
