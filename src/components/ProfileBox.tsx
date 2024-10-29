import { useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

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
        to="/dashboard"
        onClick={() => {
          onClose();
          handleLogout();
        }}
        className="flex p-4 items-center"
      >
        <MdHome className="text-2xl text-blue-500" />
        <div className="flex pl-4 text-lg font-semibold items-center">
          <h1 className="">Beranda</h1>
        </div>
      </Link>
      <Link
        to="/"
        onClick={() => {
          onClose();
          handleLogout();
        }}
        className="flex p-4 items-center"
      >
        <CgProfile className="text-2xl" />
        <div className="flex pl-4 text-lg font-semibold items-center">
          <h1 className="">profile</h1>
        </div>
      </Link>
      <a
        href="/"
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
      </a>
    </div>
  );
};

export default ProfileBox;
