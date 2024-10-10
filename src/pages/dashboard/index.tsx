export const Dashboard: React.FC = () => {
  return (
    <div className="w-3/4 bg-gray-100 p-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white shadow-lg p-4">
          <h2 className="text-lg font-semibold">Pengumuman</h2>
          <p className="text-gray-500">Pameran Budaya Jepang...</p>
        </div>
        <div className="bg-white shadow-lg p-4">
          <h2 className="text-lg font-semibold">Acara</h2>
          <p className="text-gray-500">Website Cyber Security...</p>
        </div>
      </div>

      <div className="mt-6 bg-white shadow-lg p-4">
        <h2 className="text-lg font-semibold">Terakhir Pengujian</h2>
        <div className="flex justify-between items-center">
          <p>Pengenalan Budaya Jepang</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Lanjutkan
          </button>
        </div>
      </div>

      <div className="mt-6 bg-white shadow-lg p-4">
        <h2 className="text-lg font-semibold">Kalender Saya</h2>
        {/* Calendar content */}
      </div>
    </div>
  );
};
