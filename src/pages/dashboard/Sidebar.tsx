import { Articles } from "./components/Articles";
import { Leaderboard } from "./components/Leaderboard";

const Sidebar = () => {
  return (
    <div className="relative w-[30%] mt-6 mr-5">
      {/* Sidebar */}
      <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
        {/* Background divs */}
        <div className="absolute inset-0 z-0 rounded-lg">
          <div className="h-2/5 bg-[#3498DB] rounded-t-2xl"></div>
          <div className="h-3/5 bg-white rounded-b-2xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-2 h-full shadow-lg px-7 py-9">
          <div className="">
            <h2 className="font-semibold text-3xl text-white pb-2">
              Hello, Bandi
            </h2>
            <p className="text-lg font-light text-white">
              Kamu mengambil 4 pelatihan
            </p>
          </div>
          <div className="mt-6">
            <ul className="grid grid-cols-2 gap-5">
              <li className="p-5 h-48 bg-white shadow-md rounded-md mb-2 flex flex-col justify-between">
                <img src="/dashboard/pelatihan.png" className="w-9" alt="" />
                <div className="">
                  <h1 className="text-3xl font-bold pb-2">37</h1>
                  <h1 className="text-xl text-gray-500">Pelatihan</h1>
                </div>
              </li>
              <li className="p-5 h-48 bg-white shadow-md rounded-md mb-2 flex flex-col justify-between">
                <img src="/dashboard/sertifikat.png" className="w-9" alt="" />
                <div className="">
                  <h1 className="text-3xl font-bold pb-2">6</h1>
                  <h1 className="text-xl text-gray-500">Sertifikat</h1>
                </div>
              </li>
              <li className="p-5 h-48 bg-white shadow-md rounded-md mb-2 flex flex-col justify-between">
                <img src="/dashboard/poin-avg.png" className="w-9" alt="" />
                <div className="">
                  <h1 className="text-3xl font-bold pb-2">3,7</h1>
                  <h1 className="text-xl text-gray-500">Poin rata-rata</h1>
                </div>
              </li>
              <li className="p-5 h-48 bg-white shadow-md rounded-md mb-2 flex flex-col justify-between">
                <img src="/dashboard/poin-total.png" className="w-9" alt="" />
                <div className="">
                  <h1 className="text-3xl font-bold pb-2">600</h1>
                  <h1 className="text-xl text-gray-500">Total Poin</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Leaderboard />
      <Articles/>
    </div>
  );
};

export default Sidebar;
