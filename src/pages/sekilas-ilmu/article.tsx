import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { FaShareAlt, FaFlag } from "react-icons/fa";
import { useArticle, useArticleData } from "../../services/ArticleService";
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";
import { ArticleData } from "../../types/tagArticle";
import parse from "html-react-parser";

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isReportModalOpen, setReportModalOpen] = useState(false);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  const {
    data: article,
    isLoading: isArticleLoading,
    error: articleError,
  } = useArticle(slug || "");
  const {
    data: relatedArticles,
    isLoading: isRelatedLoading,
    error: relatedError,
  } = useArticleData(article?.id || "");

  const reportReasons = [
    "Ini adalah spam",
    "Ujaran atau simbol kebencian",
    "Kekerasan atau organisasi berbahaya",
    "Ketelanjangan atau aktivitas seksual",
    "Penjualan barang ilegal atau barang dengan izin khusus",
    "Perundungan (bullying) atau pelecehan",
    "Pelanggaran hak kekayaan intelektual",
    "Bunuh diri atau melukai diri sendiri",
    "Gangguan makan",
    "Penipuan atau penggelapan",
    "Informasi palsu",
    "Saya hanya tidak menyukainya"
  ];

  const handleReportClick = (reason: string) => {
    setSelectedReason(reason);
    setReportModalOpen(false);
    setConfirmationOpen(true);
  };

  const contentWithTailwind = parse(article?.content || "", {
    replace: (domNode) => {
      if (domNode.type === "tag") {
        switch (domNode.name) {
          case "h1":
            domNode.attribs.class = "text-4xl font-bold";
            break;
          case "h2":
            domNode.attribs.class = "text-3xl font-semibold";
            break;
          case "p":
            domNode.attribs.class = "text-base leading-relaxed";
            break;
          case "a":
            domNode.attribs.class =
              "text-blue-500 underline hover:text-blue-700";
            break;
          case "ul":
            domNode.attribs.class = "list-disc list-inside";
            break;
          case "li":
            domNode.attribs.class = "mb-1";
            break;
          case "strong":
            domNode.attribs.class = "font-bold";
            break;
          case "em":
            domNode.attribs.class = "italic";
            break;
          case "div":
            domNode.attribs.class = "block";
            break;
          case "span":
            domNode.attribs.class = "inline";
            break;
          default:
            break;
        }
      }
      return domNode;
    },
  });

  

  if (!slug) {
    return (
      <div className="h-screen flex items-center justify-center">
        Judul Artikel tidak ditemukan
      </div>
    );
  }

  if (isArticleLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading artikel...
      </div>
    );
  }

  if (articleError) {
    return (
      <div className="h-screen flex items-center justify-center">
        {articleError.message}
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Beranda", path: "/dashboard" },
    { label: "Sekilas Ilmu", path: "/sekilas-ilmu" },
    { label: article?.title },
  ];

  const renderArticleContent = () => (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Kiri: Konten Utama */}
      <div className="lg:w-2/3">
        <h1 className="text-3xl font-bold my-4 text-gray-800">
          {article?.title}
        </h1>

        <div className="mb-8">
          <span>
            {article?.tags.map((tag, index) => (
              <span
                key={index}
                className="mr-2 bg-gray-200 text-gray-800 font-bold px-3 py-1 rounded-lg text-sm"
              >
                #{tag}
              </span>
            ))}
          </span>
        </div>

        <div className="md:flex items-center text-sm text-gray-500 mb-6">
          <span className="mr-2 font-medium">
            {article?.author?.full_name || "Anonim"}
          </span>
          <span className="mr-2">-</span>
          <span>
            {article?.created_at
              ? new Date(article.created_at).toLocaleDateString("id-ID", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "Tanggal tidak tersedia"}
          </span>
          <div className="ml-auto flex gap-4 md:mt-0 mt-4">
            <button className="font-bold text-blue-600 flex items-center mr-3">
              <FaShareAlt className="mr-3" size={20} />
              Share
            </button>
            <button
              className="font-bold text-red-600 flex items-center"
              onClick={() => setReportModalOpen(true)}
            >
              <FaFlag className="mr-3" size={20} />
              Laporkan
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={article?.thumbnail}
            alt={article?.title}
            className="w-11/12 rounded-lg mb-6 mt-2"
          />
        </div>

        <div className="text-gray-700 text-justify leading-relaxed">
          {contentWithTailwind}
        </div>
      </div>

      {/* Kanan: Sidebar */}
      <div className="lg:w-1/3">
        <div className="mb-6 mt-5">
          <img
            src="/sekilas/article.png"
            alt="Banner"
            className="rounded-md w-full shadow-md"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-xl text-gray-800 mb-4 pb-2 border-b-4 border-blue-900 inline-block">
            Lainnya dari Sekilas Ilmu
          </h3>
          {isRelatedLoading ? (
            <p>Loading artikel terkait...</p>
          ) : relatedError ? (
            <p className="text-red-500 text-sm">
              Gagal memuat artikel terkait.
            </p>
          ) : (
            <ul className="space-y-4">
              {Array.isArray(relatedArticles) &&
                relatedArticles.map((relatedArticle: ArticleData) => (
                  <li
                    key={relatedArticle.id}
                    className="flex items-start gap-3 border-b pb-4"
                  >
                    {/* Bungkus dengan Link */}
                    <Link
                      to={`/sekilas-ilmu/${relatedArticle.slug}`}
                      className="flex items-start gap-3 w-full"
                    >
                      <img
                        src={relatedArticle.thumbnail}
                        alt={relatedArticle.title}
                        className="w-24 h-24 rounded-md object-cover"
                      />
                      <div>
                        <h4 className="text-lg font-bold leading-snug text-gray-800 mb-6">
                          {relatedArticle.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <p className="mr-2 bg-gray-200 text-gray-800 font-bold px-3 py-1 rounded-lg text-sm">
                            #{relatedArticle.tags?.[0] || "Umum"}
                          </p>
                          <span className="mr-2"> | </span>
                          <span>
                            {relatedArticle?.created_at
                              ? new Date(
                                  relatedArticle.created_at
                                ).toLocaleDateString("id-ID", {
                                  weekday: "short",
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                })
                              : "Tanggal tidak tersedia"}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>

      {isReportModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[350px] p-4 shadow-lg relative">
            {/* Tombol Close */}
            <button
              onClick={() => setReportModalOpen(false)}
              className="absolute pr-4 right-2 text-gray-600 hover:text-gray-800 text-lg"
            >
              ✕
            </button>

            {/* Judul */}
            <h3 className="text-center text-lg font-semibold text-gray-900 pb-3 border-b border-gray-300 w-full">
              Laporkan
            </h3>

            {/* Deskripsi */}
            <p className="text-sm text-gray-700 mt-4 mb-3 font-medium">
              Mengapa Anda melaporkan Artikel ini?
            </p>

            {/* Daftar Alasan */}
            <ul className="text-sm text-gray-700">
              {reportReasons.map((reason, index) => (
                <li
                  key={index}
                  onClick={() => handleReportClick(reason)}
                  className="cursor-pointer flex justify-between items-center py-3 hover:bg-gray-100"
                >
                  <span>{reason}</span>
                  <span className="text-gray-400 text-lg pr-2">›</span>{" "}
                  {/* Ikon Panah */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {isConfirmationOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-2/6 p-6 text-center shadow-lg border border-gray-200">
            {/* Ikon Checklist */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Judul */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Terimakasih telah memberi tahu kami
            </h3>

            {/* Pesan */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              Masukan dari Anda sangat penting untuk membantu kami menjaga
              komunitas Kampus Gratis agar tetap aman.
            </p>

            {/* Alasan laporan */}
            <p className="text-sm text-gray-500 mb-6">
              Alasan laporan Anda: <strong>{selectedReason}</strong>
            </p>

            {/* Tombol Tutup */}
            <button
              onClick={() => setConfirmationOpen(false)}
              className="bg-blue-500 text-white font-medium w-full py-2 rounded hover:bg-blue-600"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-screen flex flex-col md:px-36 md:pb-4 px-8 bg-gray-100 md:pt-12 ">
      <div className="mt-32 mb-3">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {renderArticleContent()}
    </div>
  );
};
