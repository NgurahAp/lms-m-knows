import { useParams } from "react-router-dom";
import { useIlmuData } from "../../services/IlmuService";
import { Article } from "../../types/ilmu";

export const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useIlmuData();

  // Mencari artikel berdasarkan ID yang cocok
  const article: Article | undefined = data?.data.find(
    (item) => item.id === id
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!article) return <p>Artikel tidak ditemukan</p>;

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow mt-6">
      <img
        src={article.thumbnail}
        alt={article.title}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-3xl font-bold mt-4">{article.title}</h1>

      <p className="text-gray-500 mt-2">Oleh: {article.author.full_name}</p>
      <p className="text-gray-600 mt-1">
        Tanggal dibuat: {article.created_at} | {article.views} Views
      </p>

      <div
        className="mt-4 text-gray-700"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>

      <div className="mt-4 flex gap-2">
        {article.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 text-sm font-medium px-2 py-1 rounded"
          >
            #{tag}
          </span>
        ))}
      </div>

      <p className="mt-4 font-medium text-gray-600">
        Category: {article.category}
      </p>
    </div>
  );
};
