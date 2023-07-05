import express, { Router } from "express";
import {
  deleteQuiz,
  getQuiz,
  getQuizzes,
  likedQuizStatus,
  patchQuiz,
  postQuiz,
} from "../controllers/quizzes-controllers";

const router: Router = express.Router();

router.get("/", getQuizzes);

router.get("/:quiz_id", getQuiz);

router.post("/", postQuiz);

router.patch("/:quiz_id", patchQuiz);

router.delete("/:quiz_id", deleteQuiz);

router.get("/:quiz_id/user/likes", likedQuizStatus);

export default router;
