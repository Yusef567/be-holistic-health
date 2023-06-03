"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const seed_1 = __importDefault(require("../seeds/seed"));
const index_1 = __importDefault(require("../data/test-data/index"));
beforeEach(() => {
    return (0, seed_1.default)(index_1.default);
});
afterAll(() => {
    connection_1.default.end();
});
describe("Test", () => {
    it("should run seed function", () => {
        const sum = 2 + 2;
        expect(sum).toBe(4);
    });
});
