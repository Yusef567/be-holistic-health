"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("./users"));
const categories_1 = __importDefault(require("./categories"));
const quizzes_1 = __importDefault(require("./quizzes"));
const questions_1 = __importDefault(require("./questions"));
const answers_1 = __importDefault(require("./answers"));
const comments_1 = __importDefault(require("./comments"));
const likes_1 = __importDefault(require("./likes"));
const testData = {
    usersData: users_1.default,
    categoriesData: categories_1.default,
    quizData: quizzes_1.default,
    questionsData: questions_1.default,
    answersData: answers_1.default,
    commentsData: comments_1.default,
    likesData: likes_1.default,
};
exports.default = testData;
