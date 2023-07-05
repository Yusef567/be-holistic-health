import express, { Router } from "express";
import {
  loginUser,
  logoutUser,
  protectedController,
  refreshTokens,
} from "../controllers/auth-controllers";

const router: Router = express.Router();

router.post("/login", loginUser);

router.get("/protected", protectedController);

router.post("/refresh-token", refreshTokens);

router.post("/logout", logoutUser);

export default router;
