"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchLikedComments = exports.removeComment = exports.updateComment = exports.insertComment = exports.fetchComment = exports.fetchQuizComments = void 0;
const connection_1 = __importDefault(require("../connection"));
const fetchQuizComments = (quiz_id, limit = "10", page = "1") => __awaiter(void 0, void 0, void 0, function* () {
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
    }
    else if (!isNumber.test(page)) {
        throw { status: 400, msg: "Invalid page query specified" };
    }
    const offset = (Number(page) - 1) * Number(limit);
    let limitQueryStr = ` LIMIT ${limit} OFFSET ${offset}`;
    commentsQueryStr += limitQueryStr;
    const commentsQueryResponse = yield connection_1.default.query(commentsQueryStr, [quiz_id]);
    const comments = commentsQueryResponse.rows;
    const totalCountQueryStr = `SELECT COUNT(*) AS total_count FROM (${commentsQueryStr.replace(limitQueryStr, "")}) AS subquery`;
    const totalQueryResponse = yield connection_1.default.query(totalCountQueryStr, [quiz_id]);
    const totalCount = Number(totalQueryResponse.rows[0].total_count);
    return { comments, totalCount };
});
exports.fetchQuizComments = fetchQuizComments;
const fetchComment = (comment_id) => __awaiter(void 0, void 0, void 0, function* () {
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
    const commentQueryResponse = yield connection_1.default.query(commentQueryStr, [comment_id]);
    const commentInfo = commentQueryResponse.rows[0];
    if (!commentInfo) {
        throw { status: 404, msg: "comment_id not found" };
    }
    return commentInfo;
});
exports.fetchComment = fetchComment;
const insertComment = (quiz_id, comment, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { comment_text } = comment;
    const { username, user_id } = user;
    const isNumber = /^[0-9]+$/;
    if (!isNumber.test(quiz_id)) {
        throw { status: 400, msg: "Invalid quiz_id specified" };
    }
    else if (!Object.keys(comment).length) {
        throw { status: 400, msg: "Empty comment object" };
    }
    else if (!comment_text) {
        throw { status: 400, msg: "comment_text is required" };
    }
    const insertCommentQueryStr = `
  INSERT INTO comments (quiz_id, comment_text, username, user_id) 
  VALUES ($1, $2, $3, $4) RETURNING *
  `;
    const insertCommentResponse = yield connection_1.default.query(insertCommentQueryStr, [
        quiz_id,
        comment_text,
        username,
        user_id,
    ]);
    const insertedCommentObj = insertCommentResponse === null || insertCommentResponse === void 0 ? void 0 : insertCommentResponse.rows[0];
    if (!insertedCommentObj) {
        throw { status: 404, msg: "quiz_id not found" };
    }
    insertedCommentObj.likes = 0;
    return insertedCommentObj;
});
exports.insertComment = insertComment;
const updateComment = (comment_id, updatedLikes, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { inc_likes } = updatedLikes;
    const { user_id } = user;
    if (inc_likes === undefined) {
        throw { status: 400, msg: "inc_likes is required" };
    }
    else if (inc_likes !== true && inc_likes !== false) {
        throw {
            status: 400,
            msg: "Invalid value for specified inc_likes. Expected true or false",
        };
    }
    yield (0, exports.fetchComment)(comment_id);
    const userLikedStatusQuery = `
  SELECT *
  FROM likes
  WHERE user_id = $1 AND content_id = $2 AND content_type = 'comment';
  `;
    const likedStatusResponse = yield connection_1.default.query(userLikedStatusQuery, [
        user_id,
        comment_id,
    ]);
    const userLikedStatus = likedStatusResponse.rows[0];
    if ((userLikedStatus === null || userLikedStatus === void 0 ? void 0 : userLikedStatus.like_value) === 1 && inc_likes) {
        throw { status: 400, msg: "You have already liked this comment" };
    }
    else if ((userLikedStatus === null || userLikedStatus === void 0 ? void 0 : userLikedStatus.like_value) === -1 && !inc_likes) {
        throw { status: 400, msg: "You have already disliked this comment" };
    }
    if (!userLikedStatus && inc_likes) {
        const updateLikesQueryStr = `
    INSERT INTO likes (content_id, content_type, user_id, like_value)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
        const updateLikesResponse = yield connection_1.default.query(updateLikesQueryStr, [
            comment_id,
            "comment",
            user_id,
            1,
        ]);
        const commentInfo = yield (0, exports.fetchComment)(comment_id);
        return commentInfo;
    }
    else if (!userLikedStatus && !inc_likes) {
        const updateLikesQueryStr = `
   INSERT INTO likes (content_id, content_type, user_id, like_value)
   VALUES ($1, $2, $3, $4)
   RETURNING *
 `;
        const updateLikesResponse = yield connection_1.default.query(updateLikesQueryStr, [
            comment_id,
            "comment",
            user_id,
            -1,
        ]);
        const commentInfo = yield (0, exports.fetchComment)(comment_id);
        return commentInfo;
    }
    else if (((userLikedStatus === null || userLikedStatus === void 0 ? void 0 : userLikedStatus.like_value) === 1 || (userLikedStatus === null || userLikedStatus === void 0 ? void 0 : userLikedStatus.like_value) === -1) &&
        (inc_likes || !inc_likes)) {
        const removeLikesQueryStr = `
    DELETE FROM likes
    WHERE content_id = $1 AND content_type = $2 AND user_id = $3
    RETURNING *
  `;
        const removeLikesResponse = yield connection_1.default.query(removeLikesQueryStr, [
            comment_id,
            "comment",
            user_id,
        ]);
        const commentInfo = yield (0, exports.fetchComment)(comment_id);
        return commentInfo;
    }
});
exports.updateComment = updateComment;
const removeComment = (comment_id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteLikesQuery = `
  DELETE FROM likes 
  WHERE content_id = $1 AND content_type = 'comment'
  RETURNING *
`;
    const deleteLikesPromise = connection_1.default.query(deleteLikesQuery, [comment_id]);
    const deleteComment = `
  DELETE FROM comments 
  WHERE comment_id = $1 
  RETURNING *
`;
    const deleteCommentPromise = connection_1.default.query(deleteComment, [comment_id]);
    yield Promise.all([deleteLikesPromise, deleteCommentPromise]);
    return true;
});
exports.removeComment = removeComment;
const fetchLikedComments = (quiz_id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const isNumber = /^[0-9]+$/;
    if (!isNumber.test(quiz_id)) {
        throw { status: 400, msg: "Invalid quiz_id specified" };
    }
    const quizQueryStr = `
  SELECT * FROM quizzes 
  WHERE quiz_id = $1
  `;
    const checkQuizExists = yield connection_1.default.query(quizQueryStr, [quiz_id]);
    const foundQuiz = checkQuizExists.rows[0];
    if (!foundQuiz) {
        throw { status: 404, msg: "quiz_id not found" };
    }
    const commentsQuery = `
  SELECT * FROM comments WHERE quiz_id = $1
  `;
    const { rows } = yield connection_1.default.query(commentsQuery, [quiz_id]);
    const commentIds = rows.map(({ comment_id }) => comment_id);
    const likedCommentsQuery = `
  SELECT *, content_id AS comment_id FROM likes
  WHERE content_id = ANY($1::int[]) AND content_type = 'comment'
  AND user_id = $2
  `;
    const likedCommentsResponse = yield connection_1.default.query(likedCommentsQuery, [
        commentIds,
        user.user_id,
    ]);
    const likedData = likedCommentsResponse.rows;
    const likesData = commentIds.map((comment_id) => {
        const votedComment = likedData.find((comment) => comment.comment_id === comment_id);
        if (votedComment) {
            if (votedComment.like_value === 1) {
                return { comment_id, hasLiked: true };
            }
            else if (votedComment.like_value === -1) {
                return { comment_id, hasLiked: false };
            }
        }
        return { comment_id, hasLiked: null };
    });
    return { quiz_id: Number(quiz_id), votes: likesData };
});
exports.fetchLikedComments = fetchLikedComments;
