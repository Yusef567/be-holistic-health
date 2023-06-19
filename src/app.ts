import express, { Application } from "express";
import cookieParser from "cookie-parser";
import { loginUser, logoutUser } from "./controllers/auth-controllers";
import { postUser, protectedController } from "./controllers/users-controllers";
import { refreshTokens } from "./controllers/auth-controllers";
import {
  handle500Errors,
  handleCustomErrors,
  handleJwtErrors,
  handlePSQL400sErrors,
  handlePathNotFound,
} from "./middleware/error-handlers";
import { getCategories } from "./controllers/categories-controllers";
import {
  getQuiz,
  getQuizzes,
  postQuiz,
} from "./controllers/quizzes-controllers";
import {
  getQuizComments,
  postComment,
} from "./controllers/comments-controllers";

const app: Application = express();

app.use(express.json());

app.use(cookieParser());

app.post("/api/login", loginUser);

app.get("/api/protected", protectedController);

app.post("/api/users", postUser);

app.post("/api/refresh-token", refreshTokens);

app.post("/api/logout", logoutUser);

app.get("/api/categories", getCategories);

app.get("/api/quizzes", getQuizzes);

app.get("/api/quizzes/:quiz_id", getQuiz);

app.get("/api/quizzes/:quiz_id/comments", getQuizComments);

app.post("/api/quizzes", postQuiz);

app.post("/api/quizzes/:quiz_id/comments", postComment);

app.use("/*", handlePathNotFound);

app.use(handlePSQL400sErrors);
app.use(handleCustomErrors);
app.use(handleJwtErrors);
app.use(handle500Errors);

export default app;
