import type { Config } from 'jest';
import { config as baseConfig } from './base';

const config = {
  ...baseConfig,
  moduleFileExtensions: ['js', 'json', 'ts'],
  testEnvironment: 'node',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
} as const satisfies Config;

export default config;
