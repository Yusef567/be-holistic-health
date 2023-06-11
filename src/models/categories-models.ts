import db from "../connection";

export const fetchAllCategories = async () => {
  const categoriesQueryStr = "SELECT * FROM categories";
  const categories = await db.query(categoriesQueryStr);
  return categories.rows;
};

export const checkCategory = async (category: string) => {
  const categoryQueryStr = `SELECT * FROM categories WHERE category = $1`;
  const queryResponse = await db.query(categoryQueryStr, [category]);
  const foundCategory = queryResponse.rows[0];
  if (!foundCategory) {
    throw { status: 404, msg: "Category not found" };
  }
  return foundCategory;
};
