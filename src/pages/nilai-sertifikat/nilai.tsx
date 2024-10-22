import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nilai = () => {
  return (
    <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
      <Link to="/dashboard" className="flex items-center">
        <img
          src="/pelatihanku/home.png"
          className="md:w-6 w-5 -mt-1 "
          alt="Home"
        />
        <span className="md:pl-5 pl-3 text-blue-500 md:text-base text-sm font-semibold">
          Beranda
        </span>
      </Link>
      <FaChevronRight className="text-gray-300 mx-4" />
      <span className="text-[#9CA3AF] md:text-base text-sm font-semibold">
        Nilai dan Sertifikat
      </span>

      <div></div>
    </div>
  );
};
