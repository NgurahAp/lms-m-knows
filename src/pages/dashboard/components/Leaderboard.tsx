export const Leaderboard = () => {
  return (
    <div className="relative z-2 mt-6 p-6 w-full h-auto bg-white shadow-md rounded-2xl">
      {/* User Teratas */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <img src="/dashboard/trophy.png" alt="" />
          <div>
            <h3 className="text-2xl font-semibold pb-2">Bandi Irawan</h3>
            <p className="text-gray-500 text-lg">600 poin</p>
          </div>
        </div>
        <button className="text-blue-500 border-[1px] px-3 py-2 rounded-lg border-blue-500 flex items-center">
          Filter
          <img src="/dashboard/filter.png" className="pl-2" alt="" />
        </button>
      </div>

      {/* Daftar User */}
      <ul className="space-y-4">
        {/* User Ranking */}
        <li className="flex justify-between h-16">
          <div className="flex items-center space-x-5">
            <img src="/dashboard/1.png" className="w-8" alt="" />
            <img src="/dashboard/profile.png" alt="" />
            <div>
              <h4 className="text-lg font-bold pb-1">Ahmad Barudin</h4>
              <p className="text-lg">7000 poin</p>
            </div>
          </div>
        </li>
        <hr className="border-t-1 border-gray-300" />

        <li className="flex justify-between h-16">
          <div className="flex items-center space-x-5">
            <img src="/dashboard/2.png" className="w-8" alt="" />
            <img src="/dashboard/profile.png" alt="" />
            <div>
              <h4 className="text-lg font-bold pb-1">Kylyn Lubin</h4>
              <p className="text-lg">6000 poin</p>
            </div>
          </div>
        </li>
        <hr className="border-t-1 border-gray-300" />

        <li className="flex justify-between h-16">
          <div className="flex items-center space-x-5">
            <img src="/dashboard/3.png" className="w-8" alt="" />
            <img src="/dashboard/profile.png" alt="" />
            <div>
              <h4 className="text-lg font-bold pb-1">Lindsey Culhane</h4>
              <p className="text-lg">5000 poin</p>
            </div>
          </div>
        </li>

        <li className="flex justify-between h-16">
          <div className="flex items-center space-x-5">
            <h1 className="font-bold text-2xl px-2">4</h1>
            <img src="/dashboard/profile.png" alt="" />
            <div>
              <h4 className="text-lg font-bold pb-1">Lindsey Culhane</h4>
              <p className="text-lg">5000 poin</p>
            </div>
          </div>
        </li>

        <hr className="border-t-1 border-gray-300" />
      </ul>

      {/* Tombol Lihat Semua */}
      <div className="mt-6">
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-lg">
          Lihat Semua
        </button>
      </div>
    </div>
  );
};
