module.exports = {
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  
};