import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRoleplayData } from "../../services/RoleplayService"; // Import the new service
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";

export const PilihDrill: React.FC = () => {
  const {
    data: roleplayData,
    isLoading: isRoleplayLoading,
    isError: isRoleplayError,
  } = useRoleplayData(); // Use the custom hook to fetch roleplay data

  const [activeTab, setActiveTab] = useState<"daftar" | "terjadwal" | "penilaian" | "selesai">("daftar");

  if (isRoleplayLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isRoleplayError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error fetching roleplay data.
      </div>
    );
  }

   const breadcrumbItems = [
     {
       label: "Beranda",
       path: "/dashboard",
     },
     {
       label: "Drill",
       path: "/drill-simulasi",
     },
     {
       label: "Pilih Drill",
     },
   ];

  const roleplays = roleplayData?.roleplays ?? [];

  return (
    <div className="w-screen flex flex-col md:pt-44 pt-24 md:pb-4 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="bg-white w-full h-6 flex items-center justify-between p-9 mt-5 rounded-xl mb-4">
        <h1 className="md:text-lg text-sm font-semibold">Drill</h1>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg w-full md:pb-10">
        {/* Tabs */}
        <div className="p-6">
          <div className="flex flex-wrap border-b border-white">
            {["daftar", "terjadwal", "penilaian", "selesai"].map((tab) => (
              <button
                key={tab}
                className={`py-4 px-10 md:text-xl text-lg font-semibold border-1 whitespace-nowrap ${
                  activeTab === tab
                    ? "text-blue-500 border-b-4 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab as typeof activeTab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-6">
          {activeTab === "daftar" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roleplays.map((roleplay) => (
                <div
                  key={roleplay.id}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <img
                    src={roleplay.subject_thumbnail || "/default-image.jpg"}
                    alt="Roleplay Image"
                    className="w-full h-40 object-cover rounded-lg"
                    onError={(e) =>
                      (e.currentTarget.src = "/default-image.jpg")
                    }
                  />
                  <h3 className="text-lg font-semibold mt-2">
                    {roleplay.topic}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">
                    {roleplay.subject_name}
                  </p>
                  <div className="flex justify-center mt-4">
                    <button className="px-6 py-2 mr-6 text-sm text-gray-700 border border-gray-300 rounded-lg">
                      Lihat Detail
                    </button>
                    <Link
                      to="/daftar-drill"
                      className="px-10 py-2 text-sm text-white bg-blue-500 rounded-lg"
                    >
                      Daftar
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "terjadwal" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roleplays.map((roleplay) => (
                <div
                  key={roleplay.id}
                  className="bg-white border rounded-md p-4 shadow-md"
                >
                  <h3 className="text-gray-800 font-medium">
                    {roleplay.topic}
                  </h3>
                  <p className="text-sm text-gray-500">{roleplay.start_at}</p>
                  <a
                    href="#"
                    className="block mt-4 text-blue-500 hover:underline text-sm"
                  >
                    Lihat Rekan Drill
                  </a>
                </div>
              ))}
            </div>
          )}

          {activeTab === "penilaian" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roleplays.map((roleplay) => (
                <div
                  key={roleplay.id}
                  className="bg-white border rounded-md p-4 shadow-md"
                >
                  <h3 className="text-gray-800 font-medium">
                    {roleplay.topic}
                  </h3>
                  <p className="text-sm text-gray-500">{roleplay.start_at}</p>
                  <a
                    href="#"
                    className="block mt-4 text-blue-500 hover:underline text-sm"
                  >
                    Lihat Rekan Drill
                  </a>
                </div>
              ))}
            </div>
          )}

          {activeTab === "selesai" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roleplays.map((roleplay) => (
                <div
                  key={roleplay.id}
                  className="bg-white border rounded-md p-4 shadow-md"
                >
                  <h3 className="text-gray-800 font-medium">
                    {roleplay.topic}
                  </h3>
                  <p className="text-sm text-gray-500">{roleplay.start_at}</p>
                  <a
                    href="#"
                    className="block mt-4 text-blue-500 hover:underline text-sm"
                  >
                    Lihat Rekan Drill
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
