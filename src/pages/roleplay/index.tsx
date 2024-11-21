import { Breadcrumb } from "../../components/reusable/BreadCrumbs";

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
        <h1 className="text-3xl font-semibold pb-3">Roleplay & Assesment</h1>
      </div>
      <div className="bg-blue-100 flex flex-col mt-5 px-8 h-24 justify-center rounded-lg">
        <h1 className=" text-blue-700 pb-1">
          Pilihlah keterangan nilai yang paling mewakili penilaian Anda terhadap
          instruktur.
        </h1>
        <h1 className=" text-blue-700">
          Keterangan : Sangat Setuju, Setuju, Tidak Setuju dan Sangat Tidak
          Setuju
        </h1>
      </div>
      {/* Content */}
      <div className=" my-8 py-16 px-8 bg-white flex flex-col items-center justify-center"></div>
    </div>
  );
};
