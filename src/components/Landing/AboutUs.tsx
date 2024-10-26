export const AboutUs = () => {
  return (
    <section className="bg-blue-700 text-white py-12 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center m-10">
          <h1 className="text-5xl font-bold pb-10">
            Tentang <span className="text-[#FAB317]">LMS M-Knows</span>
          </h1>
          <p className="text-lg font-light pb-10">
            LMS M-Knows adalah sebuah platform LMS (Learning Management System)
            yang dirancang khusus untuk memenuhi kebutuhan perusahaan dalam
            mengelola pembelajaran dan pengembangan karyawan. Platform ini
            menyediakan berbagai fitur yang dapat membantu perusahaan dalam
            menyusun, mengelola, dan menyampaikan materi pembelajaran secara
            efektif.
          </p>
          <p className="text-lg font-light pb-10">
            Salah satu fitur utama dari LMS M-Knows adalah kemampuannya untuk
            membuat kursus-kursus yang disesuaikan dengan kebutuhan perusahaan.
            Perusahaan dapat membuat kursus-kursus yang bertujuan untuk
            pengembangan dan pelatihan karyawan, atau pembelajaran tertentu
            untuk meningkatkan keterampilan dan pengetahuan karyawan.
          </p>
          <p className="text-lg font-light pb-10">
            Selain itu, LMS M-Knows juga dilengkapi dengan fitur pelacakan
            kemajuan belajar yang memungkinkan perusahaan untuk melihat sejauh
            mana karyawan menyelesaikan materi pembelajaran. Fitur ini
            memungkinkan perusahaan untuk mengidentifikasi karyawan yang mungkin
            memerlukan bantuan tambahan, serta memberikan laporan atas
            pencapaian mereka dalam pembelajaran. Platform ini memberikan solusi
            lengkap untuk mengelola pembelajaran dan pengembangan karyawan,
            sehingga membantu perusahaan tetap kompetitif di pasar yang terus
            berubah.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <img
            src="/landing/bootcamp/aboutUs.png"
            alt="Person holding a laptop"
            className=" h-auto w-[80vh] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
