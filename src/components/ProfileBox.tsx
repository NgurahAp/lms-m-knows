

interface FeatureBoxProps {
  offset: string;
  onClose: () => void;
}

const ProfileBox: React.FC<FeatureBoxProps> = ({ offset, onClose }) => {
  return (
    <div className={`absolute top-20 w-96 rounded-lg shadow-lg ${offset}`}>
      <div className="w-full h-28 bg-blue-300 rounded-t-lg flex items-center justify-center">
        <h1 className="font-bold text-2xl">Fitur</h1>
      </div>
      <div className="w-full bg-white h-56 flex flex-col justify-center">
        
      </div>
      <button
        className="py-4 w-full bg-blue-300 rounded-b-lg"
        onClick={onClose}
      >
        Lihat Semua
      </button>
    </div>
  );
};

export default ProfileBox;
