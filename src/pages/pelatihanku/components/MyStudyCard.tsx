import { Link } from "react-router-dom";
import { MyStudyData } from "../../../types/pelatihanku/pelatihanku";

export const MyStudyCard: React.FC<{ training: MyStudyData }> = ({
  training,
}) => {
  return (
    <Link to={`/pelatihanku/${training.id}`} className="block">
      <div className="border rounded-xl p-4 mb-4 shadow-md hover:shadow-lg transition-shadow">
        <h3 className="font-semibold md:text-2xl text-base">
          {training.name.length > 40
            ? `${training.name.slice(0, 40)}...`
            : training.name}
        </h3>
        <p className="text-gray-500 md:py-2 py-1 md:text-base text-xs">
          {training.teacher_name}
        </p>
        <div className="flex  flex-col md:flex-row  items-center md:space-x-5 md:space-y-0 space-y-2 mt-2">
          <div className="bg-blue-100 px-2 md:w-1/3 w-3/4 h-10 md:text-sm text-xs md:h-14 rounded-lg py-1 flex items-center justify-center text-blue-700">
            <img
              src="/pelatihanku/sks.png"
              alt="Icon SKS"
              className="w-4 h-4 mr-2"
            />
            {training.credit} SKS
          </div>
          <div className="bg-green-100 px-2 md:w-1/3 w-3/4 h-10 md:text-sm text-xs md:h-14 rounded-lg py-1 flex items-center justify-center text-green-700">
            <img
              src="/pelatihanku/video.png"
              alt="Icon Video"
              className="w-4 h-4 mr-2"
            />
            {training.session_count} Video
          </div>
          <div className="bg-purple-100 px-2 md:w-1/3 w-3/4 h-10 md:text-sm text-xs md:h-14 rounded-lg py-1 flex items-center justify-center text-purple-700">
            <img
              src="/pelatihanku/member.png"
              alt="Icon Peserta"
              className="w-4 h-4 mr-2"
            />
            {training.student_count} Peserta
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Tingkat Penyelesaian</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: `${training.progress_percentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {training.progress_percentage}%
          </p>
        </div>
      </div>
    </Link>
  );
};
