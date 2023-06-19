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
exports.insertQuiz = exports.checkQuizIsValid = exports.fetchQuiz = exports.fetchQuizzes = void 0;
const connection_1 = __importDefault(require("../connection"));
const quizUtils_1 = require("../utils/quizUtils");
const fetchQuizzes = (category, sort_by = "release_date", order = "desc", limit = "10", page = "1") => __awaiter(void 0, void 0, void 0, function* () {
    const queryParams = [];
    let quizzesQueryStr = `
    SELECT q.quiz_id, q.quiz_name, q.category, q.quiz_img, q.description, q.username,q.user_id, q.release_date,
    CAST(COALESCE(SUM(l.like_value), 0) AS INT) AS likes
    FROM quizzes q
    LEFT JOIN likes l ON l.content_id = q.quiz_id AND l.content_type = 'quiz'
    `;
    const validSortBy = ["quiz_name", "category", "release_date", "likes"];
    const validOrderBy = ["desc", "asc"];
    if (!validSortBy.includes(sort_by)) {
        throw { status: 400, msg: "Invalid column specified" };
    }
    else if (!validOrderBy.includes(order)) {
        throw { status: 400, msg: "Invalid order query" };
    }
    if (category) {
        let categoryQueryStr = ` WHERE q.category = $1`;
        quizzesQueryStr += categoryQueryStr;
        queryParams.push(category);
    }
    let orderByQueryStr = ` GROUP BY q.quiz_id ORDER BY ${sort_by} ${order}`;
    quizzesQueryStr += orderByQueryStr;
    const isNumber = /^[0-9]+$/;
    if (!isNumber.test(limit)) {
        throw { status: 400, msg: "Invalid limit query specified" };
    }
    else if (!isNumber.test(page)) {
        throw { status: 400, msg: "Invalid page query specified" };
    }
    const offset = (Number(page) - 1) * Number(limit);
    let limitQueryStr = ` LIMIT ${limit} OFFSET ${offset}`;
    quizzesQueryStr += limitQueryStr;
    const totalCountQueryStr = `SELECT COUNT(*) AS total_count FROM (${quizzesQueryStr.replace(limitQueryStr, "")}) AS subquery`;
    const totalQueryResponse = yield connection_1.default.query(totalCountQueryStr, queryParams);
    const totalCount = Number(totalQueryResponse.rows[0].total_count);
    const quizzesQueryResponse = yield connection_1.default.query(quizzesQueryStr, queryParams);
    const { rows } = quizzesQueryResponse;
    return { quizzes: rows, totalCount };
});
exports.fetchQuizzes = fetchQuizzes;
const fetchQuiz = (quiz_id) => __awaiter(void 0, void 0, void 0, function* () {
    const isNumber = /^[0-9]+$/;
    if (!isNumber.test(quiz_id)) {
        throw { status: 400, msg: "Invalid quiz_id specified" };
    }
    const quizQueryStr = `
  SELECT q.quiz_id, q.quiz_name, q.description, q.quiz_img, q.category,q.user_id, q.username, q.release_date,
  CAST(COALESCE(SUM(l.like_value), 0) AS INT) AS likes,
  CAST(COUNT(c.comment_id) AS INT) AS comment_count
  FROM quizzes q
  LEFT JOIN likes l ON l.content_id = q.quiz_id AND l.content_type = 'quiz'
  LEFT JOIN comments c ON c.quiz_id = q.quiz_id
  WHERE q.quiz_id = $1
  GROUP BY q.quiz_id;
  `;
    const quizQueryResponse = yield connection_1.default.query(quizQueryStr, [quiz_id]);
    const quizInfo = quizQueryResponse.rows[0];
    if (!quizInfo) {
        throw { status: 404, msg: "quiz_id not found" };
    }
    const answersAndQuestionsQuery = `
  SELECT a.answer_id, a.question_id, a.answer_text, a.is_correct, q.question_text
  FROM answers a
  JOIN questions q ON a.question_id = q.question_id
  WHERE q.quiz_id = $1
  `;
    const answersAndQuestionsResponse = yield connection_1.default.query(answersAndQuestionsQuery, [
        quiz_id,
    ]);
    const answersAndQuestions = answersAndQuestionsResponse.rows;
    const formattedData = (0, quizUtils_1.formattedQuestionsAndAnswers)(answersAndQuestions);
    return Object.assign(Object.assign({}, quizInfo), { questions: formattedData });
});
exports.fetchQuiz = fetchQuiz;
const checkQuizIsValid = (quiz_id) => __awaiter(void 0, void 0, void 0, function* () {
    const isNumber = /^[0-9]+$/;
    if (!isNumber.test(quiz_id)) {
        throw { status: 400, msg: "Invalid quiz_id specified" };
    }
    const quizQueryStr = `SELECT * FROM quizzes WHERE quiz_id = $1`;
    const quizQueryResponse = yield connection_1.default.query(quizQueryStr, [quiz_id]);
    const foundQuiz = quizQueryResponse.rows[0];
    if (!foundQuiz) {
        throw { status: 404, msg: "quiz_id not found" };
    }
    return foundQuiz;
});
exports.checkQuizIsValid = checkQuizIsValid;
const insertQuiz = (quiz, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { quiz_name, category, description, quiz_img, questions } = quiz;
    const { username, user_id } = user;
    if (!Object.keys(quiz).length) {
        throw { status: 400, msg: "Empty quiz object" };
    }
    else if (!questions) {
        throw { status: 400, msg: "Quiz questions are required" };
    }
    else if (questions.length < 8) {
        throw { status: 400, msg: "Quiz must have at least 8 questions" };
    }
    else if (questions.length > 16) {
        throw { status: 400, msg: "Maximum limit of 16 questions exceeded" };
    }
    const insertQuizQuery = `
    INSERT INTO quizzes (quiz_name, category, username, user_id, description, quiz_img)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `;
    const quizQueryResponse = yield connection_1.default.query(insertQuizQuery, [
        quiz_name,
        category,
        username,
        user_id,
        description,
        quiz_img,
    ]);
    const insertedQuizObj = quizQueryResponse.rows[0];
    const selectQuizStr = `
  SELECT q.quiz_id, q.quiz_name, q.description, q.quiz_img, q.category, q.username,q.user_id, q.release_date,
  CAST(COALESCE(SUM(l.like_value), 0) AS INT) AS likes,
  CAST(COUNT(c.comment_id) AS INT) AS comment_count
  FROM quizzes q
  LEFT JOIN likes l ON l.content_id = q.quiz_id AND l.content_type = 'quiz'
  LEFT JOIN comments c ON c.quiz_id = q.quiz_id
  WHERE q.quiz_id = $1
  GROUP BY q.quiz_id
  `;
    const quizInfo = yield connection_1.default.query(selectQuizStr, [insertedQuizObj.quiz_id]);
    const insertedQuiz = quizInfo.rows[0];
    insertedQuiz.questions = [];
    const quizId = insertedQuiz.quiz_id;
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const { question_text, answers } = question;
        if (!question_text || !answers.length) {
            throw { status: 400, msg: "Quiz questions and answers are required" };
        }
        else if (answers.length !== 4) {
            throw { status: 400, msg: "Each question must have 4 answer options" };
        }
        const insertQuestionQuery = `
      INSERT INTO questions (quiz_id, question_text)
      VALUES ($1, $2)
      RETURNING *
    `;
        const questionQueryResponse = yield connection_1.default.query(insertQuestionQuery, [
            quizId,
            question_text,
        ]);
        const insertedQuestion = questionQueryResponse.rows[0];
        const questionId = insertedQuestion.question_id;
        const newAnswers = [];
        let hasCorrectAnswer = false;
        let correctAnswerCount = 0;
        for (let j = 0; j < answers.length; j++) {
            const answer = answers[j];
            const { answer_text, is_correct } = answer;
            const insertAnswerQuery = `
        INSERT INTO answers (question_id, answer_text, is_correct)
        VALUES ($1, $2, $3)
        RETURNING *
      `;
            const answerQueryResponse = yield connection_1.default.query(insertAnswerQuery, [
                questionId,
                answer_text,
                is_correct,
            ]);
            const insertedAnswer = answerQueryResponse.rows[0];
            const newAnswer = {
                answer_id: insertedAnswer.answer_id,
                answer_text: insertedAnswer.answer_text,
                is_correct: insertedAnswer.is_correct,
            };
            newAnswers.push(newAnswer);
            if (is_correct) {
                correctAnswerCount++;
            }
            if (is_correct && !hasCorrectAnswer) {
                hasCorrectAnswer = true;
            }
            else if (is_correct && hasCorrectAnswer) {
                throw {
                    status: 400,
                    msg: "Each question can have only one correct answer",
                };
            }
            if (correctAnswerCount !== 1) {
                throw {
                    status: 400,
                    msg: "Each question must have exactly one correct answer",
                };
            }
        }
        const newQuestion = {
            question_id: insertedQuestion.question_id,
            quiz_id: insertedQuestion.quiz_id,
            question_text: insertedQuestion.question_text,
            answers: newAnswers,
        };
        insertedQuiz.questions.push(newQuestion);
    }
    return insertedQuiz;
});
exports.insertQuiz = insertQuiz;
