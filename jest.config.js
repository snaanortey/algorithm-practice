module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageThreshold: {
      global: {
        branches: 59,
        functions: 50,
        lines: 65,
        statements: 69,
      },
    },
  };
  