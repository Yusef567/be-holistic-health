import { Request, Response, NextFunction } from "express";
import { insertUser } from "../models/users-models";

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
