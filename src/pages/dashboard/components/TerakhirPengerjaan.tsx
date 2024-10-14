export const TerakhirPengerjaan = () => {
  return (
    <div className="mt-6 bg-white shadow-lg p-8 rounded-xl">
      <h2 className="text-xl font-semibold pb-3">Terakhir Pengerjaan</h2>
      <div className="flex justify-between items-center pb-5">
        <p className="text-lg">Semester 1</p>
        <a href="" className="text-blue-500 font-medium text-lg">
          Lihat Semua
        </a>
      </div>
      <div className="bg-white rounded-lg shadow-md  flex items-center justify-between mb-8">
        <div className="w-48">
          <img
            src="/dashboard/budaya-jepang.png"
            alt="Course Thumbnail"
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Konten Kursus */}
        <div className="w-2/4 px-5">
          <h2 className="font-semibold text-xl mb-1">
            Perkenalan Budaya Jepang
          </h2>
          <p className="text-gray-500 text mb-3">Neneng Rohaye S.Kom</p>

          {/* Informasi */}
          <div className="flex items-center  text-gray-500 mb-3">
            <div className="flex items-center mr-4">
              <span className="mr-1">📘</span>
              <span>3 SKS</span>
            </div>
            <div className="flex items-center mr-4">
              <span className="mr-1">🎥</span>
              <span>14 Video</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">👥</span>
              <span>80</span>
            </div>
          </div>
          <p className=" text-gray-500 text-end">7/14 Pertemuan</p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
            <div className="bg-[#9AC827] h-2 w-[50%] rounded-full"></div>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="w-1/4 flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Lanjut Belajar
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md  flex items-center justify-between mb-8">
        <div className="w-48">
          <img
            src="/dashboard/wireframing.png"
            alt="Course Thumbnail"
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Konten Kursus */}
        <div className="w-2/4 px-5">
          <h2 className="font-semibold text-xl mb-1">Wireframing</h2>
          <p className="text-gray-500 text mb-3">Budi Setiawan S.S</p>

          {/* Informasi */}
          <div className="flex items-center  text-gray-500 mb-3">
            <div className="flex items-center mr-4">
              <span className="mr-1">📘</span>
              <span>3 SKS</span>
            </div>
            <div className="flex items-center mr-4">
              <span className="mr-1">🎥</span>
              <span>14 Video</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">👥</span>
              <span>80</span>
            </div>
          </div>
          <p className=" text-gray-500 text-end">14/14 Pertemuan</p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
            <div className="bg-[#9AC827] w-full h-2 rounded-full"></div>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="w-1/4 flex justify-end">
          <button className="bg-gray-200  px-4 py-2 rounded-lg">Selesai</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md  flex items-center justify-between mb-8">
        <div className="w-48">
          <img
            src="/dashboard/desain.png"
            alt="Course Thumbnail"
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Konten Kursus */}
        <div className="w-2/4 px-5">
          <h2 className="font-semibold text-xl mb-1">Dasar Desain Grafis</h2>
          <p className="text-gray-500 text mb-3">Herdiawan Susmanto S.T</p>

          {/* Informasi */}
          <div className="flex items-center  text-gray-500 mb-3">
            <div className="flex items-center mr-4">
              <span className="mr-1">📘</span>
              <span>3 SKS</span>
            </div>
            <div className="flex items-center mr-4">
              <span className="mr-1">🎥</span>
              <span>14 Video</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">👥</span>
              <span>80</span>
            </div>
          </div>
          <p className=" text-gray-500 text-end">14/14 Pertemuan</p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
            <div className="bg-[#9AC827] w-full h-2 rounded-full"></div>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="w-1/4 flex justify-end">
          <button className="bg-gray-200  px-4 py-2 rounded-lg">Selesai</button>
        </div>
      </div>
    </div>
  );
};
