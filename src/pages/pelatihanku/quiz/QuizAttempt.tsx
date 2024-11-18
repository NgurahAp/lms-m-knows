import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ConfirmAttemptQuizDialog } from "./components/ConfirmAttempDialog";
import { useQuestionData } from "../../../services/pelatihanku/QuizQuestionService";
import { ErrorConsume } from "../../../components/APIRespone";
import LoadingSpinner from "../../../components/reusable/LoadingSpinner";
import { QuizSubmissionPayload } from "../../../services/pelatihanku/QuizService";
import { useQuizSubmission } from "../../../hooks/pelatihanku/useQuiz";
import CountdownTimer from "./components/CountdownTimer";
import toast from "react-hot-toast";
import FeatureBox from "../../../components/FeatureBox";
import ProfileBox from "../../../components/ProfileBox";
import { CgProfile } from "react-icons/cg";
import { UserData } from "../../../types/auth";

export const QuizAttempt = () => {
  const { subjectId, sessionId, quizId } = useParams<{
    subjectId: string;
    sessionId: string;
    quizId: string;
  }>();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { mutate: submitQuiz } = useQuizSubmission(quizId);
  const navigate = useNavigate();
  
  // For Navbar
   const location = useLocation();
   const [isOpen, setIsOpen] = useState(false);
   const [isMobile, setIsMobile] = useState(false);
   const [profileData, setProfileData] = useState<UserData | null>(null);
   const [showFeatures, setShowFeatures] = useState(false);
   const [showProfileMenu, setShowProfileMenu] = useState(false);

   const toggleFeatures = () => {
     setShowFeatures((prev) => !prev);
   };

   const toggleProfileMenu = () => {
     setShowProfileMenu((prev) => !prev);
   };

   const handleCloseFeatures = () => {
     setShowFeatures(false);
   };

   const handleCloseProfileMenu = () => {
     setShowProfileMenu(false);
   };

   const navItems = [
     { name: "Dashboard", path: "/dashboard" },
     { name: "Pelatihan-ku", path: "/pelatihanku" },
     { name: "Penugasan", path: "/penugasan" },
     { name: "Nilai & Sertifikat", path: "/nilai-sertifikat" },
   ];

   useEffect(() => {
     const handleResize = () => {
       setIsMobile(window.innerWidth < 768);
     };

     window.addEventListener("resize", handleResize);
     handleResize();

     return () => window.removeEventListener("resize", handleResize);
   }, []);

   useEffect(() => {
     const getUserProfile = () => {
       try {
         const storedUser = localStorage.getItem("user_profile");

         if (storedUser) {
           const userData: UserData = JSON.parse(storedUser);
           setProfileData(userData);
         } else {
           console.log("Data profil tidak ditemukan di localStorage");
         }
       } catch (error) {
         console.error("Error parsing user profile:", error);
       }
     };

     getUserProfile();
   }, []);

  //  End Navbar

  const {
    data: questionData,
    isLoading: isQuestionLoading,
    error: questionError,
  } = useQuestionData(quizId);

  if (isQuestionLoading) {
    return <LoadingSpinner text="Loading..." />;
  }

  if (questionError) {
    return <ErrorConsume />;
  }

  if (!questionData?.data) {
    return <div>No quiz data available</div>;
  }

  const questions = questionData.data.questions_answers;
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const navigateToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answerId,
    }));
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleQuizSubmit = () => {
    const quizSubmission: QuizSubmissionPayload = {
      questions_answers: Object.entries(selectedAnswers).map(
        ([questionIndex, answerId]) => ({
          question: questions[parseInt(questionIndex)].id,
          answer: answerId,
        })
      ),
    };

    const loadingToast = toast.loading("Sedang mengirim rangkuman...");

    submitQuiz(quizSubmission, {
      onSuccess: () => {
        toast.dismiss(loadingToast);
        toast.success("Rangkuman berhasil dikirim!");
        navigate(`/detailQuiz/${subjectId}/${sessionId}/${quizId}`);
      },
      onError: (error) => {
        toast.dismiss(loadingToast);
        toast.error("Terjadi kesalahan saat mengirim rangkuman");
        console.log(error);
      },
    });

    setDialogOpen(false);
  };

  const handleTimesUp = () => {
    navigate(`/detailQuiz/${subjectId}/${sessionId}/${quizId}`);
  };



  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
        <div className="flex justify-between px-4 md:px-36 h-20 items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/navbar/logo.png"
              className="w-32 md:w-48 bg-white bg-opacity-20 rounded"
              alt="Logo"
            />
          </div>

          <div className="flex items-center space-x-4 md:space-x-8">
            {!isMobile && (
              <>
                <button
                  onClick={toggleFeatures}
                  className="bg-sky-700 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium flex items-center"
                >
                  Semua Fitur
                  <img
                    src="/landing/semua-fitur.png"
                    className="pl-2   w-7 h-auto"
                    alt=""
                  />
                </button>
                {showFeatures && (
                  <FeatureBox
                    offset="right-[14rem]"
                    onClose={handleCloseFeatures}
                  />
                )}
                <button onClick={toggleProfileMenu}>
                  {profileData?.avatar ? (
                    <img
                      src={profileData.avatar}
                      className="w-12 h-12 rounded-full object-cover"
                      alt="Profile"
                    />
                  ) : (
                    <CgProfile className="text-5xl text-gray-600" />
                  )}
                </button>
                {showProfileMenu && (
                  <ProfileBox
                    offset="right-[9rem]"
                    onClose={handleCloseProfileMenu}
                  />
                )}
              </>
            )}
            {isMobile && (
              <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
                ☰
              </button>
            )}
          </div>
        </div>

        {/* Navbar items for desktop */}
        {!isMobile && (
          <div className="bg-sky-700">
            <div className="flex h-20 items-center space-x-8 md:space-x-14 px-4 md:px-36">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-semibold text-sm md:text-lg ${
                    location.pathname.startsWith(item.path)
                      ? "text-green-300"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Navbar for mobile */}
        {isMobile && isOpen && (
          <div className="bg-sky-700">
            <div className="p-4 border-b border-sky-600">
              <img
                src={profileData?.avatar}
                className="w-12 h-12 rounded-full mx-auto"
                alt="Profile"
              />
              <p className="text-white text-center mt-2">
                {profileData?.full_name}
              </p>
            </div>
            <div className="flex flex-col ">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path} // Navigasi menggunakan Link
                  className={`font-semibold text-lg p-4 ${
                    location.pathname === item.path
                      ? "text-green-300"
                      : "text-white"
                  }`}
                  onClick={() => setIsOpen(false)} // Tutup navbar setelah klik
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
        {/* Quiz Info */}
        <div className="bg-white flex flex-col mt-5 px-8 h-36 justify-center rounded-lg">
          <h1 className="text-3xl font-semibold pb-3">
            {questionData.data.title}
          </h1>
          <p className="text-lg">Tipe: {questionData.data.type}</p>
          <p className="text-lg">
            Durasi: {Math.floor(questionData.data.duration / 60)} menit
          </p>
        </div>

        {/* Question List with Answer Status */}
        <div className="bg-white flex flex-col mt-5 px-8 h-28 justify-center rounded-lg">
          <h1 className="font-bold mb-3">Daftar Soal</h1>
          <div className="flex space-x-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateToQuestion(index)}
                className={`w-8 h-8 flex items-center justify-center border rounded ${
                  index === currentQuestionIndex
                    ? "bg-blue-500 text-white"
                    : selectedAnswers[index]
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Quiz Question */}
        <div className="bg-white p-6 mt-5 rounded-lg shadow-lg">
          <h1 className="text-end text-red-500 font-bold text-sm pb-3">
            Sisa waktu:{" "}
            <CountdownTimer
              initialDuration={questionData.data.duration}
              onTimeUp={handleTimesUp}
            />
          </h1>
          <h2 className="text-lg font-semibold mb-4">
            {currentQuestion.question}
          </h2>
          <p className="pt-2 pb-7 text-sm text-gray-500">*Pilih satu</p>
          <div className="space-y-7">
            {currentQuestion.answers.map((answer) => (
              <label key={answer.id} className="block p-5 border rounded">
                <input
                  type="radio"
                  name="answer"
                  value={answer.id}
                  checked={selectedAnswers[currentQuestionIndex] === answer.id}
                  onChange={() => handleAnswerSelect(answer.id)}
                  className="mr-2"
                />
                {answer.answer}
              </label>
            ))}
          </div>
          <div className="flex justify-end gap-5 pt-10">
            <button
              onClick={handlePrevious}
              className={`px-6 py-2 rounded-lg ${
                isFirstQuestion
                  ? "hidden"
                  : "bg-white border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              Sebelumnya
            </button>
            {isLastQuestion ? (
              <button
                onClick={() => setDialogOpen(true)}
                className="bg-green-500 px-6 py-2 rounded-lg text-white hover:bg-green-600"
              >
                Selesai
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600"
              >
                Selanjutnya
              </button>
            )}
          </div>
        </div>

        {isDialogOpen && (
          <ConfirmAttemptQuizDialog
            onClose={() => setDialogOpen(false)}
            onSubmit={handleQuizSubmit}
          />
        )}
      </div>
    </>
  );
};

export default QuizAttempt;
