import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" mx-auto my-4 bg-white rounded-lg shadow">
      <button
        onClick={toggleDropdown}
        className="w-full flex justify-between h-14 items-center bg-blue-500 text-white px-4 py-2 rounded-t-lg"
      >
        <span>Pertemuan 1</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {isOpen && (
        <div className="bg-gray-50">
          <ul>
            <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
              <img src="/pelatihanku/modul.png" className="mr-2" alt="" />
              Modul
            </li>
            <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
              <img src="/pelatihanku/quiz.png" className="mr-2" alt="" /> Quiz
            </li>
            <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
              <img src="/pelatihanku/tugas.png" className="mr-2" alt="" /> Tugas
            </li>
            <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
              <img src="/pelatihanku/diskusi.png" className="mr-2" alt="" />
              Diskusi
            </li>
            <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
              <img src="/pelatihanku/live.png" className="mr-2" alt="" /> Live
              Mentoring
            </li>
            <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
              <img src="/pelatihanku/eksplorasi.png" className="mr-2" alt="" />
              Refleksi Eksplorasi
            </li>
            <li className="flex h-14 items-center px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200 cursor-pointer">
              <img src="/pelatihanku/kualitas.png" className="mr-2" alt="" />
              Kualitas Pengajar & Materi Ajar
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
