interface Author {
  full_name: string;
}

// Define Article Interface
export interface Article {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  views: number;
  created_at: string;
  author: Author;
  category: string;
  is_favorite: boolean;
  tags: string[];
}

// Define Data Container Interface
export interface IlmuData {
  data: Article[];
  page_size: number;
  total_data: number;
  current_page: number;
  max_page: number;
}
