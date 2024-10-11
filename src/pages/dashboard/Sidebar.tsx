
const Sidebar = () => {
  return (
    <div className="relative w-2/6 h-[50vh] mt-6 mr-5 ">
      {/* Background divs */}
      <div className="absolute inset-0 z-0">
        <div className="h-2/3 bg-blue-500"></div>
        <div className="h-1/3 bg-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full bg-white/80 shadow-lg p-4">
        <div className="text-center">
          <h2 className="font-semibold text-lg">Bandi Irawan</h2>
          <p className="text-sm text-gray-500">10 Sertifikat</p>
        </div>
        <div className="mt-6">
          <ul>
            <li className="flex items-center justify-between p-2 bg-gray-100 rounded-md mb-2">
              <span>Ahmad Burhan</span>
              <span>Score: 600</span>
            </li>
            {/* Add more users */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
