import { Link } from "react-router-dom";
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";
import { FaCircleInfo } from "react-icons/fa6";


export const Roleplay = () => {

  const breadcrumbItems = [
    {
      label: "Beranda",
      path: "/dashboard",
    },
    {
      label: "Roleplay & Assesment",
    },
  ];

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      {/* Info */}
      <div className="bg-white flex flex-col mt-5 px-8 h-28 justify-center rounded-lg">
        <h1 className="text-2xl font-semibold">Roleplay & Assesment</h1>
      </div>

      {/* Content */}
      <div className=" my-8 p-10 bg-white flex flex-col items-center justify-center">
        <div className="bg-blue-100 flex flex-col p-5 w-full justify-center rounded-lg">
          <h1 className=" text-blue-700 pb-1 flex items-center font-bold text-lg">
            Roleplay dan Assesment <FaCircleInfo className="ml-3 text-2xl" />
          </h1>
          <h1 className=" text-blue-700 font-medium pt-1 text-lg">
            Lihat detail tentang Simulasi dan Roleplay
          </h1>
        </div>
        <div className="flex flex-col w-full sm:flex-row justify-between gap-8 pt-5">
          {/* Roleplay Card */}
          <div className="w-1/2  rounded-lg p-4 shadow-md">
            <div className="flex items-center mb-8">
              <div className="bg-[#ECFDBF] rounded-full p-2 mr-5">
                <img
                  src="/roleplay/roleplay.png"
                  alt="Roleplay Icon"
                  className="w-24 h-20"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold pb-1">Roleplay</h3>
                <p className="text-lg text-gray-600 ">
                  Tes dengan rekan roleplay yang membantu anda memahami diri
                  sendiri lebih baik.
                </p>
              </div>
            </div>
            <Link
              to={"/listRoleplay"}
              className="bg-blue-500 text-white py-3 flex w-full justify-center rounded-md font-semibold hover:bg-blue-600"
            >
              Mulai Tes
            </Link>
          </div>

          {/* Assessment Card */}
          <div className="w-1/2  rounded-lg p-4 shadow-md">
            <div className="flex items-center mb-8">
              <div className="bg-[#ECFDBF] rounded-full p-2 mr-5">
                <img
                  src="/roleplay/asesment.png"
                  alt="Assessment Icon"
                  className="w-24 h-20"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold pb-1">Asesmen</h3>
                <p className="text-lg text-gray-600">
                  Tes dengan anggota tim yang membantu anda memahami diri
                  sendiri lebih baik.
                </p>
              </div>
            </div>
            <button className="bg-blue-500 text-white py-3 flex w-full justify-center rounded-md font-semibold hover:bg-blue-600">
              Mulai Tes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
