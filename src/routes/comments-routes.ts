import express, { Router } from "express";
import {
  deleteComment,
  getQuizComments,
  likedCommentStatus,
  patchComment,
  postComment,
} from "../controllers/comments-controllers";

const router: Router = express.Router();

router.get("/quiz/:quiz_id", getQuizComments);

router.post("/quiz/:quiz_id", postComment);

router.patch("/:comment_id", patchComment);

router.delete("/:comment_id", deleteComment);

router.get("/quiz/:quiz_id/user/likes", likedCommentStatus);

export default router;
