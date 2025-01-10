import { DashboardData } from "../../../types/dashboard";

interface LeaderboardContentProps {
  dashboardData: DashboardData;
}
export const Leaderboard: React.FC<LeaderboardContentProps> = ({ dashboardData }) => {
  // console.log(dashboardData);
  return (
    <div className="relative z-2 mt-6 p-6 w-full h-auto bg-white shadow-md rounded-2xl">
      {/* User Teratas */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <img src="/dashboard/trophy.png" className="w-14 md:w-16" alt="" />
          <div>
            <h3 className="md:text-xl text-xl font-semibold md:pb-1">
              {dashboardData.profile.full_name}
            </h3>
            <p className="text-gray-500  text-base">
              {dashboardData.profile.poin} poin
            </p>
          </div>
        </div>
        <button className="text-blue-500 border-[1px] md:px-3 px-2 md:text-xs text-sm py-2 rounded-lg border-blue-500 flex items-center">
          Filter
          <img src="/dashboard/filter.png" className="pl-2" alt="" />
        </button>
      </div>

      {/* Daftar User */}
      <ul className="space-y-4">
        {/* User Ranking */}
        <hr className="border-t-1 border-gray-300" />
        <li className="flex justify-between h-16">
          <div className="flex items-center space-x-5">
            <img src="/dashboard/1.png" className="w-6" alt="" />
            <img src="/dashboard/profile.png" className="w-10 md:w-10" alt="" />
            <div>
              <h4 className=" text-base font-bold md:pb-1">Lorem Ipsum</h4>
              <p className=" text-base">- poin</p>
            </div>
          </div>
        </li>
        <hr className="border-t-1 border-gray-300" />
        <li className="flex justify-between h-16">
          <div className="flex items-center space-x-5">
            <img src="/dashboard/2.png" className="w-6" alt="" />
            <img src="/dashboard/profile.png" className="w-10 md:w-10" alt="" />
            <div>
              <h4 className=" text-base font-bold md:pb-1">Lorem Ipsum</h4>
              <p className=" text-base">- poin</p>
            </div>
          </div>
        </li>
        <hr className="border-t-1 border-gray-300" />
        <li className="flex justify-between h-16">
          <div className="flex items-center space-x-5">
            <img src="/dashboard/3.png" className="w-6" alt="" />
            <img src="/dashboard/profile.png" className="w-10 md:w-10" alt="" />
            <div>
              <h4 className=" text-base font-bold md:pb-1">Lorem Ipsum</h4>
              <p className=" text-base">- poin</p>
            </div>
          </div>
        </li>
        <hr className="border-t-1 border-gray-300" />
        <li className="flex justify-between h-16">
          <div className="flex items-center space-x-5">
            <h1 className="font-bold text-2xl pr-2">4</h1>
            <img src="/dashboard/profile.png" className="w-10 md:w-10" alt="" />
            <div>
              <h4 className=" text-base font-bold md:pb-1">Lorem Ipsum</h4>
              <p className=" text-base">- poin</p>
            </div>
          </div>
        </li>
        <hr className="border-t-1 border-gray-300" />
      </ul>

      {/* Tombol Lihat Semua */}
      <div className="mt-6">
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg md:text-lg text-base">
          Lihat Semua
        </button>
      </div>
    </div>
  );
};
