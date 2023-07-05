"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quizzes_controllers_1 = require("../controllers/quizzes-controllers");
const router = express_1.default.Router();
router.get("/", quizzes_controllers_1.getQuizzes);
router.get("/:quiz_id", quizzes_controllers_1.getQuiz);
router.post("/", quizzes_controllers_1.postQuiz);
router.patch("/:quiz_id", quizzes_controllers_1.patchQuiz);
router.delete("/:quiz_id", quizzes_controllers_1.deleteQuiz);
router.get("/:quiz_id/user/likes", quizzes_controllers_1.likedQuizStatus);
exports.default = router;
