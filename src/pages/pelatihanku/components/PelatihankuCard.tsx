import { Training } from "./pelatihanData";

export const TrainingCard: React.FC<{ training: Training }> = ({ training }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md">
      <h3 className="font-semibold text-lg">{training.title}</h3>
      <p className="text-gray-500">{training.instructor}</p>
      <div className="flex space-x-4 mt-2">
        <div className="bg-blue-100 px-2 py-1 rounded text-blue-700">
          {training.credits} SKS
        </div>
        <div className="bg-green-100 px-2 py-1 rounded text-green-700">
          {training.videos} Video
        </div>
        <div className="bg-purple-100 px-2 py-1 rounded text-purple-700">
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
  );
};