"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_format_1 = __importDefault(require("pg-format"));
const connection_1 = __importDefault(require("../connection"));
const seedUtils_1 = require("../utils/seedUtils");
const seed = ({ usersData, categoriesData, quizData, questionsData, answersData, commentsData, likesData, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.default.query(`DROP TABLE IF EXISTS comments;`);
        yield connection_1.default.query(`DROP TABLE IF EXISTS answers;`);
        yield connection_1.default.query(`DROP TABLE IF EXISTS questions;`);
        yield connection_1.default.query(`DROP TABLE IF EXISTS likes;`);
        yield connection_1.default.query(`DROP TABLE IF EXISTS quizzes;`);
        yield connection_1.default.query(`DROP TABLE IF EXISTS categories;`);
        yield connection_1.default.query(`DROP TABLE IF EXISTS users;`);
        yield connection_1.default.query(`
      CREATE TABLE users (
        user_id SERIAL PRIMARY KEY,
        username VARCHAR NOT NULL UNIQUE,
        password VARCHAR NOT NULL,
        salt VARCHAR NOT NULL,
        refresh_token VARCHAR DEFAULT NULL
        );`);
        yield connection_1.default.query(`
      CREATE TABLE categories (
       category_id SERIAL PRIMARY KEY,
       category VARCHAR NOT NULL UNIQUE
      );`);
        yield connection_1.default.query(`
      CREATE TABLE quizzes (
          quiz_id SERIAL PRIMARY KEY,
          quiz_name VARCHAR NOT NULL,
          category VARCHAR NOT NULL REFERENCES categories(category),
          quiz_img VARCHAR NOT NULL,
          description VARCHAR NOT NULL,
          username VARCHAR NOT NULL REFERENCES users(username),
          user_id INT REFERENCES users(user_id) NOT NULL,
          release_date TIMESTAMP DEFAULT NOW()
      );`);
        yield connection_1.default.query(`
      CREATE TABLE likes (
        like_id SERIAL PRIMARY KEY,
        content_id INT NOT NULL,
        content_type VARCHAR(10) NOT NULL,
        user_id INT REFERENCES users(user_id) NOT NULL,
        like_value INT NOT NULL
      );
    `);
        yield connection_1.default.query(`
      CREATE TABLE questions (
          question_id SERIAL PRIMARY KEY,
          quiz_id INT REFERENCES quizzes(quiz_id) NOT NULL,
          question_text VARCHAR NOT NULL
      );`);
        yield connection_1.default.query(`
      CREATE TABLE answers (
        answer_id SERIAL PRIMARY KEY,
        question_id INT REFERENCES questions(question_id) NOT NULL,
        answer_text VARCHAR NOT NULL,
        is_correct BOOLEAN NOT NULL
      );`);
        yield connection_1.default.query(`
      CREATE TABLE comments (
        comment_id SERIAL PRIMARY KEY,
        quiz_id INT REFERENCES quizzes(quiz_id) NOT NULL,
        comment_text VARCHAR NOT NULL,
        username VARCHAR REFERENCES users(username) NOT NULL,
        user_id INT REFERENCES users(user_id) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );`);
        const insertUsersQueryStr = (0, pg_format_1.default)("INSERT INTO users (username, password, salt) VALUES %L RETURNING *", usersData.map(({ username, password, salt }) => [
            username,
            password,
            salt,
        ]));
        const insertUsersPromise = connection_1.default.query(insertUsersQueryStr);
        const insertCategoriesQueryStr = (0, pg_format_1.default)("INSERT INTO categories (category) VALUES %L", categoriesData.map(({ category }) => [category]));
        const insertCategoriesPromise = connection_1.default.query(insertCategoriesQueryStr);
        const insertedUsersCategories = yield Promise.all([
            insertUsersPromise,
            insertCategoriesPromise,
        ]);
        const insertedUsers = insertedUsersCategories[0].rows;
        const quizDataWithUserIds = (0, seedUtils_1.quizzesWithUserIds)(quizData, insertedUsers);
        const insertQuizzesQueryStr = (0, pg_format_1.default)("INSERT INTO quizzes (quiz_name,category,quiz_img,description,username, user_id) VALUES %L RETURNING *", quizDataWithUserIds.map(({ quiz_name, category, quiz_img, description, username, user_id }) => [
            quiz_name,
            category,
            quiz_img,
            description,
            username,
            user_id,
        ]));
        const insertedQuizzesResponse = yield connection_1.default.query(insertQuizzesQueryStr);
        const insertedQuizzesArr = insertedQuizzesResponse.rows;
        const formattedQuestionsData = (0, seedUtils_1.prepareQuestionData)(questionsData, insertedQuizzesArr);
        const insertLikesQueryStr = (0, pg_format_1.default)(`INSERT INTO likes (content_id, content_type, user_id, like_value) VALUES %L`, likesData.map(({ content_id, content_type, user_id, like_value }) => [
            content_id,
            content_type,
            user_id,
            like_value,
        ]));
        const insertLikesPromise = connection_1.default.query(insertLikesQueryStr);
        const insertQuestionsQueryStr = (0, pg_format_1.default)("INSERT INTO questions (quiz_id, question_text) VALUES %L RETURNING *", formattedQuestionsData.map(({ quiz_id, question_text }) => [
            quiz_id,
            question_text,
        ]));
        const insertQuestionsPromise = connection_1.default.query(insertQuestionsQueryStr);
        yield Promise.all([insertLikesPromise, insertQuestionsPromise]);
        const insertAnswersQueryStr = (0, pg_format_1.default)(`INSERT INTO answers (question_id, answer_text, is_correct) VALUES %L`, answersData
            .flat()
            .map(({ question_id, answers }) => answers.map(({ answer_text, is_correct }) => [
            question_id,
            answer_text,
            is_correct,
        ]))
            .flat());
        yield connection_1.default.query(insertAnswersQueryStr);
        const insertCommentsQueryStr = (0, pg_format_1.default)(`INSERT INTO comments (quiz_id,comment_text,username,user_id) VALUES %L`, commentsData.map(({ quiz_id, comment_text, username, user_id }) => [
            quiz_id,
            comment_text,
            username,
            user_id,
        ]));
        yield connection_1.default.query(insertCommentsQueryStr);
    }
    catch (err) {
        console.error("Error seeding --->>>", err);
    }
});
exports.default = seed;
