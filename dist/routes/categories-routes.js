"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_controllers_1 = require("../controllers/categories-controllers");
const router = express_1.default.Router();
router.get("/", categories_controllers_1.getCategories);
exports.default = router;
