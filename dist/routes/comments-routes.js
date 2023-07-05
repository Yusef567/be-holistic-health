"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comments_controllers_1 = require("../controllers/comments-controllers");
const router = express_1.default.Router();
router.get("/quiz/:quiz_id", comments_controllers_1.getQuizComments);
router.post("/quiz/:quiz_id", comments_controllers_1.postComment);
router.patch("/:comment_id", comments_controllers_1.patchComment);
router.delete("/:comment_id", comments_controllers_1.deleteComment);
router.get("/quiz/:quiz_id/user/likes", comments_controllers_1.likedCommentStatus);
exports.default = router;
