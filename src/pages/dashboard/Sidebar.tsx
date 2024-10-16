import { Articles } from "./components/Articles";
import { Leaderboard } from "./components/Leaderboard";

const Sidebar = () => {
  return (
    <div className="relative w-[30%] mt-6 mr-5">
      {/* Sidebar */}
      <div className="relative w-full rounded-lg overflow-hidden flex flex-col">
        {/* Background divs */}
        <div className="absolute inset-0 z-0 rounded-lg flex flex-col">
          <div className="flex-grow-0 flex-shrink-0 h-2/5 bg-[#3498DB] rounded-t-2xl"></div>
          <div className="flex-grow bg-white rounded-b-2xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-2 shadow-lg px-7 py-9 flex flex-col">
          <div>
            <h2 className="font-semibold text-3xl text-white pb-2">
              Hello, Bandi
            </h2>
            <p className="text-lg font-light text-white">
              Kamu mengambil 4 pelatihan
            </p>
          </div>
          <div className="mt-6 flex-grow">
            <ul className="grid grid-cols-2 gap-5">
              {[
                {
                  icon: "/dashboard/pelatihan.png",
                  value: "37",
                  label: "Pelatihan",
                },
                {
                  icon: "/dashboard/sertifikat.png",
                  value: "6",
                  label: "Sertifikat",
                },
                {
                  icon: "/dashboard/poin-avg.png",
                  value: "3,7",
                  label: "Poin rata-rata",
                },
                {
                  icon: "/dashboard/poin-total.png",
                  value: "600",
                  label: "Total Poin",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="p-5 bg-white shadow-md rounded-md flex flex-col justify-between"
                >
                  <img src={item.icon} className="w-9 pb-8" alt="" />
                  <div>
                    <h1 className="text-3xl font-bold pb-2">{item.value}</h1>
                    <h1 className="text-xl text-gray-500">{item.label}</h1>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Leaderboard />
      <Articles />
    </div>
  );
};

export default Sidebar;
