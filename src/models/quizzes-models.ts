import db from "../connection";

export const fetchQuizzes = async (
  category?: string,
  sort_by = "release_date",
  order = "desc",
  limit = "10",
  page = "1"
) => {
  const queryParams = [];
  let quizzesQueryStr = `SELECT q.quiz_id, q.quiz_name, q.category, q.quiz_img, q.description, q.username, q.release_date,
      CAST(COUNT(l.like_id) AS INT) AS likes
      FROM quizzes q
      LEFT JOIN likes l ON l.content_id = q.quiz_id AND l.content_type = 'quiz'`;

  const validSortBy = ["quiz_name", "category", "release_date", "likes"];
  const validOrderBy = ["desc", "asc"];

  if (!validSortBy.includes(sort_by)) {
    throw { status: 400, msg: "Invalid column specified" };
  } else if (!validOrderBy.includes(order)) {
    throw { status: 400, msg: "Invalid order query" };
  }

  if (category) {
    let categoryQueryStr = ` WHERE q.category = $1`;
    quizzesQueryStr += categoryQueryStr;
    queryParams.push(category);
  }

  let orderByQueryStr = ` GROUP BY q.quiz_id ORDER BY ${sort_by} ${order}`;
  quizzesQueryStr += orderByQueryStr;

  const isNumber = /^[0-9]+$/;

  if (!isNumber.test(limit)) {
    throw { status: 400, msg: "Invalid limit query specified" };
  } else if (!isNumber.test(page)) {
    throw { status: 400, msg: "Invalid page query specified" };
  }

  const offset = (Number(page) - 1) * Number(limit);

  let limitQueryStr = ` LIMIT ${limit} OFFSET ${offset}`;
  quizzesQueryStr += limitQueryStr;

  const totalCountQueryStr = `SELECT COUNT(*) AS total_count FROM (${quizzesQueryStr.replace(
    limitQueryStr,
    ""
  )}) AS subquery`;
  const totalQueryResponse = await db.query(totalCountQueryStr, queryParams);
  const totalCount = Number(totalQueryResponse.rows[0].total_count);

  const quizzesQueryResponse = await db.query(quizzesQueryStr, queryParams);
  const { rows } = quizzesQueryResponse;

  return { quizzes: rows, totalCount };
};
