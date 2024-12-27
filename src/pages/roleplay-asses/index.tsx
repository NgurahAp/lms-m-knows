import React from "react";
import { Link } from "react-router-dom";
import { useScoreResponse } from "../../services/ScoreService";
import { FaInfoCircle } from "react-icons/fa";
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";

export const RoleplayAsses: React.FC = () => {
  const {
    // data: nilaiResponse,
    isLoading: isNilaiLoading,
    isError: isNilaiError,
  } = useScoreResponse();

  // const [activeTab, setActiveTab] = useState<"nilai" | "sertifikat">("nilai");
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  if (isNilaiLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isNilaiError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error fetching nilai response.
      </div>
    );
  }

  const breadcrumbItems = [
    {
      label: "Beranda",
      path: "/dashboard",
    },
    {
      label: "Roleplay dan Assessmen",
    },
  ];

  return (
    <div className="w-screen flex flex-col md:pt-44 pt-24 md:px-36 md:pb-4 px-8 bg-gray-100">
      <Breadcrumb items={breadcrumbItems} />
      <div className="bg-white w-full h-14 flex items-center justify-between p-9 mt-5 rounded-xl mb-4">
        <h1 className=" md:text-lg text-sm font-semibold">Roleplay</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg w-full">
        {/* Tabs */}
        <div className="p-8">
          <div className="flex flex-wrap border-b border-white"></div>
          <div className="bg-blue-100 p-6 rounded-lg w-full mb-6">
            <div className="flex text-blue-800 font-semibold  mb-4">
              Roleplay dan Asesmen
              <FaInfoCircle className="text-lg text-blue-600 mt-1 ml-2" />
            </div>
            <div className="text-blue-600">
              Lihat detail tentang Simulasi dan Roleplay
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            {/* Roleplay Card */}
            <div className="md:flex-1 bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="/roleplay/roleplay.png"
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
              <div className="pt-2">
                <Link
                  to="/pilih-roleplay"
                  className="inline-block w-full mt-4 text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-md"
                >
                  Mulai Tes
                </Link>
              </div>
            </div>
            {/* Assessment Card */}
            <div className="md:flex-1 bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="/roleplay/asesment.png"
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
              <div className="pt-2">
                <Link
                  to="/pilih-ases"
                  className="inline-block w-full mt-4 text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-md"
                >
                  Mulai Tes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};