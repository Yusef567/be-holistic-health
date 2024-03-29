"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const error_handlers_1 = require("./middleware/error-handlers");
const auth_routes_1 = __importDefault(require("./routes/auth-routes"));
const categories_routes_1 = __importDefault(require("./routes/categories-routes"));
const comments_routes_1 = __importDefault(require("./routes/comments-routes"));
const quizzes_routes_1 = __importDefault(require("./routes/quizzes-routes"));
const users_routes_1 = __importDefault(require("./routes/users-routes"));
const api_endpoints_routes_1 = __importDefault(require("./routes/api-endpoints-routes"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: ["http://localhost:3000", "https://holistichealth.netlify.app"],
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api/auth", auth_routes_1.default);
app.use("/api/categories", categories_routes_1.default);
app.use("/api/comments", comments_routes_1.default);
app.use("/api/quizzes", quizzes_routes_1.default);
app.use("/api/users", users_routes_1.default);
app.use("/api", api_endpoints_routes_1.default);
app.use("/*", error_handlers_1.handlePathNotFound);
app.use(error_handlers_1.handlePSQL400sErrors);
app.use(error_handlers_1.handleCustomErrors);
app.use(error_handlers_1.handleJwtErrors);
app.use(error_handlers_1.handle500Errors);
exports.default = app;
