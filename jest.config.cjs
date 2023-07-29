module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: ['node_modules/(?!(lodash-es)/)'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  };
  