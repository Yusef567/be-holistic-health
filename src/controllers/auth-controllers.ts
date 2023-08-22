import { Request, Response, NextFunction } from "express";
import { login } from "../models/auth-models";
import jwt, { JwtPayload } from "jsonwebtoken";
import db from "../connection";
import passport from "../passport-config";

if (!process.env.REFRESH_TOKEN_SECRET) {
  throw new Error("REFRESH_TOKEN_SECRET not set");
}

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .send({ msg: "Username and password are required" });
    }
    const { accessToken, refreshToken } = await login(username, password);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      // secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).send({ accessToken });
  } catch (err) {
    next(err);
  }
};

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

export const refreshTokens = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).send({ msg: "Refresh token not found" });
    }

    const refreshTokenPayload = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET as string
    ) as JwtPayload;

    if (refreshTokenPayload?.id) {
      const newAccessToken = jwt.sign(
        { id: refreshTokenPayload.id },
        process.env.JWT_SECRET as string,
        { expiresIn: "15m" }
      );

      res.status(200).send({ accessToken: newAccessToken });
    }
  } catch (err) {
    next(err);
  }
};

export const logoutUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).send({ msg: "Refresh token not found" });
    }

    const refreshTokenPayload = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET as string
    ) as JwtPayload;
    if (refreshTokenPayload?.id) {
      const clearRefreshTokenQuery =
        "UPDATE users SET refresh_token = NULL WHERE user_id = $1 RETURNING *";
      await db.query(clearRefreshTokenQuery, [refreshTokenPayload.id]);
    }

    res.clearCookie("refreshToken");

    res.status(200).send({ msg: "Logout successful" });
  } catch (err) {
    next(err);
  }
};
