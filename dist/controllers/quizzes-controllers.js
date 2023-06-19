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
exports.postQuiz = exports.getQuiz = exports.getQuizzes = void 0;
const categories_models_1 = require("../models/categories-models");
const quizzes_models_1 = require("../models/quizzes-models");
const passport_config_1 = __importDefault(require("../passport-config"));
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
const postQuiz = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    passport_config_1.default.authenticate("jwt", { session: false }, (err, user, info) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (err || !user) {
                return res.status(401).send({ msg: "Unauthorized" });
            }
            const newQuiz = req.body;
            const addedQuiz = yield (0, quizzes_models_1.insertQuiz)(newQuiz, user);
            res.status(201).send({ addedQuiz });
        }
        catch (err) {
            next(err);
        }
    }))(req, res, next);
});
exports.postQuiz = postQuiz;
