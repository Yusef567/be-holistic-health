import db from "../connection";
import passwordHasher from "../utils/passwordUtils";

export const insertUser = async (usernamePara: string, password: string) => {
  const encryptedPassword = await passwordHasher(password);
  const { salt, hashedPassword } = encryptedPassword;
  const insertUserQueryStr = `INSERT INTO users (username, password, salt) VALUES ($1,$2,$3) RETURNING *`;
  const insertedUserResponse = await db.query(insertUserQueryStr, [
    usernamePara,
    hashedPassword,
    salt,
  ]);
  const newUser = insertedUserResponse.rows[0];
  const { user_id, username } = newUser;
  return { user_id, username };
};
