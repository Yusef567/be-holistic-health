export interface Category {
  category_id: number;
  category: string;
}

export interface FirstQuiz {
  quiz_id: number;
  quiz_name: string;
  quiz_img: string;
  category: string;
  description: string;
  username: string;
  release_date: string;
  likes: number;
}

export interface Comment {
  comment_id: number;
  quiz_id: number;
  created_at: string;
  comment_text: string;
  username: string;
  user_id: number;
}
