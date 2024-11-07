import config from '@repo/jest-config/nestjs';

export default {
  ...config,
  testRegex: '.spec.ts$',
  moduleFileExtensions: ['js', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      { tsconfig: '<rootDir>/tsconfig.spec.json', isolatedModules: true },
    ],
  },
  collectCoverageFrom: ['src/**/*.ts', '!**/index.ts'],
};
