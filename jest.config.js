const { defaults } = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  setupTestFrameworkScriptFile: './src/test/setupTest.ts',
  unmockedModulePathPatterns: ['react', 'enzyme', 'jest-enzyme'],
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.spec.json',
    },
  },
};
