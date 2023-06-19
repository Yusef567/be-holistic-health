import { Request, Response, NextFunction } from "express";
import { checkCategory } from "../models/categories-models";
import { fetchQuiz, fetchQuizzes, insertQuiz } from "../models/quizzes-models";
import passport from "../passport-config";
import { User } from "../interfaces/interfaces";

export const getQuizzes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      category,
      sort_by,
      order,
      limit,
      p,
    }: {
      category?: string;
      sort_by?: string;
      order?: string;
      limit?: string;
      p?: string;
    } = req.query;

    if (category) {
      await checkCategory(category);
      const { quizzes, totalCount } = await fetchQuizzes(
        category,
        sort_by,
        order,
        limit,
        p
      );
      res.status(200).send({ quizzes, totalCount });
    } else {
      const { quizzes, totalCount } = await fetchQuizzes(
        category,
        sort_by,
        order,
        limit,
        p
      );
      res.status(200).send({ quizzes, totalCount });
    }
  } catch (err) {
    next(err);
  }
};

export const getQuiz = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { quiz_id } = req.params;
    const quiz = await fetchQuiz(quiz_id);
    res.status(200).send({ quiz });
  } catch (err) {
    next(err);
  }
};

export const postQuiz = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate(
    "jwt",
    { session: false },
    async (err: Error, user: User, info: any) => {
      try {
        if (err || !user) {
          return res.status(401).send({ msg: "Unauthorized" });
        }
        const newQuiz = req.body;
        const addedQuiz = await insertQuiz(newQuiz, user);
        res.status(201).send({ addedQuiz });
      } catch (err) {
        next(err);
      }
    }
  )(req, res, next);
};
