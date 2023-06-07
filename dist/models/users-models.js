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
exports.insertUser = void 0;
const connection_1 = __importDefault(require("../connection"));
const passwordUtils_1 = __importDefault(require("../utils/passwordUtils"));
const insertUser = (usernamePara, password) => __awaiter(void 0, void 0, void 0, function* () {
    const encryptedPassword = yield (0, passwordUtils_1.default)(password);
    const { salt, hashedPassword } = encryptedPassword;
    const insertUserQueryStr = `INSERT INTO users (username, password, salt) VALUES ($1,$2,$3) RETURNING *`;
    const insertedUserResponse = yield connection_1.default.query(insertUserQueryStr, [
        usernamePara,
        hashedPassword,
        salt,
    ]);
    const newUser = insertedUserResponse.rows[0];
    const { user_id, username } = newUser;
    return { user_id, username };
});
exports.insertUser = insertUser;
