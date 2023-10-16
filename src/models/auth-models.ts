import db from "../connection";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface User {
  user_id: number;
  username: string;
  password: string;
  salt: string;
  refresh_token: string;
}

export const login = async (username: string, password: string) => {
  const queryStr = "SELECT * FROM users WHERE username = $1";
  const queryResponse = await db.query(queryStr, [username]);
  const user: User = queryResponse.rows[0];

  if (!user) {
    throw { status: 401, msg: "User not found" };
  }

  const passwordMatched = await bcrypt.compare(password, user.password);

  if (!passwordMatched) {
    throw { status: 401, msg: "Incorrect password" };
  }
  const accessToken = jwt.sign(
    { id: user.user_id, username: user.username },
    process.env.JWT_SECRET as string,
    { expiresIn: "25sec" }
  );

  const refreshToken = jwt.sign(
    { id: user.user_id, username: user.username },
    process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: "1m" }
  );

  const updateRefreshTokenQuery =
    "UPDATE users SET refresh_token = $1 WHERE user_id = $2 RETURNING *";
  await db.query(updateRefreshTokenQuery, [refreshToken, user.user_id]);

  return { accessToken, refreshToken };
};

export const isRefreshTokenValid = async (user_id: number) => {
  const queryStr = "SELECT refresh_token FROM users WHERE user_id = $1";
  const queryResponse = await db.query(queryStr, [user_id]);
  const dbRefreshToken = queryResponse.rows[0];

  if (!dbRefreshToken.refresh_token) {
    throw { status: 401, msg: "Invalid refresh token" };
  }

  return true;
};

export const clearRefreshToken = async (user_id: number) => {
  const clearRefreshTokenQuery =
    "UPDATE users SET refresh_token = NULL WHERE user_id = $1 RETURNING *";

  await db.query(clearRefreshTokenQuery, [user_id]);
};
