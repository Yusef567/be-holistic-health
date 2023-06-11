import { Request, Response, NextFunction } from "express";
import { fetchAllCategories } from "../models/categories-models";

export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await fetchAllCategories();
    res.status(200).send({ categories });
  } catch (err) {
    next(err);
  }
};
