import { useParams } from "react-router-dom";

export const Modul = () => {
  const { subjectId, sessionId } = useParams<{
    subjectId: string;
    sessionId: string;
  }>();

  return (
    <div>
      <div className="bg-white w-full h-14 mt-96 flex items-center pl-5 rounded-xl">
        <img
          src="/dashboard/home.png"
          className="md:w-6 w-5 -mt-1"
          alt="home icon"
        />
        <h1 className="md:pl-5 pl-3 text-[#9CA3AF] md:text-base text-sm font-semibold">
          Beranda
        </h1>
      </div>
      <div>
        <h1>{subjectId}</h1>
        <h1>{sessionId}</h1>
      </div>
    </div>
  );
};
