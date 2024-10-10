const Sidebar = () => {
  return (
    <div className="w-1/4 bg-white shadow-lg p-4">
      <div className="text-center">
        <img
          src="path-to-avatar"
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
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
  );
};

export default Sidebar;
