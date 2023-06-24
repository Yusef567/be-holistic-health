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
exports.patchComment = exports.postComment = exports.getQuizComments = void 0;
const comments_models_1 = require("../models/comments-models");
const quizzes_models_1 = require("../models/quizzes-models");
const passport_config_1 = __importDefault(require("../passport-config"));
const getQuizComments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { quiz_id } = req.params;
        const { limit, p } = req.query;
        yield (0, quizzes_models_1.checkQuizIsValid)(quiz_id);
        const { comments, totalCount } = yield (0, comments_models_1.fetchQuizComments)(quiz_id, limit, p);
        res.status(200).send({ comments, totalCount });
    }
    catch (err) {
        next(err);
    }
});
exports.getQuizComments = getQuizComments;
const postComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    passport_config_1.default.authenticate("jwt", { session: false }, (err, user, info) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (err || !user) {
                return res.status(401).send({ msg: "Unauthorized" });
            }
            const { quiz_id } = req.params;
            const newComment = req.body;
            const comment = yield (0, comments_models_1.insertComment)(quiz_id, newComment, user);
            res.status(201).send({ comment });
        }
        catch (err) {
            next(err);
        }
    }))(req, res, next);
});
exports.postComment = postComment;
const patchComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    passport_config_1.default.authenticate("jwt", { session: false }, (err, user, info) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (err || !user) {
                return res.status(401).send({ msg: "Unauthorized" });
            }
            const { comment_id } = req.params;
            const updatedLikes = req.body;
            const comment = yield (0, comments_models_1.updateComment)(comment_id, updatedLikes, user);
            res.status(201).send({ comment });
        }
        catch (err) {
            next(err);
        }
    }))(req, res, next);
});
exports.patchComment = patchComment;
