module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['node_modules/(?!(lodash-es)/)'],
  };
  