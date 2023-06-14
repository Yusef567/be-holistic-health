import { Request, Response, NextFunction } from "express";
import { fetchQuizComments } from "../models/comments-models";
import { checkQuizIsValid } from "../models/quizzes-models";

export const getQuizComments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { quiz_id } = req.params;
    const { limit, p }: { limit?: string; p?: string } = req.query;
    await checkQuizIsValid(quiz_id);
    const { comments, totalCount } = await fetchQuizComments(quiz_id, limit, p);
    res.status(200).send({ comments, totalCount });
  } catch (err) {
    next(err);
  }
};
