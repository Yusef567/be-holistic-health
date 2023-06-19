import db from "../connection";
import { User } from "../interfaces/interfaces";

export const fetchQuizComments = async (
  quiz_id: string,
  limit = "10",
  page = "1"
) => {
  const isNumber = /^[0-9]+$/;

  if (!isNumber.test(quiz_id)) {
    throw { status: 400, msg: "Invalid quiz_id specified" };
  }

  let commentsQueryStr = `SELECT * FROM comments WHERE quiz_id = $1 ORDER BY created_at DESC`;

  if (!isNumber.test(limit)) {
    throw { status: 400, msg: "Invalid limit query specified" };
  } else if (!isNumber.test(page)) {
    throw { status: 400, msg: "Invalid page query specified" };
  }

  const offset = (Number(page) - 1) * Number(limit);

  let limitQueryStr = ` LIMIT ${limit} OFFSET ${offset}`;
  commentsQueryStr += limitQueryStr;

  const commentsQueryResponse = await db.query(commentsQueryStr, [quiz_id]);
  const comments = commentsQueryResponse.rows;

  const totalCountQueryStr = `SELECT COUNT(*) AS total_count FROM (${commentsQueryStr.replace(
    limitQueryStr,
    ""
  )}) AS subquery`;
  const totalQueryResponse = await db.query(totalCountQueryStr, [quiz_id]);
  const totalCount = Number(totalQueryResponse.rows[0].total_count);

  return { comments, totalCount };
};

interface Comment {
  comment_text: string;
}

export const insertComment = async (
  quiz_id: string,
  comment: Comment,
  user: User
) => {
  const { comment_text } = comment;
  const { username, user_id } = user;
  const isNumber = /^[0-9]+$/;

  if (!isNumber.test(quiz_id)) {
    throw { status: 400, msg: "Invalid quiz_id specified" };
  } else if (!Object.keys(comment).length) {
    throw { status: 400, msg: "Empty comment object" };
  } else if (!comment_text) {
    throw { status: 400, msg: "comment_text is required" };
  }

  const insertCommentQueryStr = `
  INSERT INTO comments (quiz_id, comment_text, username, user_id) 
  VALUES ($1, $2, $3, $4) RETURNING *
  `;

  const insertCommentResponse = await db.query(insertCommentQueryStr, [
    quiz_id,
    comment_text,
    username,
    user_id,
  ]);

  const insertedCommentObj = insertCommentResponse.rows[0];
  return insertedCommentObj;
};
