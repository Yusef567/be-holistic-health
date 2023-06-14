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
exports.fetchQuizComments = void 0;
const connection_1 = __importDefault(require("../connection"));
const fetchQuizComments = (quiz_id, limit = "10", page = "1") => __awaiter(void 0, void 0, void 0, function* () {
    const isNumber = /^[0-9]+$/;
    if (!isNumber.test(quiz_id)) {
        throw { status: 400, msg: "Invalid quiz_id specified" };
    }
    let commentsQueryStr = `SELECT * FROM comments WHERE quiz_id = $1 ORDER BY created_at DESC`;
    if (!isNumber.test(limit)) {
        throw { status: 400, msg: "Invalid limit query specified" };
    }
    else if (!isNumber.test(page)) {
        throw { status: 400, msg: "Invalid page query specified" };
    }
    const offset = (Number(page) - 1) * Number(limit);
    let limitQueryStr = ` LIMIT ${limit} OFFSET ${offset}`;
    commentsQueryStr += limitQueryStr;
    const commentsQueryResponse = yield connection_1.default.query(commentsQueryStr, [quiz_id]);
    const comments = commentsQueryResponse.rows;
    const totalCountQueryStr = `SELECT COUNT(*) AS total_count FROM (${commentsQueryStr.replace(limitQueryStr, "")}) AS subquery`;
    const totalQueryResponse = yield connection_1.default.query(totalCountQueryStr, [quiz_id]);
    const totalCount = Number(totalQueryResponse.rows[0].total_count);
    return { comments, totalCount };
});
exports.fetchQuizComments = fetchQuizComments;
