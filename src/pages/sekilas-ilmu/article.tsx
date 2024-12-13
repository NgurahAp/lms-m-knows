import { useParams } from "react-router-dom";
import { useArticle, useArticleData } from "../../services/ArticleService";
import LoadingSpinner from "../../components/reusable/LoadingSpinner";
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
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

  if (!slug) {
    return (
      <div className="h-screen flex items-center justify-center">
        Judul Artikel tidak ditemukan
      </div>
    );
  }

  if (isArticleLoading) {
    return <LoadingSpinner text="Loading artikel..." />;
  }

  if (articleError) {
    return (
      <div className="h-screen flex items-center justify-center">
        {articleError.message}
      </div>
    );
  }

  const breadcrumbItems = [
    {
      label: "Beranda",
      path: "/dashboard",
    },
    {
      label: "Artikel",
      path: "/artikel",
    },
    {
      label: article?.slug,
    },
  ];

   const renderTraining = (traini: MyStudyData[]) => {
    <div className="flex flex-col lg:flex-row">
      {/* Main Article Content */}
      <div className="lg:w-2/3">
        <div className="mb-6">
          <img src={article?.thumbnail} alt="" className="w-full rounded-md" />
        </div>
        <h2 className="text-2xl font-bold mb-4">{article?.title}</h2>
        <p className="text-gray-500 text-justify leading-relaxed">
          {article?.content}
        </p>
      </div>

      {/* Sidebar */}
      <div className="lg:w-1/3 lg:pl-8">
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-lg mb-3">
            Lainnya dari Sekilas Ilmu
          </h3>
          {isRelatedLoading ? (
            <p>Loading artikel terkait...</p>
          ) : relatedError ? (
            <p className="text-red-500 text-sm">Gagal memuat artikel terkait.</p>
          ) : (
            <ul className="space-y-3">
              {relatedArticles?.map((relatedArticle) => (
                <li
                  key={relatedArticle.id}
                  className="flex items-start space-x-3"
                >
                  <img
                    src={relatedArticle.thumbnail}
                    alt={relatedArticle.title}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-semibold leading-snug">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {relatedArticle.author?.full_name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
   };

  return (
    <div className="bg-gray-50 min-h-screen p-6 lg:p-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Artikel</h1>
        {renderArticleContent()}
      </div>
    </div>
  );
};
