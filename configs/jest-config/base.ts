import type { Config } from 'jest';

export const config = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'ts', 'json', 'jsx', 'tsx'],
  testEnvironment: 'jsdom',
} as const satisfies Config;
