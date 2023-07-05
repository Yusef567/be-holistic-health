import { Request, Response, NextFunction } from "express";
import apiEndpoints from "../endpoints.json";

export const fetchApiEndpoints = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).send({ apiEndpoints });
  } catch (err) {
    next(err);
  }
};
