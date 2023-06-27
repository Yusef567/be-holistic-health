import db from "../connection";
import { UpdatedLikes, User } from "../interfaces/interfaces";

export const fetchQuizComments = async (
  quiz_id: string,
  limit = "10",
  page = "1"
) => {
  const isNumber = /^[0-9]+$/;

  if (!isNumber.test(quiz_id)) {
    throw { status: 400, msg: "Invalid quiz_id specified" };
  }

  let commentsQueryStr = `
  SELECT c.*, CAST(COALESCE(SUM(l.like_value), 0) AS INT) AS likes
  FROM comments c
  LEFT JOIN likes l ON l.content_id = c.comment_id AND l.content_type = 'comment'
  WHERE c.quiz_id = $1
  GROUP BY c.comment_id
  ORDER BY c.created_at DESC
  `;

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

export const fetchComment = async (comment_id: string) => {
  const isNumber = /^[0-9]+$/;

  if (!isNumber.test(comment_id)) {
    throw { status: 400, msg: "Invalid comment_id specified" };
  }

  const commentQueryStr = `
  SELECT c.*, CAST(COALESCE(SUM(l.like_value), 0) AS INT)AS likes
  FROM comments c
  LEFT JOIN likes l ON l.content_id = c.comment_id AND l.content_type = 'comment'
  WHERE c.comment_id = $1
  GROUP BY c.comment_id
  `;

  const commentQueryResponse = await db.query(commentQueryStr, [comment_id]);
  const commentInfo = commentQueryResponse.rows[0];

  if (!commentInfo) {
    throw { status: 404, msg: "comment_id not found" };
  }
  return commentInfo;
};

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

  const insertedCommentObj = insertCommentResponse?.rows[0];
  if (!insertedCommentObj) {
    throw { status: 404, msg: "quiz_id not found" };
  }
  insertedCommentObj.likes = 0;
  return insertedCommentObj;
};

export const updateComment = async (
  comment_id: string,
  updatedLikes: UpdatedLikes,
  user: User
) => {
  const { inc_likes } = updatedLikes;
  const { user_id } = user;

  if (inc_likes === undefined) {
    throw { status: 400, msg: "inc_likes is required" };
  } else if (inc_likes !== true && inc_likes !== false) {
    throw {
      status: 400,
      msg: "Invalid value for specified inc_likes. Expected true or false",
    };
  }

  await fetchComment(comment_id);

  const userLikedStatusQuery = `
  SELECT *
  FROM likes
  WHERE user_id = $1 AND content_id = $2 AND content_type = 'comment';
  `;
  const likedStatusResponse = await db.query(userLikedStatusQuery, [
    user_id,
    comment_id,
  ]);

  const userLikedStatus = likedStatusResponse.rows[0];

  if (userLikedStatus?.like_value === 1 && inc_likes) {
    throw { status: 400, msg: "You have already liked this comment" };
  } else if (userLikedStatus?.like_value === -1 && !inc_likes) {
    throw { status: 400, msg: "You have already disliked this comment" };
  }

  if (!userLikedStatus && inc_likes) {
    const updateLikesQueryStr = `
    INSERT INTO likes (content_id, content_type, user_id, like_value)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
    const updateLikesResponse = await db.query(updateLikesQueryStr, [
      comment_id,
      "comment",
      user_id,
      1,
    ]);
    const commentInfo = await fetchComment(comment_id);
    return commentInfo;
  } else if (!userLikedStatus && !inc_likes) {
    const updateLikesQueryStr = `
   INSERT INTO likes (content_id, content_type, user_id, like_value)
   VALUES ($1, $2, $3, $4)
   RETURNING *
 `;
    const updateLikesResponse = await db.query(updateLikesQueryStr, [
      comment_id,
      "comment",
      user_id,
      -1,
    ]);
    const commentInfo = await fetchComment(comment_id);
    return commentInfo;
  } else if (
    (userLikedStatus?.like_value === 1 || userLikedStatus?.like_value === -1) &&
    (inc_likes || !inc_likes)
  ) {
    const removeLikesQueryStr = `
    DELETE FROM likes
    WHERE content_id = $1 AND content_type = $2 AND user_id = $3
    RETURNING *
  `;
    const removeLikesResponse = await db.query(removeLikesQueryStr, [
      comment_id,
      "comment",
      user_id,
    ]);

    const commentInfo = await fetchComment(comment_id);
    return commentInfo;
  }
};

export const removeComment = async (comment_id: string) => {
  const deleteLikesQuery = `
  DELETE FROM likes 
  WHERE content_id = $1 AND content_type = 'comment'
  RETURNING *
`;
  const deleteLikesPromise = db.query(deleteLikesQuery, [comment_id]);

  const deleteComment = `
  DELETE FROM comments 
  WHERE comment_id = $1 
  RETURNING *
`;

  const deleteCommentPromise = db.query(deleteComment, [comment_id]);

  await Promise.all([deleteLikesPromise, deleteCommentPromise]);

  return true;
};

export const fetchLikedComments = async (quiz_id: string, user: User) => {
  const isNumber = /^[0-9]+$/;

  if (!isNumber.test(quiz_id)) {
    throw { status: 400, msg: "Invalid quiz_id specified" };
  }

  const quizQueryStr = `
  SELECT * FROM quizzes 
  WHERE quiz_id = $1
  `;
  const checkQuizExists = await db.query(quizQueryStr, [quiz_id]);
  const foundQuiz = checkQuizExists.rows[0];

  if (!foundQuiz) {
    throw { status: 404, msg: "quiz_id not found" };
  }

  const commentsQuery = `
  SELECT * FROM comments WHERE quiz_id = $1
  `;
  const { rows } = await db.query(commentsQuery, [quiz_id]);
  const commentIds = rows.map(({ comment_id }) => comment_id);

  const likedCommentsQuery = `
  SELECT *, content_id AS comment_id FROM likes
  WHERE content_id = ANY($1::int[]) AND content_type = 'comment'
  AND user_id = $2
  `;
  const likedCommentsResponse = await db.query(likedCommentsQuery, [
    commentIds,
    user.user_id,
  ]);
  const likedData = likedCommentsResponse.rows;

  const likesData = commentIds.map((comment_id) => {
    const votedComment = likedData.find(
      (comment) => comment.comment_id === comment_id
    );
    if (votedComment) {
      if (votedComment.like_value === 1) {
        return { comment_id, hasLiked: true };
      } else if (votedComment.like_value === -1) {
        return { comment_id, hasLiked: false };
      }
    }
    return { comment_id, hasLiked: null };
  });

  return { quiz_id: Number(quiz_id), votes: likesData };
};
