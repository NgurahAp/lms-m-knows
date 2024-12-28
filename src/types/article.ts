export interface ArticleResponse {
  code: number;
  status: string;
  message: string;
  data: Article;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  views: number;
  category_id: string;
  author_id: string;
  created_at: string;
  author: {
    full_name: string;
    user_name: string;
    avatar: null;
  };
  category: string;
  tags: string[];
  is_favorite: boolean;
}
