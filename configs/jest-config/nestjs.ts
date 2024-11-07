import type { Config } from 'jest';
import { config as baseConfig } from './base';

const config = {
  ...baseConfig,
  moduleFileExtensions: ['js', 'json', 'ts'],
  testEnvironment: 'node',
  testRegex: '.spec.ts$',
  rootDir: '.',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
} as const satisfies Config;

export default config;
