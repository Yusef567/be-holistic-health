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
exports.clearRefreshToken = exports.isRefreshTokenValid = exports.login = void 0;
const connection_1 = __importDefault(require("../connection"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const queryStr = "SELECT * FROM users WHERE username = $1";
    const queryResponse = yield connection_1.default.query(queryStr, [username]);
    const user = queryResponse.rows[0];
    if (!user) {
        throw { status: 401, msg: "User not found" };
    }
    const passwordMatched = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordMatched) {
        throw { status: 401, msg: "Incorrect password" };
    }
    const accessToken = jsonwebtoken_1.default.sign({ id: user.user_id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "25sec" });
    const refreshToken = jsonwebtoken_1.default.sign({ id: user.user_id, username: user.username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1m" });
    const updateRefreshTokenQuery = "UPDATE users SET refresh_token = $1 WHERE user_id = $2 RETURNING *";
    yield connection_1.default.query(updateRefreshTokenQuery, [refreshToken, user.user_id]);
    return { accessToken, refreshToken };
});
exports.login = login;
const isRefreshTokenValid = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const queryStr = "SELECT refresh_token FROM users WHERE user_id = $1";
    const queryResponse = yield connection_1.default.query(queryStr, [user_id]);
    const dbRefreshToken = queryResponse.rows[0];
    if (!dbRefreshToken.refresh_token) {
        throw { status: 401, msg: "Invalid refresh token" };
    }
    return true;
});
exports.isRefreshTokenValid = isRefreshTokenValid;
const clearRefreshToken = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const clearRefreshTokenQuery = "UPDATE users SET refresh_token = NULL WHERE user_id = $1 RETURNING *";
    yield connection_1.default.query(clearRefreshTokenQuery, [user_id]);
});
exports.clearRefreshToken = clearRefreshToken;
