import React from "react";

export const RoleplayAsses: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-blue-50 p-6 rounded-lg shadow-md w-full max-w-3xl">
        <div className="text-blue-800 font-semibold mb-4">
          Roleplay dan Asesmen
        </div>
        <div className="text-blue-600 text-sm mb-6">
          Lihat detail tentang Simulasi dan Roleplay
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          {/* Roleplay Card */}
          <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src="path/to/roleplay-icon.png"
                alt="Roleplay Icon"
                className="w-10 h-10 mr-3"
              />
              <div>
                <h3 className="font-semibold">Roleplay</h3>
                <p className="text-gray-600 text-sm">
                  Tes dengan rekan roleplay yang membantu anda memahami diri
                  sendiri lebih baik.
                </p>
              </div>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full mt-4">
              Mulai Tes
            </button>
          </div>
          {/* Assessment Card */}
          <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src="path/to/assessment-icon.png"
                alt="Assessment Icon"
                className="w-10 h-10 mr-3"
              />
              <div>
                <h3 className="font-semibold">Asesmen</h3>
                <p className="text-gray-600 text-sm">
                  Tes dengan anggota tim yang membantu anda memahami diri
                  sendiri lebih baik.
                </p>
              </div>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full mt-4">
              Mulai Tes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
