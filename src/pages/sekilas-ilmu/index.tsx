import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";
import { useIlmuData } from "../../services/IlmuService";
import { Article } from "../../types/ilmu";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { EmptyState } from "../../components/reusable/EmptyState";

export const SekilasIlmu = () => {
  const { data, isLoading, error } = useIlmuData();
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Article[]>([]);
  const [activeTab, setActiveTab] = useState<"sekilas Ilmu" | "disimpan">(
    "sekilas Ilmu"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const articlesData: Article[] = data?.data ?? [];
  const filteredArticles = articlesData.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPaginatedArticles = (articles: Article[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return articles.slice(startIndex, endIndex);
  };

  const toggleBookmark = (article: Article) => {
    if (bookmarkedArticles.some((a) => a.id === article.id)) {
      setBookmarkedArticles(
        bookmarkedArticles.filter((a) => a.id !== article.id)
      );
    } else {
      setBookmarkedArticles([...bookmarkedArticles, article]);
    }
  };

  const isBookmarked = (id: string) =>
    bookmarkedArticles.some((article) => article.id === id);

  const renderContent = () => {
    const articlesToShow =
      activeTab === "sekilas Ilmu"
        ? getPaginatedArticles(filteredArticles)
        : getPaginatedArticles(bookmarkedArticles);

    if (articlesToShow.length === 0) {
      return (
        <div className="mt-20 col-span-4 text-center text-gray-500">
          <EmptyState message="Artikel tidak ditemukan" />
        </div>
      );
    }

    return articlesToShow.map((article) => (
      <div key={article.id}>
        <Link
          to={`/sekilas-ilmu/${article.slug}`}
          className="block no-underline text-inherit"
          onClick={(e) => {
            const target = e.target as HTMLElement; // Pastikan TypeScript mengenali tipe target
            // Cek apakah klik terjadi pada ikon bookmark
            if (target.closest(".bookmark-icon")) {
              e.preventDefault(); // Hindari navigasi jika ikon bookmark diklik
            }
          }}
        >
          <div key={article.id} className="mt-8 w-full flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md border-2 pb-5 mx-2">
              <div className="mb-4 p-4">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-56 object-cover rounded-md"
                />
              </div>
              <div className="flex justify-between items-center mb-4 px-5">
                <span
                  className={`px-3 py-1 rounded-lg ${
                    article?.tags?.[0]?.toLowerCase() === "islam"
                      ? "bg-green-200 text-green-800"
                      : article?.tags?.[0]?.toLowerCase() === "copywriting"
                      ? "bg-pink-200 text-pink-800"
                      : article?.tags?.[0]?.toLowerCase() === "ui/ux"
                      ? "bg-blue-200 text-blue-800"
                      : article?.tags?.[0]?.toLowerCase() === "edukasi"
                      ? "bg-yellow-200 text-yellow-800"
                      : article?.tags?.[0]?.toLowerCase() === "desain"
                      ? "bg-purple-200 text-purple-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  #{article?.tags?.[0] || "Umum"}
                </span>
                <p className="text-gray-500 text-xl">
                  {new Date(article.created_at).toLocaleDateString("id-ID", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="min-h-36">
                <h3 className="text-2xl font-semibold my-2 px-4">
                  {article.title}
                </h3>
              </div>
              <div className="px-4 flex justify-between">
                <div>
                  <p className="text-gray-500 text-lg">{article.views} Views</p>
                </div>
                {/* Bookmark icon */}
                <div
                  className="right-4 bg-gray-100 p-2 rounded-lg cursor-pointer bookmark-icon"
                  onClick={(e) => {
                    e.preventDefault(); // Hentikan navigasi pada klik ikon
                    toggleBookmark(article);
                  }}
                >
                  <FaBookmark
                    size={20}
                    className={
                      isBookmarked(article.id)
                        ? "text-blue-500"
                        : "text-gray-400"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ));
  };

  const totalArticles =
    activeTab === "sekilas Ilmu"
      ? filteredArticles.length
      : bookmarkedArticles.length;
  const totalPages = Math.ceil(totalArticles / itemsPerPage);

  const handlePageChange = (page: number) => setCurrentPage(page);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-screen flex flex-col md:px-36 md:pb-4 px-8 bg-gray-100">
      <div className="w-full container md:pt-44 pt-24 mb-8 items-center">
        <Breadcrumb
          items={[
            { label: "Beranda", path: "/dashboard" },
            { label: "Sekilas Ilmu" },
          ]}
        />
        <h1 className="text-2xl font-bold mt-10 mb-4 text-center">
          Sekilas Ilmu
        </h1>
        <p className="text-lg mb-2 text-center">
          Temukan artikel menarik yang bakal menambah wawasanmu disini!
        </p>
        <div className="relative">
          <span className="md:ml-16 absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="text-gray-400 h-5 w-5 ml-3" />
          </span>
          <input
            type="text"
            placeholder="Cari mata kuliah"
            className="mt-6 md:ml-16 mb-6 w-11/12 h-16 p-3 border rounded-lg shadow-sm focus:outline-none pl-16"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap border-b border-white">
          {["sekilas Ilmu", "disimpan"].map((tab) => (
            <button
              key={tab}
              className={`py-4 px-10 md:text-xl text-lg font-semibold border-1 whitespace-nowrap ${
                activeTab === tab
                  ? "text-blue-500 border-b-4 border-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => {
                setActiveTab(tab as typeof activeTab);
                setCurrentPage(1); // Reset pagination ke halaman 1 saat tab berubah
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderContent()}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`mt-8 px-4 py-2 rounded-lg font-semibold ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
