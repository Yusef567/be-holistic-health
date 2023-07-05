import express, { Router } from "express";
import { fetchApiEndpoints } from "../controllers/api-endpoints-controllers";

const router: Router = express.Router();

router.get("/", fetchApiEndpoints);

export default router;
