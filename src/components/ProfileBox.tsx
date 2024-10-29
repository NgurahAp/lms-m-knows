import { useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface FeatureBoxProps {
  offset: string;
  onClose: () => void;
}

interface ProfileData {
  avatar: string;
  full_name: string;
}

const ProfileBox: React.FC<FeatureBoxProps> = ({ offset, onClose }) => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const { handleLogout } = useAuth();

  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setProfileData(JSON.parse(storedProfile));
    }
  }, []);

  return (
    <div
      className={`absolute top-20 w-96 rounded-lg bg-[#f5f5f5] shadow-lg ${offset}`}
    >
      <div className="flex p-4">
        <img src={profileData?.avatar} className="w-10 rounded-full" alt="" />
        <div className="flex pl-3 text-lg font-semibold items-center">
          <h1>{profileData?.full_name}</h1>
        </div>
      </div>
      <div className="w-full border-t border-gray-300 mb-2" />
      <Link
        to="/"
        onClick={() => {
          onClose();
          handleLogout();
        }}
        className="flex p-4 items-center"
      >
        <CiLogout className="text-2xl text-red-500" />
        <div className="flex pl-4 text-lg font-semibold items-center">
          <h1 className="text-red-500">Logout</h1>
        </div>
      </Link>
    </div>
  );
};

export default ProfileBox;
