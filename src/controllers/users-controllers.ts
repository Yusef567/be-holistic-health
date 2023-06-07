import { Request, Response, NextFunction } from "express";
import { insertUser } from "../models/users-models";
import passport from "../passport-config";

interface User {
  user_id: number;
  username: string;
  password: string;
  salt: string;
}

export const protectedController = async (req: Request, res: Response) => {
  passport.authenticate(
    "jwt",
    { session: false },
    (err: Error, user: User, info: any) => {
      if (err || !user) {
        return res.status(401).send({ msg: "Unauthorized" });
      }
      res.status(200).send({ msg: "Authenticated successfully" });
    }
  )(req, res);
};

export const postUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = req.body;
    const { username, password } = newUser;
    if (!username || !password) {
      return res
        .status(400)
        .send({ msg: "Username and password are required" });
    }
    const createdUser = await insertUser(username, password);
    return res.status(201).send({
      user: createdUser,
    });
  } catch (err) {
    next(err);
  }
};
