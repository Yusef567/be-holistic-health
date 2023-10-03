import express, { Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import {
  handle500Errors,
  handleCustomErrors,
  handleJwtErrors,
  handlePSQL400sErrors,
  handlePathNotFound,
} from "./middleware/error-handlers";

import authRoutes from "./routes/auth-routes";
import categoriesRoutes from "./routes/categories-routes";
import commentsRoutes from "./routes/comments-routes";
import quizzesRoutes from "./routes/quizzes-routes";
import usersRoutes from "./routes/users-routes";
import apiEndpointsRoutes from "./routes/api-endpoints-routes";

const app: Application = express();

const corsOptions = {
  origin: ["http://localhost:3000", "https://holistichealth.netlify.app"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use("/api/categories", categoriesRoutes);

app.use("/api/comments", commentsRoutes);

app.use("/api/quizzes", quizzesRoutes);

app.use("/api/users", usersRoutes);

app.use("/api", apiEndpointsRoutes);

app.use("/*", handlePathNotFound);

app.use(handlePSQL400sErrors);
app.use(handleCustomErrors);
app.use(handleJwtErrors);
app.use(handle500Errors);

export default app;
