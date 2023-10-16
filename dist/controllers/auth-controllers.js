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
exports.logoutUser = exports.refreshTokens = exports.protectedController = exports.loginUser = void 0;
const auth_models_1 = require("../models/auth-models");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const passport_config_1 = __importDefault(require("../passport-config"));
if (!process.env.REFRESH_TOKEN_SECRET) {
    throw new Error("REFRESH_TOKEN_SECRET not set");
}
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res
                .status(400)
                .send({ msg: "Username and password are required" });
        }
        const { accessToken, refreshToken } = yield (0, auth_models_1.login)(username, password);
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            path: "/api/auth",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.status(200).send({ accessToken });
    }
    catch (err) {
        next(err);
    }
});
exports.loginUser = loginUser;
const protectedController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    passport_config_1.default.authenticate("jwt", { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(401).send({ msg: "Unauthorized" });
        }
        res.status(200).send({ msg: "Authenticated successfully" });
    })(req, res);
});
exports.protectedController = protectedController;
const refreshTokens = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(401).send({ msg: "Refresh token not found" });
    }
    jsonwebtoken_1.default.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (jwtError, refreshTokenPayload) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (jwtError) {
                return next(jwtError);
            }
            if (refreshTokenPayload === null || refreshTokenPayload === void 0 ? void 0 : refreshTokenPayload.id) {
                yield (0, auth_models_1.isRefreshTokenValid)(refreshTokenPayload === null || refreshTokenPayload === void 0 ? void 0 : refreshTokenPayload.id);
                const newAccessToken = jsonwebtoken_1.default.sign({
                    id: refreshTokenPayload.id,
                    username: refreshTokenPayload.username,
                }, process.env.JWT_SECRET, { expiresIn: "1m" });
                res.status(200).send({ accessToken: newAccessToken });
            }
        }
        catch (err) {
            next(err);
        }
    }));
});
exports.refreshTokens = refreshTokens;
const logoutUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).send({ msg: "Refresh token not found" });
        }
        const refreshTokenPayload = jsonwebtoken_1.default.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        if (refreshTokenPayload === null || refreshTokenPayload === void 0 ? void 0 : refreshTokenPayload.id) {
            yield (0, auth_models_1.clearRefreshToken)(refreshTokenPayload.id);
            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: true,
                sameSite: "None",
                path: "/api/auth",
            });
            res.status(200).send({ msg: "Logout successful" });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.logoutUser = logoutUser;
