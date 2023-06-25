import { Request, Response, NextFunction } from "express";
import {
  fetchComment,
  fetchQuizComments,
  insertComment,
  removeComment,
  updateComment,
} from "../models/comments-models";
import { checkQuizIsValid } from "../models/quizzes-models";
import passport from "../passport-config";
import { User } from "../interfaces/interfaces";

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

export const postComment = async (
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
        const { quiz_id } = req.params;
        const newComment = req.body;
        const comment = await insertComment(quiz_id, newComment, user);
        res.status(201).send({ comment });
      } catch (err) {
        next(err);
      }
    }
  )(req, res, next);
};

export const patchComment = async (
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
        const { comment_id } = req.params;
        const updatedLikes = req.body;
        const comment = await updateComment(comment_id, updatedLikes, user);
        res.status(201).send({ comment });
      } catch (err) {
        next(err);
      }
    }
  )(req, res, next);
};

export const deleteComment = async (
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
        const { comment_id } = req.params;
        const comment = await fetchComment(comment_id);
        if (comment.user_id !== user.user_id) {
          return res.status(403).send({
            msg: "You are not authorized to delete this comment",
          });
        }
        await removeComment(comment_id);
        res.sendStatus(204);
      } catch (err) {
        next(err);
      }
    }
  )(req, res, next);
};
