import NextJest from 'next/jest';
import { loadEnvConfig } from '@next/env';
import fs from 'fs';

const envFile = fs.readFileSync('.env.development', 'utf8');
fs.writeFileSync('.env.test', envFile);

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const createJestConfig = NextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
