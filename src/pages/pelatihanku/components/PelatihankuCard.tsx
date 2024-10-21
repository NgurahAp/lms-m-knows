import { Link } from "react-router-dom";
import { Training } from "./pelatihanData";

export const TrainingCard: React.FC<{ training: Training }> = ({
  training,
}) => {
  return (
    <Link to={`/pelatihanku/${training.id}`} className="block">
      <div className="border rounded-xl p-4 mb-4 shadow-md hover:shadow-lg transition-shadow">
        <h3 className="font-semibold text-2xl">{training.title}</h3>
        <p className="text-gray-500 py-2">{training.instructor}</p>
        <div className="flex space-x-5 mt-2">
          <div className="bg-blue-100 px-2 w-1/3 h-14 rounded-lg py-1 flex items-center justify-center text-blue-700">
            <img
              src="/pelatihanku/sks.png"
              alt="Icon SKS"
              className="w-6 h-6 mr-2"
            />
            {training.credits} SKS
          </div>
          <div className="bg-green-100 px-2 w-1/3 h-14 rounded-lg py-1 flex items-center justify-center text-green-700">
            <img
              src="/pelatihanku/video.png"
              alt="Icon Video"
              className="w-6 h-6 mr-2"
            />
            {training.videos} Video
          </div>
          <div className="bg-purple-100 px-2 w-1/3 h-14 rounded-lg py-1 flex items-center justify-center text-purple-700">
            <img
              src="/pelatihanku/member.png"
              alt="Icon Peserta"
              className="w-6 h-6 mr-2"
            />
            {training.participants} Peserta
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Tingkat Penyelesaian</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: `${training.completion}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">{training.completion}%</p>
        </div>
      </div>
    </Link>
  );
};
