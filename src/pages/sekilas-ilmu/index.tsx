import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";
import { useIlmuData } from "../../services/IlmuService";
import { Article } from "../../types/ilmu";
import { Link } from "react-router-dom";

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
        <div className="col-span-4 text-center text-gray-500">
          <p className="text-lg font-semibold">Artikel tidak ditemukan</p>
        </div>
      );
    }

    return articlesToShow.map((article) => (
      <div key={article.id} className="bg-white shadow rounded-lg p-4 relative">
        {/* Bookmark icon */}
        <div
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow cursor-pointer"
          onClick={() => toggleBookmark(article)}
        >
          <FaBookmark
            size={20}
            className={
              isBookmarked(article.id) ? "text-blue-500" : "text-gray-500"
            }
          />
        </div>

        <Link
          to={`/sekilas-ilmu/${article.slug}`}
          className="block no-underline text-inherit"
        >
          {/* Thumbnail artikel */}
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-48 object-cover rounded"
          />

          {/* Informasi artikel */}
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-700 text-sm font-medium px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <h2 className="text-lg font-bold mt-2">{article.title}</h2>
            <div className="text-sm text-gray-500 mt-1">
              <p>{article.created_at}</p>
              <p>{article.views} Views</p>
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
    <div className="bg-gray-100 min-h-[85vh] w-screen flex flex-col">
      <div className="container mx-auto md:pt-44 pt-24 md:px-36 px-4 mb-8">
        <Breadcrumb
          items={[
            { label: "Beranda", path: "/dashboard" },
            { label: "Pelatihanku" },
          ]}
        />
        <h1 className="text-2xl font-bold mb-6">Sekilas Ilmu</h1>

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

        {/* Search Bar */}
        {activeTab === "sekilas Ilmu" && (
          <div className="my-6">
            <input
              type="text"
              placeholder="Cari artikel"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        )}

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
                className={`px-4 py-2 rounded-lg font-semibold ${
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
