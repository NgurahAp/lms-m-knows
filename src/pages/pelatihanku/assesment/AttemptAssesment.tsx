import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { useState } from "react";
import { AssesmentDialog } from "./AssesmentDialog";
import {
  AssesmentQuestion,
  AssesmentRequest,
} from "../../../types/pelatihanku/assesment";
import { useAssesmentSubmission } from "../../../hooks/pelatihanku/useAssesment";
import toast from "react-hot-toast";

const getRatingLabel = (value: number): string => {
  const labels: { [key: number]: string } = {
    1: "Sangat Tidak Baik",
    2: "Tidak Baik",
    3: "Biasa Saja",
    4: "Baik",
    5: "Sangat Baik",
  };
  return labels[value] || String(value);
};

export const AttemptAssesment = () => {
  const { subjectId, sessionId, subjectName } = useParams<{
    subjectId: string;
    sessionId: string;
    subjectName: string;
  }>();
  const location = useLocation();
  const assesmentData = location.state?.assesmentData;
  const [isDialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { mutate: submitAssesment, isPending } = useAssesmentSubmission(
    subjectId,
    sessionId
  );
  // Get questions from assesmentData
  const questions: AssesmentQuestion[] = assesmentData?.questions || [];

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

  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<{ [key: string]: string }>({});

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (questionId: string, value: string) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleQuestionClick = (index: number) => {
    setCurrentStep(index);
  };

  const handleSubmit = () => {
    const assesmentSubmission: AssesmentRequest = {
      answers: questions.map((question) => ({
        question_id: question.id,
        answer: responses[question.id] || "",
      })),
    };
    const loadingToast = toast.loading("Sedang mengirim rangkuman...");

    submitAssesment(assesmentSubmission, {
      onSuccess: () => {
        toast.dismiss(loadingToast);
        toast.success("Refleksi berhasil dikirim!");
        navigate(`/pelatihanku/${subjectId}`);
      },
      onError: (error) => {
        toast.dismiss(loadingToast);
        toast.error("Terjadi kesalahan saat mengirim Refleksi");
        console.log(error);
      },
    });

    setDialogOpen(false);
  };

  const isLastQuestion = currentStep === questions.length - 1;
  const currentQuestion = questions[currentStep];

  // Check if all questions are answered
  const areAllQuestionsAnswered = questions.every(
    (question) => responses[question.id]
  );

  const getInitials = (fullName: string | undefined) => {
    if (!fullName) return "";
    return fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Teacher Info */}

      {/* Content */}
      <div className="my-8 py-16 px-8 bg-white flex flex-col items-center justify-center">
        {/* Question Preview Buttons */}
        <div className="w-full mb-8 flex flex-wrap justify-center">
          {questions.map((_, index) => (
            <div className="flex items-center" key={index}>
              <button
                onClick={() => handleQuestionClick(index)}
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 
                  ${
                    currentStep === index
                      ? "bg-blue-100 text-blue-500 border-blue-500"
                      : responses[questions[index].id]
                      ? "bg-blue-500 border-blue-500 text-white"
                      : "border-gray-300 text-gray-500"
                  }`}
              >
                {index + 1}
              </button>
              {index < questions.length - 1 && (
                <hr
                  className={`w-12 border-t-2 ${
                    responses[questions[index].id]
                      ? "border-blue-500"
                      : "border-gray-300"
                  } `}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mb-8 bg-[#E1F0FA] p-4 w-full rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            {assesmentData.teacher.avatar ? (
              <img
                src={assesmentData.teacher.avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full "
              />
            ) : (
              <div className="w-10 h-10 rounded-full  bg-red-500 flex items-center justify-center text-white font-semibold">
                {getInitials(assesmentData.teacher.full_name)}
              </div>
            )}
            <div>
              <p className="font-medium">{assesmentData.teacher.full_name}</p>
              <p className="text-sm text-gray-500">Pengajar </p>
            </div>
          </div>
        </div>

        {currentQuestion && (
          <div className="mb-6 w-full">
            <p className="font-semibold ">{currentQuestion.question}</p>
            <p className="mb-6 text-sm text-[#6B7280]">*Pilih Satu</p>
            {currentQuestion.type === "OPTION" ? (
              <div className="flex flex-col gap-4">
                {currentQuestion.answers.map((answer) => (
                  <label
                    key={answer}
                    className="flex items-center space-x-2 p-5 hover:bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <input
                      type="radio"
                      name={currentQuestion.id}
                      value={answer}
                      onChange={(e) =>
                        handleChange(currentQuestion.id, e.target.value)
                      }
                      checked={responses[currentQuestion.id] === String(answer)}
                      className="form-radio text-blue-600"
                    />
                    <span>{getRatingLabel(answer)}</span>
                  </label>
                ))}
              </div>
            ) : currentQuestion.type === "SCORE" ? (
              <div className="flex flex-col gap-2">
                {currentQuestion.answers.map((answer) => (
                  <label
                    key={answer}
                    className="flex items-center space-x-2 p-3 hover:bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <input
                      type="radio"
                      name={currentQuestion.id}
                      value={answer}
                      onChange={(e) =>
                        handleChange(currentQuestion.id, e.target.value)
                      }
                      checked={responses[currentQuestion.id] === String(answer)}
                      className="form-radio text-blue-600"
                    />
                    <span>{answer}</span>
                  </label>
                ))}
              </div>
            ) : (
              <textarea
                rows={4}
                className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tuliskan jawaban Anda di sini..."
                onChange={(e) =>
                  handleChange(currentQuestion.id, e.target.value)
                }
                value={responses[currentQuestion.id] || ""}
              ></textarea>
            )}
          </div>
        )}

        <div className="flex justify-end gap-5 w-full">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`px-4 py-2 border-blue-500 border text-blue-500 rounded focus:outline-none ${
              currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Sebelumnya
          </button>
          {isLastQuestion ? (
            <button
              onClick={() => setDialogOpen(true)}
              disabled={!areAllQuestionsAnswered || isPending}
              className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none ${
                !areAllQuestionsAnswered || isPending
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              {isPending ? "Submitting..." : "Submit"}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              Selanjutnya
            </button>
          )}
        </div>
      </div>
      {isDialogOpen && (
        <AssesmentDialog
          onClose={() => setDialogOpen(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
