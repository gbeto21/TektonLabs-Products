/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coveragePathIgnorePatterns: ["/node_modules/", "/test/", "/dist/"],
  moduleNameMapper: {
    "@exmpl/(.*)": "<rootDir>/src/$1",
  },
};
