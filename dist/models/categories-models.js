"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCategory = exports.fetchAllCategories = void 0;
const connection_1 = __importDefault(require("../connection"));
const fetchAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const categoriesQueryStr = "SELECT * FROM categories";
    const categories = yield connection_1.default.query(categoriesQueryStr);
    return categories.rows;
});
exports.fetchAllCategories = fetchAllCategories;
const checkCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryQueryStr = `SELECT * FROM categories WHERE category = $1`;
    const queryResponse = yield connection_1.default.query(categoryQueryStr, [category]);
    const foundCategory = queryResponse.rows[0];
    if (!foundCategory) {
        throw { status: 404, msg: "Category not found" };
    }
    return foundCategory;
});
exports.checkCategory = checkCategory;
