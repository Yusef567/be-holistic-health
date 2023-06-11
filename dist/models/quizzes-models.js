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
exports.fetchQuizzes = void 0;
const connection_1 = __importDefault(require("../connection"));
const fetchQuizzes = (category, sort_by = "release_date", order = "desc", limit = "10", page = "1") => __awaiter(void 0, void 0, void 0, function* () {
    const queryParams = [];
    let quizzesQueryStr = `SELECT q.quiz_id, q.quiz_name, q.category, q.quiz_img, q.description, q.username, q.release_date,
      CAST(COUNT(l.like_id) AS INT) AS likes
      FROM quizzes q
      LEFT JOIN likes l ON l.content_id = q.quiz_id AND l.content_type = 'quiz'`;
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
