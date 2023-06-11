module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [`${__dirname}/src/__tests__/*.test.ts`],
  setupFilesAfterEnv: ["jest-extended/all", "jest-sorted"],
};
