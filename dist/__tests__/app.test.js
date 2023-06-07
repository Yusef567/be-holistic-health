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
const connection_1 = __importDefault(require("../connection"));
const seed_1 = __importDefault(require("../seeds/seed"));
const index_1 = __importDefault(require("../data/test-data/index"));
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let accessToken;
let refreshToken;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    const testUser = {
        username: "Alex456",
        password: "Password123",
    };
    const response = yield (0, supertest_1.default)(app_1.default)
        .post("/api/login")
        .send(testUser)
        .expect(200);
    accessToken = response.body.accessToken;
    const refreshTokenCookie = response.headers["set-cookie"].find((cookie) => cookie.includes("refreshToken"));
    refreshToken = refreshTokenCookie.split("=")[1].split(";")[0];
}));
beforeEach(() => {
    return (0, seed_1.default)(index_1.default);
});
afterAll(() => {
    connection_1.default.end();
});
describe("POST /api/login", () => {
    it("200: should respond with an access token and set the refresh token as an HTTP-only cookie", () => __awaiter(void 0, void 0, void 0, function* () {
        const testUser = {
            username: "Alex456",
            password: "Password123",
        };
        const response = yield (0, supertest_1.default)(app_1.default)
            .post("/api/login")
            .send(testUser)
            .expect(200);
        const refreshTokenCookie = response.headers["set-cookie"].find((cookie) => cookie.includes("refreshToken"));
        expect(refreshTokenCookie).toContain("HttpOnly");
        expect(response.body).toEqual({ accessToken: expect.any(String) });
        expect(typeof refreshTokenCookie).toBe("string");
    }));
    it("400: should respond with a msg if missing the username or password", () => __awaiter(void 0, void 0, void 0, function* () {
        const { body } = yield (0, supertest_1.default)(app_1.default).post("/api/login").send({}).expect(400);
        expect(body.msg).toBe("Username and password are required");
    }));
    it("401: should respond with a msg if passed a non existent user", () => __awaiter(void 0, void 0, void 0, function* () {
        const testUser = {
            username: "Harry20",
            password: "Password123",
        };
        const { body } = yield (0, supertest_1.default)(app_1.default)
            .post("/api/login")
            .send(testUser)
            .expect(401);
        expect(body.msg).toBe("User not found");
    }));
    it("401: should respond with a msg if passed an incorrect password", () => __awaiter(void 0, void 0, void 0, function* () {
        const testUser = {
            username: "Alex456",
            password: "Password1",
        };
        const { body } = yield (0, supertest_1.default)(app_1.default)
            .post("/api/login")
            .send(testUser)
            .expect(401);
        expect(body.msg).toBe("Incorrect password");
    }));
});
describe("GET /api/protected", () => {
    it("200: should respond with a msg of Authenticated successfully if the JWT access token is valid", () => __awaiter(void 0, void 0, void 0, function* () {
        const { body: { msg }, } = yield (0, supertest_1.default)(app_1.default)
            .get("/api/protected")
            .set("Authorization", `Bearer ${accessToken}`)
            .expect(200);
        expect(msg).toBe("Authenticated successfully");
    }));
    it("401: should respond with a msg of Unauthorized if the JWT access token is invalid", () => __awaiter(void 0, void 0, void 0, function* () {
        const invalidToken = "helloWorld";
        const { body: { msg }, } = yield (0, supertest_1.default)(app_1.default)
            .get("/api/protected")
            .set("Authorization", `Bearer ${invalidToken}`)
            .expect(401);
        expect(msg).toBe("Unauthorized");
    }));
    it("401: should respond with a msg of Unauthorized if the JWT access token is missing ", () => __awaiter(void 0, void 0, void 0, function* () {
        const { body: { msg }, } = yield (0, supertest_1.default)(app_1.default)
            .get("/api/protected")
            .set("Authorization", "Bearer")
            .expect(401);
        expect(msg).toBe("Unauthorized");
    }));
    it("401: should respond with a msg of Unauthorized if the JWT access token has expired", () => __awaiter(void 0, void 0, void 0, function* () {
        const expiredAccessToken = jsonwebtoken_1.default.sign({ id: 2 }, process.env.JWT_SECRET, {
            expiresIn: "1ms",
        });
        const { body: { msg }, } = yield (0, supertest_1.default)(app_1.default)
            .get("/api/protected")
            .set("Authorization", `Bearer ${expiredAccessToken}`)
            .expect(401);
        expect(msg).toBe("Unauthorized");
    }));
});
describe("POST /api/users", () => {
    it("201: should respond with the newly created user object with the correct properties", () => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = {
            username: "John123",
            password: "Water123",
        };
        const { body } = yield (0, supertest_1.default)(app_1.default)
            .post("/api/users")
            .send(newUser)
            .expect(201);
        const { user } = body;
        expect(user).toEqual({ user_id: 3, username: "John123" });
    }));
    it("400: should repsond with a msg if the username or password properties are missing", () => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = {
            username: "John123",
        };
        const { body } = yield (0, supertest_1.default)(app_1.default)
            .post("/api/users")
            .send(newUser)
            .expect(400);
        expect(body.msg).toBe("Username and password are required");
    }));
    it("400: should respond a msg if sent an empty username or password", () => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = {
            username: "",
            password: "Password123",
        };
        const { body } = yield (0, supertest_1.default)(app_1.default)
            .post("/api/users")
            .send(newUser)
            .expect(400);
        expect(body.msg).toBe("Username and password are required");
    }));
    it("409: should respond with a msg if passed a username that already exists", () => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = {
            username: "Alex456",
            password: "newPassword123",
        };
        const { body } = yield (0, supertest_1.default)(app_1.default)
            .post("/api/users")
            .send(newUser)
            .expect(409);
        expect(body.msg).toBe("Username already exists");
    }));
});
describe("POST /api/refresh-token", () => {
    it("200: should respond with a new access token if passed a valid refresh token", () => __awaiter(void 0, void 0, void 0, function* () {
        const { body } = yield (0, supertest_1.default)(app_1.default)
            .post("/api/refresh-token")
            .set("Cookie", `refreshToken=${refreshToken}`)
            .expect(200);
        const { accessToken } = body;
        expect(typeof accessToken).toBe("string");
        const protectedRequest = yield (0, supertest_1.default)(app_1.default)
            .get("/api/protected")
            .set("Authorization", `Bearer ${accessToken}`)
            .expect(200);
        expect(protectedRequest.body.msg).toBe("Authenticated successfully");
    }));
    it("401: should respond with a msg if the refresh token cookie is missing", () => __awaiter(void 0, void 0, void 0, function* () {
        const { body } = yield (0, supertest_1.default)(app_1.default).post("/api/refresh-token").expect(401);
        expect(body.msg).toBe("Refresh token not found");
    }));
    it("401: should respond with a msg if passed an invalid refresh token", () => __awaiter(void 0, void 0, void 0, function* () {
        const invalidRefreshToken = "hello-world";
        const { body } = yield (0, supertest_1.default)(app_1.default)
            .post("/api/refresh-token")
            .set("Cookie", `refreshToken=${invalidRefreshToken}`)
            .expect(401);
        expect(body.msg).toBe("Invalid refresh token");
    }));
    it("401: should respond with a msg if passed an expired refresh token", () => __awaiter(void 0, void 0, void 0, function* () {
        const expiredRefreshToken = jsonwebtoken_1.default.sign({ id: 2 }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1ms" });
        const { body } = yield (0, supertest_1.default)(app_1.default)
            .post("/api/refresh-token")
            .set("Cookie", `refreshToken=${expiredRefreshToken}`)
            .expect(401);
        expect(body.msg).toBe("Refresh token has expired");
    }));
});
describe("POST /api/logout", () => {
    it("200: should respond with a success msg if the refresh token is valid", () => __awaiter(void 0, void 0, void 0, function* () {
        const testUser = {
            username: "Tom123",
            password: "StrongPassword",
        };
        const loginResponse = yield (0, supertest_1.default)(app_1.default)
            .post("/api/login")
            .send(testUser)
            .expect(200);
        const refreshTokenCookie = loginResponse.headers["set-cookie"].find((cookie) => cookie.includes("refreshToken"));
        const refreshTokenStr = refreshTokenCookie.split("=")[1].split(";")[0];
        const logoutResponse = yield (0, supertest_1.default)(app_1.default)
            .post("/api/logout")
            .set("Cookie", `refreshToken=${refreshTokenStr}`)
            .expect(200);
        const { body } = logoutResponse;
        expect(body.msg).toBe("Logout successful");
    }));
    it("200: should clear the refresh token cookie value and set an expired expiration date", () => __awaiter(void 0, void 0, void 0, function* () {
        const testUser = {
            username: "Tom123",
            password: "StrongPassword",
        };
        const loginResponse = yield (0, supertest_1.default)(app_1.default)
            .post("/api/login")
            .send(testUser)
            .expect(200);
        const refreshTokenCookie = loginResponse.headers["set-cookie"].find((cookie) => cookie.includes("refreshToken"));
        const refreshTokenStr = refreshTokenCookie.split("=")[1].split(";")[0];
        const logoutResponse = yield (0, supertest_1.default)(app_1.default)
            .post("/api/logout")
            .set("Cookie", `refreshToken=${refreshTokenStr}`)
            .expect(200);
        const cookies = logoutResponse.headers["set-cookie"];
        const expirationString = cookies[0].split("Expires=")[1].split(";")[0];
        const expirationDate = new Date(expirationString);
        const currentDate = new Date();
        expect(expirationDate.getTime()).toBeLessThan(currentDate.getTime());
        expect(cookies[0]).toMatch(/^refreshToken=;/);
    }));
    it("200: should clear the refresh token in the database", () => __awaiter(void 0, void 0, void 0, function* () {
        const testUser = {
            username: "Tom123",
            password: "StrongPassword",
        };
        const loginResponse = yield (0, supertest_1.default)(app_1.default)
            .post("/api/login")
            .send(testUser)
            .expect(200);
        const refreshTokenCookie = loginResponse.headers["set-cookie"].find((cookie) => cookie.includes("refreshToken"));
        const refreshTokenStr = refreshTokenCookie.split("=")[1].split(";")[0];
        yield (0, supertest_1.default)(app_1.default)
            .post("/api/logout")
            .set("Cookie", `refreshToken=${refreshTokenStr}`)
            .expect(200);
        const user = yield connection_1.default.query("SELECT * FROM users where username = 'Tom123'");
        expect(user.rows[0].refresh_token).toBeNull();
    }));
    it("401: should respond with a msg if refresh token is missing", () => __awaiter(void 0, void 0, void 0, function* () {
        const { body } = yield (0, supertest_1.default)(app_1.default).post("/api/logout").expect(401);
        expect(body.msg).toBe("Refresh token not found");
    }));
    it("401: should respond with a msg if refresh token is invalid", () => __awaiter(void 0, void 0, void 0, function* () {
        const { body } = yield (0, supertest_1.default)(app_1.default)
            .post("/api/logout")
            .set("Cookie", "refreshToken=hello-world")
            .expect(401);
        expect(body.msg).toBe("Invalid refresh token");
    }));
    it("401: should respond with a msg if passed an expired refresh token", () => __awaiter(void 0, void 0, void 0, function* () {
        const expiredRefreshToken = jsonwebtoken_1.default.sign({ id: 1 }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1ms" });
        const { body } = yield (0, supertest_1.default)(app_1.default)
            .post("/api/logout")
            .set("Cookie", `refreshToken=${expiredRefreshToken}`)
            .expect(401);
        expect(body.msg).toBe("Refresh token has expired");
    }));
});
