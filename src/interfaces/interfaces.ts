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

export interface User {
  user_id: number;
  username: string;
  password: string;
  salt: string;
}

export interface Answer {
  answer_text: string;
  is_correct: boolean;
}

export interface Questions {
  question_text: string;
  answers: Answer[];
}

export interface NewQuiz {
  quiz_name: string;
  category: string;
  username: string;
  user_id: number;
  description: string;
  quiz_img: string;
  questions: Questions[];
}

export interface UpdatedLikes {
  inc_likes: boolean;
}
