import { Request, Response, NextFunction } from "express";

export const handlePSQL400sErrors = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.code === "23505" && err.constraint === "users_username_key") {
    res.status(409).send({ msg: "Username already exists" });
  } else if (err.code === "23505") {
    res.status(409).send({ msg: "Duplicate value already exists" });
  } else if (err.code === "22P02") {
    res.status(400).send({ msg: "Invalid value specified" });
  } else if (err.code === "23502" && err.column) {
    const { column } = err;
    res.status(400).send({ msg: `${column} is required` });
  } else if (err.code === "23502") {
    res.status(400).send({ msg: "Required value is missing" });
  } else if (
    err.code === "23503" &&
    err.constraint === "quizzes_category_fkey"
  ) {
    res.status(404).send({ msg: "Category not found" });
  } else if (
    err.code === "23503" &&
    err.constraint === "quizzes_username_fkey"
  ) {
    res.status(404).send({ msg: "Username not found" });
  } else if (err.code === "23503") {
    res.status(404).send({ msg: "Referenced record not found" });
  } else {
    next(err);
  }
};

interface CustomError {
  status: number;
  msg: string;
}

export const handleCustomErrors = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
};

export const handleJwtErrors = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.name === "JsonWebTokenError") {
    res.status(401).send({ msg: "Invalid refresh token" });
  } else if (err.name === "TokenExpiredError") {
    res.status(401).send({ msg: "Refresh token has expired" });
  } else {
    next(err);
  }
};

export const handle500Errors = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err, "<<<---- 500 ERROR");
  res.status(500).send({ msg: "Server Error" });
};

export const handlePathNotFound = (req: Request, res: Response) => {
  res.status(404).send({ msg: "Path not found" });
};
