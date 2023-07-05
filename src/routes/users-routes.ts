import express, { Router } from "express";
import { postUser } from "../controllers/users-controllers";

const router: Router = express.Router();

router.post("/", postUser);

export default router;
