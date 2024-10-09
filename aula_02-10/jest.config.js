/** @type {import('jest').Config} */

const config = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  collectCoverage: true,
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
};

module.exports = config;