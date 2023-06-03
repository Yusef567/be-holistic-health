import db from "../connection";
import seed from "../seeds/seed";
import testData from "../data/test-data/index";

beforeEach(() => {
  return seed(testData);
});

afterAll(() => {
  db.end();
});

describe("Test", () => {
  it("should run seed function", () => {
    const sum = 2 + 2;
    expect(sum).toBe(4);
  });
});
