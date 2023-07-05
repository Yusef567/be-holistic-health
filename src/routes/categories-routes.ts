import express, { Router } from "express";
import { getCategories } from "../controllers/categories-controllers";

const router: Router = express.Router();

router.get("/", getCategories);

export default router;
