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
} from "./middleware/error-handlers";

const app: Application = express();

app.use(express.json());

app.use(cookieParser());

app.post("/api/login", loginUser);

app.get("/api/protected", protectedController);

app.post("/api/users", postUser);

app.post("/api/refresh-token", refreshTokens);

app.post("/api/logout", logoutUser);

app.use(handlePSQL400sErrors);
app.use(handleCustomErrors);
app.use(handleJwtErrors);
app.use(handle500Errors);

export default app;
