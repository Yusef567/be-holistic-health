import db from "../connection";

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
