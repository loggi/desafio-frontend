module.exports = {
    roots: ["<rootDir>/src"],
    moduleFileExtensions: ["js", "jsx", "json", "node"],
    testPathIgnorePatterns: ["/node_modules/"],
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|jsx)$",
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    },
    collectCoverageFrom: ["src/**/*.{js,jsx}"],
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: ["src/index.js"],
    coverageReporters: ["json", "lcov", "text", "clover"],
  };
  