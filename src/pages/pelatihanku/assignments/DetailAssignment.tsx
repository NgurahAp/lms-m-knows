import { Link, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useDetailAssignmentData } from "../../../services/pelatihanku/AssignmentService";

export const DetailAssignment = () => {
  const { subjectId, sessionId, assignmentId } = useParams<{
    subjectId: string;
    sessionId: string;
    assignmentId: string;
  }>();

  const { data, isLoading, error } = useDetailAssignmentData(subjectId, sessionId, assignmentId);
  if (isLoading) {
    return (
      <div className="min-h-[85vh] w-screen flex items-center justify-center">
        Loading...
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

  console.log(data);

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
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
        <Link to={`/pelatihanku/${subjectId}`}>
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            quizData?.data.subject.name
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to={`/quiz/${subjectId}/${sessionId}`}>
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            Pertemuan quizData?.data.session.session_no
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-gray-400 md:text-base text-sm font-semibold">
          Quiz
        </span>
      </div>
      {/* Quiz Info */}
      <div className="bg-white flex flex-col mt-5 px-8 h-36 justify-center rounded-lg">
        <h1 className="text-3xl font-semibold pb-3">
          quizData?.data.quiz.titl
        </h1>
        <p className="text-lg">Pertemuan quizData?.data.session.session_n</p>
      </div>
      {/* Quiz Content */}
      <div className="bg-white flex mt-5 w-full px-8 h-full justify-center rounded-lg"></div>
    </div>
  );
};
