import format from "pg-format";
import db from "../connection";
import { prepareQuestionData } from "../utils/seedUtils";

interface User {
  username: string;
  password: string;
  salt: string;
}

interface Category {
  category: string;
}

interface Quiz {
  quiz_name: string;
  category: string;
  quiz_img: string;
  description: string;
  username: string;
}

interface QuizQuestion {
  quiz_name: string;
  question_text: string;
}

interface Answer {
  answer_text: string;
  is_correct: boolean;
}

interface QuizAnswer {
  question_id: number;
  answers: Answer[];
}

interface Comment {
  quiz_id: number;
  comment_text: string;
  user_id: number;
  username: string;
}

interface Like {
  content_id: number;
  content_type: string;
  user_id: number;
}
const seed = async ({
  usersData,
  categoriesData,
  quizData,
  questionsData,
  answersData,
  commentsData,
  likesData,
}: {
  usersData: User[];
  categoriesData: Category[];
  quizData: Quiz[];
  questionsData: QuizQuestion[];
  answersData: QuizAnswer[][];
  commentsData: Comment[];
  likesData: Like[];
}) => {
  try {
    await db.query(`DROP TABLE IF EXISTS comments;`);
    await db.query(`DROP TABLE IF EXISTS answers;`);
    await db.query(`DROP TABLE IF EXISTS questions;`);
    await db.query(`DROP TABLE IF EXISTS likes;`);
    await db.query(`DROP TABLE IF EXISTS quizzes;`);
    await db.query(`DROP TABLE IF EXISTS categories;`);
    await db.query(`DROP TABLE IF EXISTS users;`);

    await db.query(`
      CREATE TABLE users (
        user_id SERIAL PRIMARY KEY,
        username VARCHAR NOT NULL UNIQUE,
        password VARCHAR NOT NULL,
        salt VARCHAR NOT NULL,
        refresh_token VARCHAR DEFAULT NULL
        );`);

    await db.query(`
      CREATE TABLE categories (
       category_id SERIAL PRIMARY KEY,
       category VARCHAR NOT NULL UNIQUE
      );`);

    await db.query(`
      CREATE TABLE quizzes (
          quiz_id SERIAL PRIMARY KEY,
          quiz_name VARCHAR NOT NULL,
          category VARCHAR NOT NULL REFERENCES categories(category),
          quiz_img VARCHAR NOT NULL,
          description VARCHAR NOT NULL,
          username VARCHAR NOT NULL REFERENCES users(username),
          release_date TIMESTAMP DEFAULT NOW()
      );`);

    await db.query(`
      CREATE TABLE likes (
        like_id SERIAL PRIMARY KEY,
        content_id INT NOT NULL,
        content_type VARCHAR(10) NOT NULL,
        user_id INT REFERENCES users(user_id) NOT NULL
      );
    `);

    await db.query(`
      CREATE TABLE questions (
          question_id SERIAL PRIMARY KEY,
          quiz_id INT REFERENCES quizzes(quiz_id) NOT NULL,
          question_text VARCHAR NOT NULL
      );`);

    await db.query(`
      CREATE TABLE answers (
        answer_id SERIAL PRIMARY KEY,
        question_id INT REFERENCES questions(question_id) NOT NULL,
        answer_text VARCHAR NOT NULL,
        is_correct BOOLEAN NOT NULL
      );`);

    await db.query(`
      CREATE TABLE comments (
        comment_id SERIAL PRIMARY KEY,
        quiz_id INT REFERENCES quizzes(quiz_id) NOT NULL,
        comment_text VARCHAR NOT NULL,
        username VARCHAR REFERENCES users(username) NOT NULL,
        user_id INT REFERENCES users(user_id) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );`);

    const insertUsersQueryStr = format(
      "INSERT INTO users (username, password, salt) VALUES %L",
      usersData.map(({ username, password, salt }) => [
        username,
        password,
        salt,
      ])
    );
    const insertUsersPromise = db.query(insertUsersQueryStr);

    const insertCategoriesQueryStr = format(
      "INSERT INTO categories (category) VALUES %L",
      categoriesData.map(({ category }) => [category])
    );
    const insertCategoriesPromise = db.query(insertCategoriesQueryStr);

    await Promise.all([insertUsersPromise, insertCategoriesPromise]);

    const insertQuizzesQueryStr = format(
      "INSERT INTO quizzes (quiz_name,category,quiz_img,description,username) VALUES %L RETURNING *",
      quizData.map(
        ({ quiz_name, category, quiz_img, description, username }) => [
          quiz_name,
          category,
          quiz_img,
          description,
          username,
        ]
      )
    );
    const insertedQuizzesResponse = await db.query(insertQuizzesQueryStr);
    const insertedQuizzesArr = insertedQuizzesResponse.rows;
    const formattedQuestionsData = prepareQuestionData(
      questionsData,
      insertedQuizzesArr
    );

    const insertLikesQueryStr = format(
      `INSERT INTO likes (content_id, content_type, user_id) VALUES %L`,
      likesData.map(({ content_id, content_type, user_id }) => [
        content_id,
        content_type,
        user_id,
      ])
    );
    const insertLikesPromise = db.query(insertLikesQueryStr);

    const insertQuestionsQueryStr = format(
      "INSERT INTO questions (quiz_id, question_text) VALUES %L RETURNING *",
      formattedQuestionsData.map(({ quiz_id, question_text }) => [
        quiz_id,
        question_text,
      ])
    );

    const insertQuestionsPromise = db.query(insertQuestionsQueryStr);

    await Promise.all([insertLikesPromise, insertQuestionsPromise]);

    const insertAnswersQueryStr = format(
      `INSERT INTO answers (question_id, answer_text, is_correct) VALUES %L`,
      answersData
        .flat()
        .map(({ question_id, answers }) =>
          answers.map(({ answer_text, is_correct }) => [
            question_id,
            answer_text,
            is_correct,
          ])
        )
        .flat()
    );
    await db.query(insertAnswersQueryStr);

    const insertCommentsQueryStr = format(
      `INSERT INTO comments (quiz_id,comment_text,username,user_id) VALUES %L`,
      commentsData.map(({ quiz_id, comment_text, username, user_id }) => [
        quiz_id,
        comment_text,
        username,
        user_id,
      ])
    );
    await db.query(insertCommentsQueryStr);
  } catch (err) {
    console.error("Error seeding --->>>", err);
  }
};

export default seed;
