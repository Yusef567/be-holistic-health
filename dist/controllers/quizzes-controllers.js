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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuiz = exports.getQuizzes = void 0;
const categories_models_1 = require("../models/categories-models");
const quizzes_models_1 = require("../models/quizzes-models");
const getQuizzes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category, sort_by, order, limit, p, } = req.query;
        if (category) {
            yield (0, categories_models_1.checkCategory)(category);
            const { quizzes, totalCount } = yield (0, quizzes_models_1.fetchQuizzes)(category, sort_by, order, limit, p);
            res.status(200).send({ quizzes, totalCount });
        }
        else {
            const { quizzes, totalCount } = yield (0, quizzes_models_1.fetchQuizzes)(category, sort_by, order, limit, p);
            res.status(200).send({ quizzes, totalCount });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.getQuizzes = getQuizzes;
const getQuiz = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { quiz_id } = req.params;
        const quiz = yield (0, quizzes_models_1.fetchQuiz)(quiz_id);
        res.status(200).send({ quiz });
    }
    catch (err) {
        next(err);
    }
});
exports.getQuiz = getQuiz;
